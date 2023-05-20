import service1 from "../Assests/Images/services/service-1.svg";
import service2 from "../Assests/Images/services/service-2.svg";
import service3 from "../Assests/Images/services/service-3.svg";

import bg_pattern from "../Assests/Images/bg_pattern.svg";
import banner_image2 from "../Assests/Images/banner_image_2.svg";

import blog3 from "../Assests/Images/blog/blog-3.jpg";
import CountUp from "react-countup";

import { Player } from "@lottiefiles/react-lottie-player";
import { testimonials } from "../Utilities/Utilities";
import { Link, useLocation } from "react-router-dom";
import carousel1 from "../Assests/Images/carousel-1.jpg";
import carousel2 from "../Assests/Images/carousel-2.jpg";
import carousel3 from "../Assests/Images/carousel-3.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { OurPartners } from "../Components/User/OurPartners";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Logo from "../Assests/Images/Amazon-Logo1.png";

export default function Home() {
  const location = useLocation();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
    <section className="home">
      {/* <header>
        <div class="container">
          <div class="page-banner home-banner">
            <div class="row align-items-center flex-wrap-reverse h-100">
              <div class="col-md-6 py-5 wow fadeInLeft">
                <h1 class="mb-4  heading1">
                  Connecting top talent with diverse job opportunities!
                </h1>
                <p class="text-lg text-grey mb-5">
                  Find your dream job in IT, non-IT, or chat roles. Empowering
                  your career journey with exciting job opportunities
                </p>
                <Link to="/services" class="btn btn-primary btn-split">
                  Read More{" "}
                  <div class="fab">
                    <span class="mai-play"></span>
                  </div>
                </Link>
              </div>
              <div class="col-md-6 py-5 wow zoomIn">
                <div class="img-fluid text-center">
                  {/* <img src={banner_image1} alt="" /> */}
      {/* 
                  <Player
                    src="https://assets4.lottiefiles.com/packages/lf20_ebbfp58m.json"
                    background="transparent"
                    speed={1}
                    className="head-img"
                    autoplay
                  />
                </div>
              </div>
            </div>
            <a href="#about" class="btn-scroll" data-role="smoothscroll">
              <span class="mai-arrow-down"></span>
            </a>
          </div>
        </div>
      </header> */}{" "}
      {/* */}
      <div class="container-fluid position-relative p-0 homeCon">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade "
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={carousel1} alt="image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    Revolutionize Your IT Solutions
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Recruitment agency for IT companies
                  </h1>
                  <Link
                    to="/services"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-decoration-none"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight text-decoration-none btn-outline-light"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={carousel2} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    Innovative IT Solutions
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Creative &amp; Innovative Digital Solutions
                  </h1>
                  <Link
                    to="/services"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-decoration-none"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight text-decoration-none btn-outline-light"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={carousel3} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    Leading IT Services Provider
                  </h5>
                  <h1 class="display-1 text-white mb-md-4 animated zoomIn">
                    Creative Digital Solutions
                  </h1>
                  <Link
                    to="/services"
                    class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft text-decoration-none"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contact"
                    class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight text-decoration-none btn-outline-light"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            ``
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="page-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service1} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">IT Jobs</h5>
                  <p>
                    We provide a variety of IT job opportunities for aspiring
                    candidates
                  </p>
                  <Link
                    to="/services"
                    class="btn btn-primary"
                    onClick={() => {
                      sessionStorage.setItem("school-type", 0);
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service2} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Non-IT Jobs</h5>
                  <p>
                    We offer a range of non-IT job opportunities to help you
                    start your career
                  </p>
                  <Link
                    to="/services"
                    class="btn btn-primary"
                    onClick={() => sessionStorage.setItem("service-type", 1)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service3} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Chat Support Jobs</h5>
                  <p>
                    We provide efficient and reliable chat support job
                    opportunities for job seekers
                  </p>
                  <Link
                    to="/services"
                    class="btn btn-primary"
                    onClick={() => sessionStorage.setItem("service-type", 2)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section" id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3 wow fadeInUp" data-aos="fade-right">
              <h2 class="subhead">About us</h2>
              {/* <h2 class="title-section">The number #1 IT Solutions Company</h2> */}
              <div class="divider"></div>

              <p>
                Welcome to Amazon IT Solutions, a leading recruitment agency for
                IT companies. we have been connecting top talent with some of
                the most innovative and dynamic companies in the industry.
              </p>
              <p>
                At Amazon IT Solutions, we are committed to provide a seamless
                and efficient recruitment process for both clients and
                candidates. We strive to build long-term relationships with our
                clients and help them build high-performing teams that drive
                their business forward
              </p>
              <Link to="/about" class="btn btn-primary mt-3">
                Read More
              </Link>
            </div>
            <div class="col-lg-6 py-3 wow fadeInRight" data-aos="fade-left">
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
      {/* <div class="page-section bg-light">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <div class="subhead">Our services</div>
            <h2 class="title-section">How SEO Team Can Help</h2>
            <div class="divider mx-auto"></div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div class="features">
                <div class="header mb-3">
                  <span class="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>
                  We analyse your website's structure, internal architecture &
                  other key
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        class="container-fluid py-5 wow fadeInUp whyChooseUs"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase ">Why Choose Us</h5>
            <h2 class="mb-0">
              Connecting Top Talent with Innovative IT Companies
            </h2>
          </div>
          <div class="row g-5">
            <div class="col-lg-4">
              <div class="row g-5">
                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-cubes text-white"></i>
                  </div>
                  <h4>Personalized Services</h4>
                  <p class="mb-0">
                    Our experienced recruiters are dedicated to providing
                    personalized services to both clients and candidates,
                    ensuring the best fit for both.
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-award text-white"></i>
                  </div>
                  <h4>Wide Reach</h4>
                  <p class="mb-0">
                    With bases in Hyderabad, Bangalore, Chennai, Vijayawada, and
                    other major cities in India, we have a wide reach and can
                    connect with top talent across the country.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4  wow zoomIn"
              data-wow-delay="0.9s"
              style={{ minHeight: "350px" }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src={blog3}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row g-5">
                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-users-cog text-white"></i>
                  </div>
                  <h4>Consultative Approach</h4>
                  <p class="mb-0">
                    We take a consultative approach to recruitment, taking the
                    time to understand our clients' needs and culture in order
                    to find the best fit for them.
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>Efficient Process</h4>
                  <p class="mb-0">
                    Our extensive network and deep knowledge of the IT industry
                    allow us to find candidates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section banner-seo-check">
        <div
          class="wrap bg-image"
          style={{ backgroundImage: `url(${bg_pattern})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-4 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  {/* <p class="number">126</p> */}
                  <CountUp
                    style={{ fontSize: "2rem", fontWeight: "600" }}
                    class="number"
                    start={0}
                    end={126}
                    duration={3}
                  />
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <h4>Happy Clients</h4>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <CountUp
                    style={{ fontSize: "2rem", fontWeight: "600" }}
                    class="number"
                    start={0}
                    end={100}
                    duration={3}
                  />
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <h4>Placements</h4>{" "}
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <CountUp
                    style={{ fontSize: "2rem", fontWeight: "600" }}
                    class="number"
                    start={0}
                    end={100}
                    duration={3}
                  />
                  <span style={{ fontSize: "2rem" }}>+</span>
                  <h4>Companies</h4>{" "}
                </div>
              </div>
              {/* <div class="col-md-3 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <p class="number">777</p>
                  <h4>Projects Complete</h4>{" "}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp client" data-wow-delay="0.1s">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 class="mb-3 fw-bold text-primary">What Say Our Clients!!!</h2>
            <p class="mb-1">
              We pride ourselves on delivering exceptional service to our
              clients.
              <br />
              Here are some of the kind words they've had to say about working
              with us:
            </p>
          </div>
          <div class="owl-carousel row testimonial-carousel">
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
              autoPlaySpeed={1500}
              keyBoardControl={true}
              // customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              arrows={false}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonials.map((data, index) => (
                <div
                  key={index}
                  class="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 mx-3 my-4 testimonial"
                >
                  <div
                    class="d-flex align-items-center justify-content-center position-absolute top-0 start-0 ms-5 translate-middle bg-primary rounded-circle"
                    style={{
                      width: "45px",
                      height: "45px",
                      marginTop: " -3px",
                    }}
                  >
                    <i class="fa fa-quote-left text-white"></i>
                  </div>
                  <p class="mt-3 text-justify">{data.sentence}</p>
                  <div class="d-flex align-items-center">
                    {/* <img
                      class="img-fluid flex-shrink-0 rounded-circle"
                      src="img/testimonial-1.jpg"
                      style={{ width: "50px", height: "50px" }}
                    /> */}
                    <div class="ps-3">
                      <h6 class="fw-bold mb-1">{data.name}</h6>
                      <small>{data.profession}</small>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <OurPartners />
      <div class="page-section banner-info infoCover">
        <div
          class="wrap bg-image"
          style={{ backgroundImage: `url(${bg_pattern})` }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                <h2 class="title-section">
                  IT Staffing and Recruitment Services
                </h2>
                <div class="divider"></div>
                <p>
                  Welcome to Amazon IT Solutions, a leading recruitment agency
                  for IT companies. We have been connecting top talent with some
                  of the most innovative and dynamic companies in the industry.
                </p>
                <ul class="theme-list theme-list-light text-white">
                  <li>
                    <div class="h5">Experienced Recruiters</div>
                    <p>
                      Our team is comprised of experienced recruiters who are
                      dedicated to providing personalized services to both
                      clients and candidates.
                    </p>
                  </li>
                  <li>
                    <div class="h5">Wide Reach</div>
                    <p>
                      With our base in Hyderabad and expanded wings in
                      Bangalore, Chennai, Vijayawada, and other major cities of
                      India, we have a wide reach and are able to connect with
                      top talent across the country.
                    </p>
                  </li>

                  <li>
                    <div class="h5">Long-term Relationships</div>
                    <p>
                      At Amazon IT Solutions, we are committed to providing a
                      seamless and efficient recruitment process for both
                      clients and candidates. We strive to build long-term
                      relationships with our clients and help them build
                      high-performing teams that drive their business forward.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 py-3 wow fadeInRight">
                <div class="img-fluid text-center">
                  <img className="img-fluid" src={banner_image2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="page-section">
        <div class="container">
          <div class="text-center wow fadeInUp">
            <div class="subhead">Our Services</div>
            <h2 class="title-section">Amazon It solutions</h2>
            <div class="divider mx-auto"></div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="card-blog">
                <div class="header">
                  <div class="post-thumb">
                    <img src={blog1} alt="" />
                  </div>
                </div>
                <div class="body">
                  <h5 class="post-title">
                    <a href="#">Source of Content Inspiration</a>
                  </h5>
                  <div class="post-date">
                    Posted on <a href="#">27 Jan 2020</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="card-blog">
                <div class="header">
                  <div class="post-thumb">
                    <img src={blog2} alt="" />
                  </div>
                </div>
                <div class="body">
                  <h5 class="post-title">
                    <a href="#">Source of Content Inspiration</a>
                  </h5>
                  <div class="post-date">
                    Posted on <a href="#">27 Jan 2020</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 py-3 wow fadeInUp">
              <div class="card-blog">
                <div class="header">
                  <div class="post-thumb">
                    <img src={blog3} alt="" />
                  </div>
                </div>
                <div class="body">
                  <h5 class="post-title">
                    <a href="#">Source of Content Inspiration</a>
                  </h5>
                  <div class="post-date">
                    Posted on <a href="#">27 Jan 2020</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 mt-4 text-center wow fadeInUp">
              <a href="blog.html" class="btn btn-primary">
                View More
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
