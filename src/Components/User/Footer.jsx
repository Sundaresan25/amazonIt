import { useLocation, Link } from "react-router-dom";

export default function Footer() {
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

  // social  medias links
  const socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100091522183109&is_tour_completed=true",
      logo: "mai-logo-facebook-f",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/amazon-it-solution/",
      logo: "mai-logo-linkedin",
    },

    {
      name: "Instagram",
      url: "https://instagram.com/amazonitsolutions?igshid=OTk0YzhjMDVlZA==",
      logo: "mai-logo-instagram",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCKyKyxpcwMrZVpjI3ypp1xQ",
      logo: "mai-logo-youtube",
    },
  ];

  return (
    // footer
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
            </div>
            <div
              class="col-lg-3 py-3"
              // style={{ borderRight: "1px solid grey" }}
            >
              <h5>Quick Links</h5>
              <ul class="footer-menu">
                {/* menus mapping */}
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
                {/* social media links mapping */}
                {socialMedia.map((data, index) => (
                  <li key={index}>
                    <a href={data.url} target="_blank" rel="noreferrer">
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
                The Skyviwe -10, COWRKS 1st & 2nd Floor,
                <br />
                Sy no 83/1, Hitech City Main Road, Raidurgam,
                <br /> Madhapur, Hyderabad - 500081 <br /> (Opposite IKEA)
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
