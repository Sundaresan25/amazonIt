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

  const socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100091522183109&is_tour_completed=true",
      logo: "mai-logo-facebook-f",
    },
    {
      name: "LinkedIn",
      url: "",
      logo: "mai-logo-linkedin",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/message/QA5EQSULC22MM1",
      logo: "mai-logo-whatsapp",
    },
    {
      name: "Instagram",
      url: "",
      logo: "mai-logo-instagram",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCKyKyxpcwMrZVpjI3ypp1xQ",
      logo: "mai-logo-youtube",
    },
  ];

  return (
    <section className="footer">
      <footer
        class="page-footer bg-image footerCon "
        // style=background-image: url(../assets/img/world_pattern.svg);"
      >
        <div class="container">
          <div class="row ">
            <div
              class="col-lg-3 py-3"
              // style={{ borderRight: "1px solid grey" }}
            >
              <h5>Amazon IT Solutions</h5>
              <p>
                we are committed to provide a seamless and efficient recruitment
                process for both clients and candidates.
              </p>
              {/* 
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
              </div> */}
            </div>
            <div
              class="col-lg-3 py-3"
              // style={{ borderRight: "1px solid grey" }}
            >
              <h5>Quick Links</h5>
              <ul class="footer-menu">
                {paths.map((data, index) => (
                  <li key={index}>
                    <Link to={data.path}>{data.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              class="col-lg-3 py-3"
              // style={{ borderRight: "1px solid grey" }}
            >
              <h5>Follow us</h5>
              <ul class="footer-menu">
                {socialMedia.map((data, index) => (
                  <li key={index}>
                    <a href={data.url} target="_blank">
                      {" "}
                      <span class={data.logo}></span> {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-3 py-3">
              <h5>Corporate Office</h5>
              <p className="mb-0">
                5/A Plot No, Door NO.1-99 8, 2,
                <br /> Image Gardens Road,
                <br /> Madhapur, Hyderabad - 500081.
              </p>
              <br />
              <p>
                #01 JCMS Complex,
                <br />
                8th Cross Tc Palya Main Road,
                <br /> Opposite Ideal Mart Ramamurthy Nagar,
                <br />
                Bangalore 560016.
              </p>
            </div>

            {/* <div class="col-lg-3 py-3">
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
            </div> */}
          </div>
        </div>
      </footer>
    </section>
  );
}
