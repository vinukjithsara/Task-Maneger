import type { JSX } from "react";
function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fs-4" href="#">
          Bootstrap Navbar
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Bootstrap Navbar
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1">
              <li className="nav-item mx-2">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="d-flex align-items-center gap-3">
              <a href="#login" className="text-white">
                Login
              </a>
              <a
                href="#signup"
                className="text-white text-decoration-none px-3 py-1 rounded-4"
                style={{ backgroundColor: "#f94ca4" }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
