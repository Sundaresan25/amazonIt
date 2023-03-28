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
                    <li class="breadcrumb-item active">Careers</li>
                  </ul>
                </nav>
                <h1 class="text-center">Careers</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid py-5">
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
                  About Careers
                </h5>
                <h1>Innovative Way To Learn</h1>
              </div>
              <p>
                Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
                ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
                sadipscing et erat eirmod diam kasd labore clita est. Diam
                sanctus gubergren sit rebum clita amet, sea est sea vero sed et.
                Sadipscing labore tempor at sit dolor clita consetetur diam.
                Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet
                ea labore, dolor justo et sit gubergren diam sed sed no ipsum.
                Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet
              </p>

              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>
                  <i class="fa fa-check-circle  text-primary mx-2"></i>Persius
                  appetere pro mea harum ridens
                </li>
                <li>
                  <i class="fa fa-check-circle text-primary mx-2"></i>
                  Instructior vis at causae legimus luptatum mel
                </li>
                <li>
                  <i class="fa fa-check-circle text-primary mx-2"></i>Maluisset
                  id persius appetere pro mea harum
                </li>
              </ul>
              {/* <a
                href=""
                class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
              >
                Learn More
              </a> */}
            </div>
          </div>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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

          <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5">
              <div
                class="section-title text-center position-relative pb-3 mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <h5 class="fw-bold text-primary text-uppercase">Our Jobs</h5>
                <h2 class="mb-0">Loremum ipsumvataajk dpsodspodpo </h2>
              </div>
              <div class="row g-5">
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
                    </div>
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
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            Send Your resume to
            <span class="text-primary"> colorgmail@tSolutions</span>
          </div>
        </div>
      </div>
    </>
  );
};
