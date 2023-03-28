import about_frame from "../Assests/Images/about_frame.png";
import about1 from "../Assests/Images/about1.jpg";

import { teams } from "../Utilities/Utilities";

export default function About() {
  return (
    <>
      <header>
        <div class="container">
          <div class="page-banner">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-md-6">
                <nav aria-label="Breadcrumb">
                  <ul class="breadcrumb justify-content-center py-0 bg-transparent">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active">About</li>
                  </ul>
                </nav>
                <h1 class="text-center">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                <h1 class="mb-0">
                  The Best IT Solution With 10 Years of Experience
                </h1>
              </div>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div class="row g-0 mb-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Award Winning
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Professional
                    Staff
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>24/7 Support
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div
                class="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  class="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Call to ask any question</h5>
                  <h4 class="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
              <a
                href="quote.html"
                class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </a>
            </div>
            <div class="col-lg-5" style={{ minHeight: "500px" }}>
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={about1}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <h2 class="title-section">Our Company</h2>
              <div class="divider"></div>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nisi saepe eum ipsa. Tempore dolore itaque est blanditiis libero
                fugiat, ea nostrum nam at tempora quis, facilis officiis nemo
                mollitia.
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <div class="img-fluid py-3 text-center">
                <img src={about_frame} alt="about" />
              </div>
            </div>
            <div class="col-lg-6 py-3">
              <div class="img-fluid py-3 text-center">
                <img src={about_frame} alt="about" />
              </div>
            </div>
            <div class="col-lg-6 py-3">
              <h2 class="title-section">Our Mission</h2>
              <div class="divider"></div>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nisi saepe eum ipsa. Tempore dolore itaque est blanditiis libero
                fugiat, ea nostrum nam at tempora quis, facilis officiis nemo
                mollitia.
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <h2 class="title-section">Our Vision</h2>
              <div class="divider"></div>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nisi saepe eum ipsa. Tempore dolore itaque est blanditiis libero
                fugiat, ea nostrum nam at tempora quis, facilis officiis nemo
                mollitia.
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <div class="img-fluid py-3 text-center">
                <img src={about_frame} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Our Team Members</h1>
            <p class="mb-1">
              Vero justo sed sed vero clita amet. Et justo vero sea diam elitr
              amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero
              elitr sit clita.
            </p>
          </div>
          <div class="row g-4">
            {teams.map((data, index) => (
              <div
                class="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                  <div class="text-center p-4">
                    <img
                      class="img-fluid rounded-circle mb-4"
                      src={data.Profile}
                      alt={data.name}
                    />
                    <h5 class="fw-bold mb-1">{data.name}</h5>
                    <small>{data.designation}</small>
                  </div>
                  <div class="d-flex justify-content-center bg-primary p-3">
                    <a class="btn btn-square text-primary bg-white m-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square text-primary bg-white m-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square text-primary bg-white m-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Shared VS Dedicated Server</h1>
            <p class="mb-1">
              Vero justo sed sed vero clita amet. Et justo vero sea diam elitr
              amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero
              elitr sit clita.
            </p>
          </div>
          <div class="row g-5 comparison position-relative">
            <div class="col-lg-6 pe-lg-5">
              <div class="section-title position-relative mx-auto mb-4 pb-4">
                <h3 class="fw-bold mb-0">Shared Server</h3>
              </div>
              <div class="row gy-3 gx-5">
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <i class="fa fa-server fa-3x text-primary mb-3"></i>
                  <h5 class="fw-bold">99.99% Uptime</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <i class="fa fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h5 class="fw-bold">100% Secured</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <i class="fa fa-cog fa-3x text-primary mb-3"></i>
                  <h5 class="fw-bold">Control Panel</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <i class="fa fa-headset fa-3x text-primary mb-3"></i>
                  <h5 class="fw-bold">24/7 Support</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 ps-lg-5">
              <div class="section-title position-relative mx-auto mb-4 pb-4">
                <h3 class="fw-bold mb-0">Dedicated Server</h3>
              </div>
              <div class="row gy-3 gx-5">
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <i class="fa fa-server fa-3x text-secondary mb-3"></i>
                  <h5 class="fw-bold">99.99% Uptime</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <i class="fa fa-shield-alt fa-3x text-secondary mb-3"></i>
                  <h5 class="fw-bold">100% Secured</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <i class="fa fa-cog fa-3x text-secondary mb-3"></i>
                  <h5 class="fw-bold">Control Panel</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <i class="fa fa-headset fa-3x text-secondary mb-3"></i>
                  <h5 class="fw-bold">24/7 Support</h5>
                  <p>
                    Ipsum dolor diam stet stet kasd diam sea stet sed rebum
                    dolor ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
