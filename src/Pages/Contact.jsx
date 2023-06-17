import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import contactbanner from "../Assests/Images/contact_amazon_it_solutions.jpg";
import emailjs from "emailjs-com";

export default function Contact() {
  // formData state
  const [formData, setFormData] = React.useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  // formData error
  const [error, setError] = React.useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  // onChangeHandler to upadte state
  function onChangeHandler(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: [e.target.value],
      };
    });
  }

  // form submit function
  function submitHandler(e) {
    e.preventDefault();
    emailjs.init("J-99Tq5wh3CO7LF8_"); //emailjs key to initialize
    if (
      formData.name === "" ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email) ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      setError({
        name: formData.name === "" ? "Name is required" : "",
        email:
          formData.email === "" ? "Email is required" : "Invalid email format",
        subject: formData.subject === "" ? "Subject is required" : "",
        message: formData.message === "" ? "Message is required" : "",
      });
    } else {
      const msg = {
        to: "hr@amazonitsolutions.in", //to email
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
        message: formData.message,
      };

      // using emailjs to trigger email
      emailjs
        .send("service_mclha0n", "template_staqe5l", msg)
        .then((response) => {
          toast.success(
            "Thanks for contacting us, soon we will reach out to you."
          );
          setFormData({
            name: "",
            subject: "",
            email: "",
            message: "",
          });
          setError({
            name: "",
            subject: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Email failed to send:", error);
        });
    }
  }

  // initialize the animate on scroll

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    // contact
    <section className="contact">
      {/* contact banner start */}
      <div class="container-fluid position-relative p-0 nameCon">
        <div class="carousel-item active" style={{ float: "none" }}>
          <img class="w-100" src={contactbanner} alt="contact_banner" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{ maxWidth: "900px" }}>
              {/* <h5 class="text-white text-uppercase mb-3 animated slideInDown">
                    About us
                  </h5> */}
              <h2 class="display-1 text-white mb-md-4 animated zoomIn">
                Contact us
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* contact banner end */}

      <div
        class="container-fluid py-5 wow fadeInUp contactCon"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase" data-aos="fade-up">
              Contact Us
            </h5>
            {/* <h2 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h2> */}
          </div>
          <div class="row g-5 mb-5 justify-content-center mx-auto">
            <div class="col-lg-4" data-aos="fade-up">
              <div
                class="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div class="col-3 bg-primary d-flex align-items-center justify-content-center rounded icon">
                  <i class="fa fa-envelope-open text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Email</h5>
                  <small class="text-primary mb-0">
                    {" "}
                    support@amazonitsolutions.in
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-left">
              <div
                class="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div class="col-3 p-0 bg-primary d-flex align-items-center justify-content-center rounded icon">
                  <i class="fa fa-map-marker-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Visit our office</h5>
                  <small class="text-primary mb-0">
                    {" "}
                    The Skyviwe -10, COWRKS 1st & 2nd Floor, Hitech City Main
                    Road, Raidurgam, Madhapur, Hyderabad - 500081 (Opposite
                    IKEA)
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-5">
            <div
              class="col-lg-6 wow slideInUp"
              data-wow-delay="0.3s"
              data-aos="fade-right"
            >
              {/* contact form  start*/}
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Your Name*"
                      style={{ height: "55px" }}
                      value={formData.name}
                      onChange={onChangeHandler}
                    />
                    <small style={{ color: "red" }}>{error?.name}</small>
                  </div>
                  <div class="col-md-6" data-aos="fade-left">
                    <input
                      type="email"
                      name="email"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Your Email*"
                      style={{ height: "55px" }}
                      value={formData.email}
                      onChange={onChangeHandler}
                    />
                    <small style={{ color: "red" }}>{error?.email}</small>
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      name="subject"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Subject*"
                      style={{ height: "55px" }}
                      value={formData.subject}
                      onChange={onChangeHandler}
                    />
                    <small style={{ color: "red" }}>{error?.subject}</small>
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control border-0 bg-light px-4 py-3"
                      name="message"
                      rows="4"
                      placeholder="Message*"
                      value={formData.message}
                      onChange={onChangeHandler}
                    ></textarea>
                    <small style={{ color: "red" }}>{error?.message}</small>
                  </div>

                  <div class="col-12">
                    <button
                      class="btn btn-primary w-100 py-3"
                      onClick={submitHandler}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {/* contact form end */}
            </div>
            <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              {/* map start*/}
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5241211523176!2d78.38690351487058!3d17.448684104053093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb982836ca528f%3A0x9fa9f3547c8f25da!2s5%2FA%20Plot%20No%2C%20Door%20NO.1-99%208%2C%202%2C%20Image%20Gardens%20Road%2C%20Madhapur%2C%20Hyderabad%20-%20500081%20(Image%20Gardens%20Line)!5e0!3m2!1sen!2sus!4v1659280590097!5m2!1sen!2sus"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
              {/* map end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
