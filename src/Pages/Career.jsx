import career1 from "../Assests/Images/career1.jpg";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import blog3 from "../Assests/Images/blog/blog-3.jpg";
import { Player } from "@lottiefiles/react-lottie-player";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Career = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="careers">
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
                    <li class="breadcrumb-item active">Careers</li>
                  </ul>
                </nav>
                <h2 class="text-center">Careers</h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid py-5 careersCon">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={career1}
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <div class="text-left mb-4">
                <h5
                  class="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                >
                  Careers at Amazon IT Solutions
                </h5>
                <h2>Innovative Way To Build Your Career</h2>
              </div>
              <p>
                At Amazon IT Solutions, we are passionate about delivering
                innovative technology solutions to our clients. We are always on
                the lookout for talented individuals who share our passion and
                want to be part of a dynamic and collaborative team. Join us and
                be part of a company that is shaping the future of technology.
              </p>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <i class="fa fa-check-circle  text-primary mx-2"></i>
                  Competitive compensation and benefits package
                </li>
                <li>
                  <i class="fa fa-check-circle text-primary mx-2"></i>
                  Opportunities for growth and development
                </li>
                <li>
                  <i class="fa fa-check-circle text-primary mx-2"></i>A
                  collaborative and inclusive work environment
                </li>
              </ul>
              {/* <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
      Learn More
    </a> */}
            </div>
          </div>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="careersAcordian"
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Join our IT Solutions team at Amazon</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At Amazon, we are looking for talented and motivated IT
                professionals to join our team and help us continue to innovate
                and deliver cutting-edge technology solutions to our customers.
                Our IT Solutions group is responsible for developing and
                maintaining critical systems that support our business
                operations around the world.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="careersAcordian"
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                Opportunities for IT professionals at Amazon
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are seeking individuals with a strong background in software
                engineering, network engineering, or infrastructure
                architecture. As a member of our team, you will have the
                opportunity to work on complex projects that require innovative
                solutions to unique challenges. You will work alongside some of
                the brightest minds in the industry and have the chance to
                develop new skills and advance your career.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="careersAcordian"
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                Diversity and inclusivity in Amazon's IT Solutions team
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Whether you are just starting out in your career or are an
                experienced IT professional, Amazon offers a range of
                opportunities to suit your interests and experience level. We
                are committed to fostering a diverse and inclusive workplace,
                and we encourage applicants from all backgrounds to apply.
              </Typography>
            </AccordionDetails>
          </Accordion>

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
                  {/* <a href="service.html" class="btn btn-primary">
                    Read More
                  </a> */}
          {/* </div>
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
                  {/* <a href="service.html" class="btn btn-primary">
                    Read More
                  </a> */}
          {/* </div>
              </div> */}
          {/* </div>
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
                  {/* <a href="service.html" class="btn btn-primary">
                    Read More
                  </a> */}
          {/* </div>
              </div>
            </div>
          </div> */}

          <div
            class="container-fluid py-md-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="container py-md-5">
              <div
                class="section-title text-center position-relative pb-md-3 mb-0 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <h5 class="fw-bold text-primary text-uppercase">Our Jobs</h5>
                <p class="mb-0">
                  We regret to inform you that there are currently no vacancies
                  available in our IT Solutions team at Amazon. However, we
                  encourage you to check back on our careers page regularly for
                  updates on any new job openings that may arise in the future.
                  Thank you for your interest in joining our team.{" "}
                </p>
              </div>

              <Player
                src="https://assets1.lottiefiles.com/private_files/lf30_ugedlis6.json"
                background="transparent"
                speed={1}
                className="head-img img-fluid"
                autoplay
              />
              {/* <div class="row g-5">
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                  <img class="img-fluid" src={blog3} alt="" />
                  <a
                    class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    Web Designer
                  </a>
                  <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden"></div>
                    <div class="p-4">
                      <div class="d-flex mb-3">
                        <small class="me-3">
                          <i class="far fa-user text-primary me-2"></i>John Doe
                        </small>
                        <small>
                          <i class="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>
                        Dolor et eos labore stet justo sed est sed sed sed dolor
                        stet amet
                      </p>
                      {/* <a class="text-uppercase" href="">
                        Apply Now<i class="bi bi-arrow-right"></i>
                      </a> */}
              {/* </div>
                  </div>
                </div>
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                  <img class="img-fluid" src={blog3} alt="" />
                  <a
                    class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    App developer
                  </a>
                  <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden"></div>
                    <div class="p-4">
                      <div class="d-flex mb-3">
                        <small class="me-3">
                          <i class="far fa-user text-primary me-2"></i>John Doe
                        </small>
                        <small>
                          <i class="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>
                        Dolor et eos labore stet justo sed est sed sed sed dolor
                        stet amet
                      </p>
                      {/* <a class="text-uppercase" href="">
                        Apply Now<i class="bi bi-arrow-right"></i>
                      </a> */}
              {/* </div>
                  </div>
                </div> */}
              {/* <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                  <img class="img-fluid" src={blog3} alt="" />
                  <a
                    class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    Web Design
                  </a>
                  <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden"></div>
                    <div class="p-4">
                      <div class="d-flex mb-3">
                        <small class="me-3">
                          <i class="far fa-user text-primary me-2"></i>John Doe
                        </small>
                        <small>
                          <i class="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 class="mb-3">How to build a website</h4>
                      <p>
                        Dolor et eos labore stet justo sed est sed sed sed dolor
                        stet amet
                      </p>
                      {/* <a class="text-uppercase" href="">
                        Apply Now<i class="bi bi-arrow-right"></i>
                      </a> */}
              {/* </div>
                  </div>
                </div>
              </div>  */}
              {/* </div>  */}
            </div>
          </div>
          {/* <div className="text-center">
            Send Your resume to
            <span class="text-primary"> colorgmail@tSolutions</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};
