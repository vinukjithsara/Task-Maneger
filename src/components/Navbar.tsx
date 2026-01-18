type NavbarProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isLoggedIn, setIsLoggedIn }: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">

        {/* LOGO */}
        <div className="logo-pill">
          <img src="/src/assets/logo.png" alt="logo" />
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
        <div
          className="offcanvas offcanvas-start text-bg-dark"
          id="offcanvasNavbar"
        >
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
                <a href="/" className="nav-link active">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a href="/about" className="nav-link">About</a>
              </li>
              <li className="nav-item mx-2">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <a href="/dashboard" className="nav-link">Dashboard</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a href="/task" className="nav-link">Task</a>
                  </li>
                </>
              )}
            </ul>

            {/* AUTH BUTTONS */}
            <div className="d-flex align-items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <a
                    href="#login"
                    className="btn px-3 py-1 rounded-3"
                    style={{ border: "1px solid #00B6B0", color: "#00B6B0" }}
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Login
                  </a>

                  <a
                    href="#signup"
                    className="btn px-3 py-1 rounded-3"
                    style={{ border: "1px solid #00B6B0", color: "#00B6B0" }}
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Sign Up
                  </a>
                </>
              ) : (
                <a
                  href="#logout"
                  className="btn px-3 py-1 rounded-3"
                  style={{ border: "1px solid #ff6b6b", color: "#ff6b6b" }}
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
