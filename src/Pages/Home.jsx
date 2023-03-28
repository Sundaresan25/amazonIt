import banner_image1 from "../Assests/Images/banner_image_1.svg";
import service1 from "../Assests/Images/services/service-1.svg";
import service2 from "../Assests/Images/services/service-2.svg";
import service3 from "../Assests/Images/services/service-3.svg";
import about_frame from "../Assests/Images/about_frame.png";
import bg_pattern from "../Assests/Images/bg_pattern.svg";
import banner_image2 from "../Assests/Images/banner_image_2.svg";
import blog1 from "../Assests/Images/blog/blog-1.jpg";
import blog2 from "../Assests/Images/blog/blog-2.jpg";
import blog3 from "../Assests/Images/blog/blog-3.jpg";
import v1 from "../Assests/Images/vendor-1.jpg";
import v2 from "../Assests/Images/vendor-2.jpg";
import v3 from "../Assests/Images/vendor-3.jpg";
import v4 from "../Assests/Images/vendor-4.jpg";
import v5 from "../Assests/Images/vendor-5.jpg";
import v6 from "../Assests/Images/vendor-6.jpg";
import v7 from "../Assests/Images/vendor-7.jpg";
import v8 from "../Assests/Images/vendor-8.jpg";
import v9 from "../Assests/Images/vendor-9.jpg";

import { testimonials } from "../Utilities/Utilities";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";

export default function Home() {
  return (
    <>
      <header>
        <div class="container">
          <div class="page-banner home-banner">
            <div class="row align-items-center flex-wrap-reverse h-100">
              <div class="col-md-6 py-5 wow fadeInLeft">
                <h1 class="mb-4">Let's Check and Optimize your website!</h1>
                <p class="text-lg text-grey mb-5">
                  Ignite the most powerfull growth engine you have ever built
                  for your company
                </p>
                <a href="#" class="btn btn-primary btn-split">
                  Watch Video{" "}
                  <div class="fab">
                    <span class="mai-play"></span>
                  </div>
                </a>
              </div>
              <div class="col-md-6 py-5 wow zoomIn">
                <div class="img-fluid text-center">
                  <img src={banner_image1} alt="" />
                </div>
              </div>
            </div>
            <a href="#about" class="btn-scroll" data-role="smoothscroll">
              <span class="mai-arrow-down"></span>
            </a>
          </div>
        </div>
      </header>

      <div class="page-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service1} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">SEO Consultancy</h5>
                  <p>
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <a href="service.html" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service2} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Content Marketing</h5>
                  <p>
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <a href="service.html" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-service wow fadeInUp">
                <div class="header">
                  <img src={service3} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Keyword Research</h5>
                  <p>
                    We help you define your SEO objective & develop a realistic
                    strategy with you
                  </p>
                  <a href="service.html" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section" id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3 wow fadeInUp">
              <span class="subhead">About us</span>
              <h2 class="title-section">The number #1 SEO Service Company</h2>
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
              <a href="about.html" class="btn btn-primary mt-3">
                Read More
              </a>
            </div>
            <div class="col-lg-6 py-3 wow fadeInRight">
              <div class="img-fluid py-3 text-center">
                <img src={about_frame} alt="" />
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

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0">
              We Are Here to Grow Your Business Exponentially
            </h1>
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
                  <h4>Best In Industry</h4>
                  <p class="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-award text-white"></i>
                  </div>
                  <h4>Award Winning</h4>
                  <p class="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
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
                  <h4>Professional Staff</h4>
                  <p class="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p class="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
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
              <div class="col-md-3 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <p class="number">126</p>
                  <h4>Happy Clients</h4>{" "}
                </div>
              </div>
              <div class="col-md-3 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <p class="number">535</p>
                  <h4>Awards</h4>{" "}
                </div>
              </div>
              <div class="col-md-3 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <p class="number">896</p>
                  <h4>Total Hours</h4>{" "}
                </div>
              </div>
              <div class="col-md-3 ">
                <div class="count">
                  {" "}
                  <span class="fa fa-smile-o"></span>
                  <p class="number">777</p>
                  <h4>Projects Complete</h4>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container px-lg-5">
          <div
            class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3 fw-bold text-primary">What Say Our Clients!!!</h1>
            <p class="mb-1">
              Vero justo sed sed vero clita amet. Et justo vero sea diam elitr
              amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero
              elitr sit clita.
            </p>
          </div>
          <div class="owl-carousel row testimonial-carousel">
            {/* <OwlCarousel className={"owl-theme"} {...options}> */}
            {testimonials.map((data, index) => (
              <div
                key={index}
                class="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 my-4 col-md-4"
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
                <p class="mt-3">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded-circle"
                    src="img/testimonial-1.jpg"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div class="ps-3">
                    <h6 class="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            ))}
            {/* </OwlCarousel> */}
          </div>
        </div>
      </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
          <h3 className="text-center fw-bold text-primary">Our Partners</h3>
          <div class="bg-white">
            <div class="owl-carousel vendor-carousel">
              <img className="img-fluid m-2" src={v1} alt="" />
              <img className="img-fluid m-2" src={v2} alt="" />
              <img className="img-fluid m-2" src={v3} alt="" />
              <img className="img-fluid m-2" src={v4} alt="" />
              <img className="img-fluid m-2" src={v5} alt="" />
              <img className="img-fluid m-2" src={v6} alt="" />
              <img className="img-fluid m-2" src={v7} alt="" />
              <img className="img-fluid m-2" src={v8} alt="" />
              <img className="img-fluid m-2" src={v9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="page-section banner-info">
        <div
          class="wrap bg-image"
          style={{ backgroundImage: `url(${bg_pattern})` }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                <h2 class="title-section">
                  SEO to Improve Brand <br /> Visibility
                </h2>
                <div class="divider"></div>
                <p>
                  We're an experienced and talented team of passionate
                  consultants who breathe with search engine marketing.
                </p>

                <ul class="theme-list theme-list-light text-white">
                  <li>
                    <div class="h5">SEO Content Strategy</div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </p>
                  </li>
                  <li>
                    <div class="h5">B2B SEO</div>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 py-3 wow fadeInRight">
                <div class="img-fluid text-center">
                  <img src={banner_image2} alt="" />
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
    </>
  );
}
