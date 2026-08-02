import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

type NavbarProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const getInitials = (value: string) => {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Navbar = ({ isLoggedIn, setIsLoggedIn }: NavbarProps) => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const readProfile = () => {
      setAvatar(localStorage.getItem("userAvatar"));
      setUserName(localStorage.getItem("userName") || "");
    };

    readProfile();

    window.addEventListener("profile-updated", readProfile);
    window.addEventListener("focus", readProfile);

    return () => {
      window.removeEventListener("profile-updated", readProfile);
      window.removeEventListener("focus", readProfile);
    };
  }, [isLoggedIn]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? " active" : ""}`;
  const closeMobileMenu = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    const closeButton = offcanvas?.querySelector<HTMLButtonElement>(".btn-close");

    closeButton?.click();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">

        {/* LOGO */}
        <div className="logo-pill">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* TOGGLER */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* OFFCANVAS */}
        <div className="offcanvas offcanvas-start text-bg-dark" id="offcanvasNavbar">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">WORKTRACK</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            />
          </div>

          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1">

              <li className="nav-item mx-2">
                <NavLink to="/" className={navLinkClass} onClick={closeMobileMenu}>Home</NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>About</NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink to="/contact" className={navLinkClass} onClick={closeMobileMenu}>Contact</NavLink>
              </li>

              {isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <NavLink to="/dashboard" className={navLinkClass} onClick={closeMobileMenu}>Dashboard</NavLink>
                  </li>

                  <li className="nav-item mx-2">
                    <NavLink to="/task" className={navLinkClass} onClick={closeMobileMenu}>Task</NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* AUTH BUTTONS */}
            <div className="d-flex align-items-center gap-3 nav-auth-actions">
              {!isLoggedIn ? (
                <>
                  <button
                    className="btn px-3 py-1 rounded-3 nav-action-btn"
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>

                  <button
                    className="btn px-3 py-1 rounded-3 nav-action-btn"
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="nav-avatar"
                    data-bs-dismiss="offcanvas"
                    aria-label="Profile"
                  >
                    {avatar ? (
                      <img src={avatar} alt="" />
                    ) : (
                      <span>{getInitials(userName)}</span>
                    )}
                  </Link>

                  <button
                    className="btn px-3 py-1 rounded-3 nav-action-btn logout"
                    data-bs-dismiss="offcanvas"
                    onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("userName");
                      localStorage.removeItem("userAvatar");
                      setIsLoggedIn(false);
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
