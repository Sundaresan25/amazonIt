import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white sticky"
        data-offset="500"
      >
        <div class="container">
          <Link to="/" class="navbar-brand">
            Amazon<span class="text-primary">It Solutions</span>
          </Link>

          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="btn btn-primary ml-lg-2" to="#">
                  Free Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
