import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow px-4 rounded-3 m-3">
      {/* Logo */}
      <Link className="navbar-brand fw-bold text-info" to="/">
        worktrack
      </Link>

      {/* Mobile button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav ms-auto me-3">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              More
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="/features">Features</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/reviews">Reviews</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="d-flex gap-2">
          <Link to="/signup" className="btn btn-outline-info">
            SIGN UP
          </Link>
          <Link to="/login" className="btn btn-info text-dark">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
