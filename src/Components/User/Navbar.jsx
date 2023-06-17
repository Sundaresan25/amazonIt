import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/Amazon-Logo1.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  // useLocation
  const location = useLocation();

  // menus
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

  return (
    <>
      {/* navbar */}
      <nav
        class={`navbar navbar-expand-lg navbar-light bg-white px-5 py-3 py-lg-0 `}
        style={{
          position: "sticky",
          top: "0",
          zIndex: "9999",
        }}
      >
        {/* link tag to navigate */}
        <Link to="/" class="navbar-brand p-0 Logo">
          {/* Amazon<span class="text-primary"> IT Solutions</span> */}
          <img
            src={Logo}
            alt="amazon_it_solutions_logo"
            className="img-fluid"
          />
        </Link>
        {/* navbar collapse for small devices */}
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
            {/* menu mapping */}
            {paths.map((menuitem, index) => (
              <Link
                key={index}
                to={menuitem.path}
                className={`nav-link ${menuitem.active ? "active" : ""}`}
              >
                {menuitem.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
