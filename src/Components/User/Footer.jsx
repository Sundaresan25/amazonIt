import { Link } from "react-router-dom";
export default function Footer() {
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
              <h5>Company</h5>
              <ul class="footer-menu">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="#">Career</Link>
                </li>
                <li>
                  <Link to="#">Advertise</Link>
                </li>
                <li>
                  <Link to="#">Terms of Service</Link>
                </li>
                <li>
                  <Link to="#">Help & Support</Link>
                </li>
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
              <h5>Newsletter</h5>
              <p>Get updates, news or events on your mail.</p>
              <form action="#">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your email.."
                />
                <button type="submit" class="btn btn-success btn-block mt-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
