import { useEffect } from "react";
import about1 from "../Assests/Images/Office Logo.jpg";
import image1 from "../Assests/Images/image1.jpg";
import image2 from "../Assests/Images/image2.jpg";

import { teams } from "../Utilities/Utilities";

import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutbanner from "../Assests/Images/aboutbanner.jpg";

import Carousel from "react-multi-carousel";

export default function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <section className="about">
      {/* <header>
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
      </header> */}

      <div class="container-fluid position-relative p-0 nameCon">
        <div class="carousel-item active" style={{ float: "none" }}>
          <img class="w-100" src={aboutbanner} alt="image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{ maxWidth: "900px" }}>
              {/* <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    About us
                  </h5> */}
              <h2 class="display-1 text-white mb-md-4 animated zoomIn">
                About us
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid py-5 wow fadeInUp aboutCon"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7" data-aos="fade-right">
              <div class="section-title position-relative pb-3 mb-md-2">
                <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                <h2 class="mb-0">Welcome to Amazon IT Solutions</h2>
              </div>
              <p class="mb-4">
                Amazon IT Solutions is a leading provider of IT solutions and
                services to businesses of all sizes. Our team of experienced
                professionals specializes in developing custom software
                solutions, providing cloud computing services, and offering IT
                staffing and recruitment services. we have a proven track record
                of delivering exceptional results for our clients.
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
                  <h5 class="mb-2">Contact Us</h5>
                  <h6 class="text-primary mb-0">
                    support@amazonitsolutions.in
                  </h6>
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
            <div class="col-lg-5 " data-aos="fade-left">
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
            <div class="col-lg-6 py-3 wow fadeInUp" data-aos="fade-up">
              <span class="subhead">About us</span>
              {/* <h2 class="title-section">The number #1 IT Solutions Company</h2> */}
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
            <div class="col-lg-6 py-3" data-aos="fade-right">
              <div class="img-fluid py-3 text-center">
                <img src={image1} className="img-fluid" alt="about" />
              </div>
            </div>
            <div class="col-lg-6 py-3" data-aos="fade-left">
              <h2 class="text-primary">Our Mission</h2>
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
            <div class="col-lg-6 py-3" data-aos="fade-up">
              <h2 class="text-primary">Our Vision</h2>
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
            <div class="col-lg-6 py-3" data-aos="fade-up">
              <div class="img-fluid py-3 text-center">
                <img src={image2} className="img-fluid" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={image1}
                alt=""
                data-aos="fade-up"
              />
            </div>
            <div class="col-lg-8">
              <div class="text-left mb-4">
                <h5
                  class="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                  data-aos="fade-up"
                >
                  Our CEO Says
                </h5>
                <h2>"Bridging the gap between talent and opportunity."</h2>
              </div>
              <p data-aos="fade-up" style={{ textAlign: "justify" }}>
                As CEO of Amazon IT Solutions, I am confident in our ability to
                deliver outstanding results for our clients. We understand the
                importance of finding the perfect fit, and we work tirelessly to
                ensure that every placement is a success. Our industry
                expertise, coupled with our extensive network of candidates,
                allows us to provide tailored solutions that meet the unique
                needs of each organization we work with. We believe that our
                success is a reflection of the exceptional talent we work with,
                and we are committed to fostering a culture of diversity,
                inclusivity, and excellence. We strive to create a supportive
                and collaborative environment where everyone can thrive and
                reach their full potential.
              </p>
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
            <h2 class="mb-3 text-primary">Our Team Members</h2>
          </div>

          <Carousel
            ssr
            partialVisbile
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            customTransition="transform 0.5s ease-in-out" // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            arrows={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {teams.map((data, index) => (
              <div class="wow" key={index}>
                <div class="team-item border-top border-5 border-primary rounded shadow teamCon mx-1 mx-md-4">
                  <div class="text-center p-4">
                    <img
                      class="img-fluid rounded-circle mb-4"
                      src={data.Profile}
                      alt={data.name}
                    />
                    <h5 class="fw-bold mb-1">{data.name}</h5>
                    <small>{data.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
