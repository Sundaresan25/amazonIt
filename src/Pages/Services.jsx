import IconTabs from "../Components/User/Tabs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DirectionsIcon from "@mui/icons-material/Directions";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import React, { useEffect } from "react";

import service1 from "../Assests/Images/no_1_staffing_solutions.jpg";
import service2 from "../Assests/Images/private_jobs_in_india.jpg";
import ourservice1 from "../Assests/Images/it_jobs.jpg";
import ourservice2 from "../Assests/Images/non_it_jobs.jpg";
import ourservice3 from "../Assests/Images/other_job.jpg";
import { OurPartners } from "../Components/User/OurPartners";
import reactNativeImage from "../Assests/Images/program/atom.png";
import androidImage from "../Assests/Images/program/android.png";
import csharpImage from "../Assests/Images/program/c-sharp.png";
import djangoImage from "../Assests/Images/program/django.png";
import javaImage from "../Assests/Images/program/java.png";
import jsImage from "../Assests/Images/program/js.png";
import magentoImage from "../Assests/Images/program/magento.png";
import phpImage from "../Assests/Images/program/php.png";
import pythonImage from "../Assests/Images/program/python.png";
import reactImage from "../Assests/Images/program/react.png";
import iosImage from "../Assests/Images/program/smartphone.png";
import aspnetImage from "../Assests/Images/program/web.png";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesbanner from "../Assests/Images/service_amazon_it_solutions.jpg";

export default function Services() {
  // services tabs
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
  // technologies list
  const technologiesList = [
    {
      label: "React Native",
      img: reactNativeImage,
    },
    {
      label: "Android",
      img: androidImage,
    },
    {
      label: "C#",
      img: csharpImage,
    },
    {
      label: "Django",
      img: djangoImage,
    },
    {
      label: "Java",
      img: javaImage,
    },
    {
      label: "JavaScript",
      img: jsImage,
    },
    {
      label: "Magento",
      img: magentoImage,
    },
    {
      label: "PHP",
      img: phpImage,
    },
    {
      label: "Python",
      img: pythonImage,
    },
    {
      label: "React",
      img: reactImage,
    },
    {
      label: "IOS",
      img: iosImage,
    },
    {
      label: "ASP.Net",
      img: aspnetImage,
    },
  ];
  // tab state
  const [tabValue, setTabValue] = React.useState(
    parseInt(sessionStorage.getItem("service-type")) || 0
  );

  // handlechange to change tab value
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  // initialize the animate on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    // services
    <section className="services">
      {/* service banner start */}
      <div class="container-fluid position-relative p-0 nameCon">
        <div class="carousel-item active" style={{ float: "none" }}>
          <img class="w-100" src={servicesbanner} alt="recruitment_services" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{ maxWidth: "900px" }}>
              <h2 class="display-1 text-white mb-md-4 animated zoomIn">
                Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* service banner end */}

      {/* service container start */}

      <div class="container py-5 serviceCon">
        <div class="row g-5">
          <div class="col-lg-7" data-aos="fade-right">
            <div class="section-title position-relative pb-3 mb-md-5">
              <h5 class="fw-bold text-primary text-uppercase">IT Solutions</h5>
              <h2 class="mb-0">
                Amazon IT Solutions - Your Partner for IT Recruitment
              </h2>
            </div>
            <p class="mb-4">
              Amazon IT Solutions is a leading recruitment agency for IT
              companies, dedicated to connecting top talent with some of the
              most innovative and dynamic companies in the industry. Our team of
              experienced recruiters takes a consultative approach to
              recruitment, understanding our clients' needs and culture to find
              the best fit for them. We have an extensive network and deep
              knowledge of the IT industry, allowing us to find candidates who
              not only have the necessary technical skills but who also share
              our clients' values and vision.
            </p>
            <div class="row g-0 mb-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>Personalized
                  Services
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>
                  Wide Reach Across India
                </h5>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>Efficient
                  Recruitment Process
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-check text-primary me-3"></i>Building Teams
                </h5>
              </div>
            </div>
          </div>
          <div
            class="col-lg-5"
            style={{ minHeight: "500px" }}
            data-aos="fade-left"
          >
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={service1}
                style={{ objectFit: "cover" }}
                alt="amazon_it_solutions"
              />
            </div>
          </div>
        </div>
      </div>
      {/* service container end */}

      <div
        class="section-title text-center position-relative pb-3 mb-2 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 class="fw-bold text-primary text-uppercase ">Our Services</h5>
        {/* <h1 class="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1> */}
      </div>

      {/* tabs Ui */}
      <IconTabs
        tabs={tabs}
        value={tabValue}
        disabletab={false}
        position="justify-content-center"
        handleChange={(event, newValue) => {
          handleChange(event, newValue);
        }}
      />
      {/* service tab content  */}
      <div class="page-section mt-0 p-0 serviceTab">
        {tabValue === 0 ? (
          <>
            <div class="container">
              <div class="row align-items-center m-0">
                <div class="col-lg-6 py-3">
                  <h2 class="title-section">IT Services</h2>
                  <div class="divider"></div>

                  <p>
                    At Amazon IT Solutions, we offer a wide range of IT services
                    to meet the needs of businesses in the technology sector.
                    Our services include software development, network
                    management, cybersecurity, cloud computing, and more.
                  </p>
                  <p>
                    We pride ourselves on our expertise and experience in the
                    industry, as well as our commitment to providing
                    high-quality solutions to our clients. Our team of skilled
                    professionals is dedicated to delivering exceptional service
                    and support to help your business succeed.
                  </p>
                  <p>
                    Contact us today to learn more about how we can help your
                    business thrive in the ever-evolving world of technology.
                  </p>
                </div>
                <div class="col-lg-6 py-3">
                  <div class="img-fluid py-3 text-center">
                    <img className="img-fluid" src={ourservice1} alt="about" />
                  </div>
                </div>
              </div>
              <div>
                <h2
                  class=" text-center fw-bold text-primary my-3 "
                  data-aos="fade-up"
                >
                  Discover what you're looking for
                </h2>
                <div className="row">
                  {technologiesList.map((data, index) => (
                    <div className="col-lg-2 col-md-2 ">
                      <div className="shadow rounded my-2 mt-md-5 p-2 ">
                        <img
                          src={data.img}
                          alt={data.label}
                          className="img-fluid technologies-img mx-2"
                        />
                        <span style={{ fontWeight: "600" }}>{data.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : tabValue === 1 ? (
          <div class="container">
            <div class="row align-items-center m-0">
              <div class="col-lg-6 py-3">
                <h2 class="title-section">Non IT Services</h2>
                <div class="divider"></div>

                <p>
                  Our non-IT services include providing recruitment processes
                  for both clients and candidates, specifically for voice and
                  non-voice services. We understand the importance of finding
                  the right talent for your business, which is why we offer
                  recruitment solutions that are tailored to your unique needs.
                </p>
                <p>
                  Our services cover the entire recruitment process, from
                  sourcing candidates to onboarding them into your organization.
                  Contact us today to learn more about how we can help you find
                  the right talent for your voice and non-voice services.
                </p>
                <p>
                  <span
                    style={{
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Voice Process
                  </span>{" "}
                  : Customer Service Executive, Technical Support Executive,
                  Telesales Executive, Telecaller, Teleperformance Associate,
                  Voice Support Associate, Inbound/Outbound Sales Executive,
                  Call Center Agent, etc.
                </p>
                <p>
                  <span style={{ color: "black", fontWeight: "600" }}>
                    Non-Voice Process
                  </span>{" "}
                  : Data Entry Operator, Back Office Executive, Document
                  Management Specialist, Content Moderator, Email Support
                  Executive, Chat Support Executive, Social Media Executive,
                  etc.
                </p>
              </div>
              <div class="col-lg-6 py-3">
                <div class="img-fluid py-3 text-center">
                  <img
                    className="img-fluid"
                    src={ourservice2}
                    alt="non_it_jobs"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="container">
            <div class="row align-items-center m-0">
              <div class="col-lg-6 py-3">
                <h2 class="title-section">Other Services</h2>
                <div class="divider"></div>

                <p>
                  As a recruitment agency, we provide staffing solutions for
                  various positions in the Chat Support and Sales domains.
                </p>
                <p>
                  Some of the job roles we recruit for in the Chat Support
                  domain include Chat Support Executive, Customer Service
                  Representative (Chat), Technical Support Executive (Chat), and
                  Chat Operations Manager.
                </p>
                <p>
                  In the Sales domain, we recruit for positions such as Sales
                  Executive, Business Development Executive, Sales Manager, and
                  Sales Operations Manager. Contact us to learn more about how
                  we can assist with your recruitment needs in these areas.
                </p>
              </div>
              <div class="col-lg-6 py-3">
                <div class="img-fluid py-3 text-center">
                  <img
                    src={ourservice3}
                    className="img-fluid"
                    alt="chat_jobs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* our partner ui */}
      <OurPartners />

      {/* amazon service chart */}
      <div
        class="container-fluid py-1 my-3 wow fadeInUp servicesFeature"
        data-wow-delay="0.1s"
        data-aos="fade-up"
      >
        <div class="container py-1">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase">
              Welcome to Amazon IT Solutions
            </h5>
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
                    <i class="fa fa-users text-white"></i>
                  </div>
                  <h4>Experienced Recruitment Team</h4>
                  <p class="mb-0">
                    We are a leading recruitment agency specializing in IT
                    companies. Our experienced recruiters provide personalized
                    services to both clients and candidates.
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <h4>Wide Reach Across India</h4>
                  <p class="mb-0">
                    We are located in Hyderabad with expanded wings in
                    Bangalore, Chennai, Vijayawada, and other major cities of
                    India, connecting us with top talent across the country.
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
                  alt="connecting_with_top_companies"
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
                    <i class="fa fa-handshake text-white"></i>
                  </div>
                  <h4>Consultative Recruitment Approach</h4>
                  <p class="mb-0">
                    Our consultative approach finds the best fit for clients by
                    understanding their needs and our extensive network finds
                    candidates with the right skills and values.
                  </p>
                </div>
                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    class="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i class="fa fa-clock text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p class="mb-0">
                    Amazon IT Solutions provides seamless recruitment for
                    clients and candidates, building long-term relationships to
                    help clients build high-performing teams that drive their
                    success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="page-section bg-light">
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
      </div> */}
    </section>
  );
}
