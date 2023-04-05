import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/Amazon-Logo1.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();

  const paths = [
    {
      path: "/",
      label: "Home",
      active: location.pathname === "/" ? true : false,
    },
    {
      path: "/services",
      label: "Services",
      active: location.pathname.includes("/services") ? true : false,
    },
    {
      path: "/careers",
      label: "Careers ",
      active: location.pathname.includes("/careers") ? true : false,
    },
    {
      path: "/about",
      label: "About",
      active: location.pathname.includes("/about") ? true : false,
    },

    {
      path: "/contact",
      label: "Contact Us",
      active: location.pathname.includes("/contact") ? true : false,
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <nav
        class={`navbar navbar-expand-lg navbar-light bg-white ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
        data-offset="500"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "9999",
        }}
      >
        <div class="container">
          <div className="d-flex justify-content-between">
            <Link to="/" class="navbar-brand p-0 Logo">
              {/* Amazon<span class="text-primary"> IT Solutions</span> */}
      {/* <img src={Logo} alt="" className="img-fluid" />
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse"
            id="navbarCollapse"
            style={{ zIndex: "9999" }}
          >
            <div class="navbar-nav ms-auto py-0">
              {paths.map((menuitem, index) => (
                <Link
                  key={index}
                  to={menuitem.path}
                  className={`nav-link ${menuitem.active ? "active" : ""}`}
                >
                  {menuitem.label}
                </Link>
              ))} */}

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
      {/* </div>
          </div> */}

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
      {/* </div>
      </nav> */}

      <nav
        class={`navbar navbar-expand-lg navbar-light bg-white px-5 py-3 py-lg-0 `}
        style={
          location.pathname !== "/"
            ? {
                position: "sticky",
                top: "0",
                zIndex: "9999",
              }
            : {}
        }
      >
        <Link to="/" class="navbar-brand p-0 Logo">
          {/* Amazon<span class="text-primary"> IT Solutions</span> */}
          <img src={Logo} alt="" className="img-fluid" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            {paths.map((menuitem, index) => (
              <Link
                key={index}
                to={menuitem.path}
                className={`nav-link ${menuitem.active ? "active" : ""}`}
              >
                {menuitem.label}
              </Link>
            ))}
            {/* <a href="index.html" class="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" class="nav-item nav-link">
              About
            </a>
            <a href="service.html" class="nav-item nav-link">
              Services
            </a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>
              <div class="dropdown-menu m-0">
                <a href="blog.html" class="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" class="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <div class="nav-item dropdown">
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
            </div>
            <a href="contact.html" class="nav-item nav-link">
              Contact
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}
