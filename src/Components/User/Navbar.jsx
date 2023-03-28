import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const paths = [
    {
      path: "/",
      label: "Home",
      active: location.pathname === "/" ? true : false,
    },
    {
      path: "/about",
      label: "About",
      active: location.pathname.includes("/about") ? true : false,
    },
    {
      path: "/services",
      label: "Our Services",
      active: location.pathname.includes("/services") ? true : false,
    },
    {
      path: "/careers",
      label: "Careers ",
      active: location.pathname.includes("/careers") ? true : false,
    },

    {
      path: "/contact",
      label: "Contact Us",
      active: location.pathname.includes("/contact") ? true : false,
    },
  ];
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white "
        data-offset="500"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1396",
        }}
      >
        <div class="container">
          <Link to="/" class="navbar-brand">
            Amazon<span class="text-primary"> IT Solutions</span>
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

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              {paths.map((menuitem, index) => (
                <Link
                  key={index}
                  to={menuitem.path}
                  class={`nav-item nav-link ${menuitem.active ? "active" : ""}`}
                >
                  {menuitem.label}
                </Link>
              ))}

              {/* <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div class="dropdown-menu m-0">
                  <a href="price.html" class="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="feature.html" class="dropdown-item">
                    Our features
                  </a>
                  <a href="team.html" class="dropdown-item">
                    Team Members
                  </a>
                  <a href="testimonial.html" class="dropdown-item">
                    Testimonial
                  </a>
                  <a href="quote.html" class="dropdown-item">
                    Free Quote
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div class="navbar-collapse collapse" id="navbarContent">
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
              {/* <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li> */}
          {/* <li class="nav-item">
                <Link class="nav-link" to="/career">
                  Career
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}
