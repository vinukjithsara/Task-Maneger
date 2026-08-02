import { useEffect, useRef, useState } from "react";

type UserProfile = {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
};

const AVATAR_SIZE = 256;

const resizeImageToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = AVATAR_SIZE;
        canvas.height = AVATAR_SIZE;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }

        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;

        ctx.drawImage(img, sx, sy, side, side, 0, 0, AVATAR_SIZE, AVATAR_SIZE);

        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };

      img.onerror = () => reject(new Error("Could not load image"));
      img.src = reader.result as string;
    };

    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
};

const getInitials = (value: string) => {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Profile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userId = localStorage.getItem("userId");

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [profileError, setProfileError] = useState("");
  const [profileSuccess, setProfileSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  useEffect(() => {
    if (!userId) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`)
      .then((res) => res.json())
      .then((data: { user: UserProfile }) => {
        setName(data.user.name || "");
        setEmail(data.user.email || "");
        setAvatar(data.user.avatar || null);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [userId]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setProfileError("Please choose an image file.");
      return;
    }

    try {
      const dataUrl = await resizeImageToDataUrl(file);
      setAvatar(dataUrl);
      setProfileError("");
    } catch {
      setProfileError("Could not process that image. Try a different one.");
    }
  };

  const saveProfile = () => {
    if (!userId) return;

    if (!name.trim() || !email.trim()) {
      setProfileError("Name and email are required.");
      return;
    }

    setSavingProfile(true);
    setProfileError("");
    setProfileSuccess("");

    fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, avatar }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Could not save changes");

        localStorage.setItem("userName", data.user.name || "");
        if (data.user.avatar) {
          localStorage.setItem("userAvatar", data.user.avatar);
        } else {
          localStorage.removeItem("userAvatar");
        }

        window.dispatchEvent(new Event("profile-updated"));
        setProfileSuccess("Profile updated.");
      })
      .catch((err) => setProfileError(err.message || "Something went wrong."))
      .finally(() => setSavingProfile(false));
  };

  const savePassword = () => {
    if (!userId) return;

    if (!currentPassword || !newPassword) {
      setPasswordError("Fill in both password fields.");
      return;
    }

    if (newPassword.length < 4) {
      setPasswordError("New password must be at least 4 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    setSavingPassword(true);
    setPasswordError("");
    setPasswordSuccess("");

    fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, avatar, currentPassword, newPassword }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Could not update password.");

        setPasswordSuccess("Password updated.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((err) => setPasswordError(err.message || "Something went wrong."))
      .finally(() => setSavingPassword(false));
  };

  return (
    <section className="dashboard-page">

      {/* HERO HEADER */}
      <div className="hero-banner dashboard-hero">
        <div className="hero-banner-bg" aria-hidden="true" />

        <div className="dashboard-hero-container">
          <div className="hero-banner-left">
            <span className="hero-pill">Account</span>

            <h1 className="hero-banner-title">Profile</h1>

            <p className="hero-banner-desc">
              Update your picture and account details.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        {loading ? (
          <p className="dashboard-empty-row">Loading your profile...</p>
        ) : (
          <>
            {/* AVATAR */}
            <div className="dashboard-card profile-avatar-card">
              <div className="profile-avatar">
                {avatar ? (
                  <img src={avatar} alt="Profile" />
                ) : (
                  <span>{getInitials(name || email)}</span>
                )}
              </div>

              <div className="profile-avatar-actions">
                <button
                  type="button"
                  className="profile-avatar-upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {avatar ? "Change Picture" : "Upload Picture"}
                </button>

                {avatar && (
                  <button
                    type="button"
                    className="profile-avatar-remove-btn"
                    onClick={() => setAvatar(null)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />

              <p className="profile-avatar-hint">
                JPG or PNG. Cropped to a square automatically.
              </p>
            </div>

            {/* ACCOUNT DETAILS */}
            <div className="dashboard-card">
              <h2 className="profile-card-title">Account Details</h2>

              {profileError && <p className="auth-error">{profileError}</p>}
              {profileSuccess && <p className="profile-success">{profileSuccess}</p>}

              <label className="auth-field">
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="auth-field">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button
                className="auth-submit"
                onClick={saveProfile}
                disabled={savingProfile}
              >
                {savingProfile ? "Saving..." : "Save Changes"}
              </button>
            </div>

            {/* CHANGE PASSWORD */}
            <div className="dashboard-card">
              <h2 className="profile-card-title">Change Password</h2>

              {passwordError && <p className="auth-error">{passwordError}</p>}
              {passwordSuccess && <p className="profile-success">{passwordSuccess}</p>}

              <label className="auth-field">
                <span>Current Password</span>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </label>

              <label className="auth-field">
                <span>New Password</span>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>

              <label className="auth-field">
                <span>Confirm New Password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>

              <button
                className="auth-submit"
                onClick={savePassword}
                disabled={savingPassword}
              >
                {savingPassword ? "Updating..." : "Update Password"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
