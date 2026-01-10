const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">

        <a className="navbar-brand fs-4" href="#"><img className="logo"src="/src/assets/logo.jpg" alt="WORKTRACK Logo" /></a>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
              <li className="nav-item mx-2"><a className="nav-link active">Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link">About</a></li>
              <li className="nav-item mx-2"><a className="nav-link">Services</a></li>
              <li className="nav-item mx-2"><a className="nav-link">Contact</a></li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <a className="text-white text-decoration-none">Login</a>
              <a
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
};

export default Navbar;
