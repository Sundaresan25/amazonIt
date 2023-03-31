import about1 from "../Assests/Images/Office Logo 1.jpg";
import image1 from "../Assests/Images/image1.jpg";
import image2 from "../Assests/Images/image2.jpg";

import { teams } from "../Utilities/Utilities";

import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <section className="about">
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
                <h2 class="text-center">About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="container-fluid py-5 wow fadeInUp aboutCon"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-md-2">
                <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                <h2 class="mb-0">Welcome to Amazon IT Solutions</h2>
              </div>
              <p class="mb-4">
                Amazon IT Solutions is a leading provider of IT solutions and
                services to businesses of all sizes. Our team of experienced
                professionals specializes in developing custom software
                solutions, providing cloud computing services, and offering IT
                staffing and recruitment services. With over 10 years of
                experience, we have a proven track record of delivering
                exceptional results for our clients.
              </p>
              <div class="row g-0 mb-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Award Winning
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Custom
                    Solutions
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>24/7 Support
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check text-primary me-3"></i>Experienced
                    Professionals
                  </h5>
                </div>
              </div>
              <div
                class="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div class="bg-primary d-flex align-items-center justify-content-center rounded  phoneLogo">
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Call to ask any question</h5>
                  <h4 class="text-primary mb-0">+91 8121058121 </h4>
                </div>
              </div>
              {/* <a
                href="quote.html"
                class="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </a> */}
            </div>
            <div class="col-lg-5 ">
              <div class="position-relative h-100">
                <img
                  class="img-fluid w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={about1}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section p-0 m-0 aboutCon2" id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3 wow fadeInUp">
              <span class="subhead">About us</span>
              <h2 class="title-section">The number #1 It Solutions Company</h2>
              <div class="divider"></div>

              <p>
                Welcome to Amazon IT Solutions, a leading recruitment agency for
                IT companies. we have been connecting top talent with some of
                the most innovative and dynamic companies in the industry.
              </p>
              <p>
                Our team is comprised of experienced recruiters who are
                dedicated in providing personalized services to both clients and
                candidates. Having base in Hyderabad along with expanded wings
                in Bangalore, Chennai, Vijayawada and other major cities of
                India, we have a wide reach and are able to connect with top
                talent across the country.
              </p>
            </div>
            <div class="col-lg-6 py-3 wow fadeInRight">
              <div class="img-fluid py-3 text-center">
                {/* <img src={about_frame} alt="" />
                 */}
                <Player
                  src="https://assets3.lottiefiles.com/packages/lf20_lrdkqhnc.json"
                  background="transparent"
                  speed={1}
                  className="head-img"
                  // autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section aboutCon3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="img-fluid py-3 text-center">
                <img src={image1} className="img-fluid" alt="about" />
              </div>
            </div>
            <div class="col-lg-6 py-3">
              <h2 class="title-section">Our Mission</h2>
              <div class="divider"></div>

              <p>
                Our mission at Amazon IT Solutions is to connect talented
                candidates with top-notch clients while providing exceptional
                customer service to both. We strive to ensure that our
                recruitment process is seamless, transparent, and efficient for
                everyone involved.
              </p>
              <p>
                We believe in building lasting relationships with our clients
                and candidates, based on mutual trust, respect, and
                transparency. Our ultimate goal is to help our clients build
                high-performing teams and to help candidates find fulfilling
                career opportunities that match their skills and aspirations.
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <h2 class="title-section">Our Vision</h2>
              <div class="divider"></div>
              <p>
                At Amazon IT Solutions, our vision is to become the go-to
                technology partner for businesses looking to drive digital
                transformation and innovation. We are committed to providing
                cutting-edge solutions that empower our clients to achieve their
                business goals and stay ahead of the competition.
              </p>
              <p>
                We aim to be recognized as a leader in the technology industry,
                known for our expertise, innovation, and dedication to customer
                satisfaction. Our goal is to build long-term partnerships with
                our clients and help them succeed in the digital age.
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <div class="img-fluid py-3 text-center">
                <img src={image2} className="img-fluid" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-xxl py-5">
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
      </div> */}
      {/* <div class="container-xxl py-5">
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
      </div> */}
    </section>
  );
}
