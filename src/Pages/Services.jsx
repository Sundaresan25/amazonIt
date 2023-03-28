// import service1 from "../Assests/Images/services/service-1.svg";
// import service2 from "../Assests/Images/services/service-2.svg";
// import service3 from "../Assests/Images/services/service-3.svg";
import IconTabs from "../Components/User/Tabs";
import about_frame from "../Assests/Images/about_frame.png";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DirectionsIcon from "@mui/icons-material/Directions";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import React from "react";

import v1 from "../Assests/Images/vendor-1.jpg";
import v2 from "../Assests/Images/vendor-2.jpg";
import v3 from "../Assests/Images/vendor-3.jpg";
import v4 from "../Assests/Images/vendor-4.jpg";
import v5 from "../Assests/Images/vendor-5.jpg";
import v6 from "../Assests/Images/vendor-6.jpg";
import v7 from "../Assests/Images/vendor-7.jpg";
import v8 from "../Assests/Images/vendor-8.jpg";
import v9 from "../Assests/Images/vendor-9.jpg";
import service1 from "../Assests/Images/service1.jpg";
import service2 from "../Assests/Images/service2.jpg";
export default function Services() {
  const tabs = [
    {
      label: "IT Services",
      icon: <BusinessCenterIcon />,
    },
    {
      label: "Non It Services",
      icon: <DirectionsIcon />,
    },
    {
      label: "Other Services",
      icon: <ImportantDevicesIcon />,
    },
  ];

  const [tabValue, setTabValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
                    <li class="breadcrumb-item active">Services</li>
                  </ul>
                </nav>
                <h1 class="text-center">Our Services</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h5 class="fw-bold text-primary text-uppercase">It Services</h5>
              <h1 class="mb-0">
                The Best IT Solution With 10 Years of Experience
              </h1>
            </div>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet Tempor erat elitr rebum at
              clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
              et eos labore. Clita erat ipsum et lorem et sit, sed stet no
              labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
              dolore erat amet
            </p>
            <div class="row g-0 mb-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>Award Winning
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>
                  Professional Staff
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
          </div>
          <div class="col-lg-5" style={{ minHeight: "500px" }}>
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={service1}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5"> */}
      <div
        class="section-title text-center position-relative pb-3 mb-2 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 class="fw-bold text-primary text-uppercase ">Our Services</h5>
        {/* <h1 class="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1> */}
      </div>

      {/* <div class="row">
            <div class="col-lg-4">
              <div class="card-service">
                <div class="header">
                  <img src={service1} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">IT Services</h5>
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
              <div class="card-service">
                <div class="header">
                  <img src={service2} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Non IT Services</h5>
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
              <div class="card-service">
                <div class="header">
                  <img src={service3} alt="" />
                </div>
                <div class="body">
                  <h5 class="text-secondary">Other Services</h5>
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
          </div> */}
      {/* </div>
      </div> */}

      <IconTabs
        tabs={tabs}
        value={tabValue}
        disabletab={false}
        position="justify-content-center"
        handleChange={(event, newValue) => {
          handleChange(event, newValue);
        }}
      />

      <div class="page-section mt-0 p-0">
        {tabValue === 0 ? (
          <>
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
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum nisi saepe eum ipsa. Tempore dolore itaque est
                    blanditiis libero fugiat, ea nostrum nam at tempora quis,
                    facilis officiis nemo mollitia.
                  </p>
                </div>
                <div class="col-lg-6 py-3">
                  <div class="img-fluid py-3 text-center">
                    <img src={about_frame} alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : tabValue === 1 ? (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum nisi saepe eum ipsa. Tempore dolore itaque est
                  blanditiis libero fugiat, ea nostrum nam at tempora quis,
                  facilis officiis nemo mollitia.
                </p>
              </div>
              <div class="col-lg-6 py-3">
                <div class="img-fluid py-3 text-center">
                  <img src={about_frame} alt="about" />
                </div>
              </div>
            </div>
          </div>
        ) : (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum nisi saepe eum ipsa. Tempore dolore itaque est
                  blanditiis libero fugiat, ea nostrum nam at tempora quis,
                  facilis officiis nemo mollitia.
                </p>
              </div>
              <div class="col-lg-6 py-3">
                <div class="img-fluid py-3 text-center">
                  <img src={about_frame} alt="about" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
          <h3 className="text-center fw-bold text-primary">
            Our Hiring Partners
          </h3>
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

      <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-1">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase">Loremu ipsum</h5>
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
                  src={service2}
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

      <div class="page-section bg-light">
        <div class="container">
          <div class="text-center">
            <div class="subhead">Our services</div>
            <h2 class="title-section">How SEO Team Can Help</h2>
            <div class="divider mx-auto"></div>

            <div class="row">
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
              <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
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
        </div>
      </div>
    </>
  );
}
