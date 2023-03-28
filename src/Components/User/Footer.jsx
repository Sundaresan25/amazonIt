import { useLocation, Link } from "react-router-dom";

export default function Footer() {
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
      <footer
        class="page-footer bg-image"
        // style=background-image: url(../assets/img/world_pattern.svg);"
      >
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-3 py-3">
              <h3>Amazon It Solutions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, repellendus eius blanditiis in iusto eligendi iure.
              </p>

              <div class="social-media-button">
                <a href="#">
                  <span class="mai-logo-facebook-f"></span>
                </a>
                <a href="#">
                  <span class="mai-logo-twitter"></span>
                </a>
                <a href="#">
                  <span class="mai-logo-google-plus-g"></span>
                </a>
                <a href="#">
                  <span class="mai-logo-instagram"></span>
                </a>
                <a href="#">
                  <span class="mai-logo-youtube"></span>
                </a>
              </div>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Quick Links</h5>
              <ul class="footer-menu">
                {paths.map((data, index) => (
                  <li>
                    <Link to={data.path}>{data.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Contact Us</h5>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <a href="#" class="footer-link">
                +00 1122 3344 5566
              </a>
              <a href="#" class="footer-link">
                seogram@temporary.com
              </a>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Our Services</h5>
              <ul class="footer-menu">
                <li>
                  <Link to={"#"}>IT Services</Link>
                </li>
                <li>
                  <Link to={"#"}>Non-IT Services</Link>
                </li>
                <li>
                  <Link to={"#"}>Other Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
