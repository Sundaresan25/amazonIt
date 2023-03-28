export default function Contact() {
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
                    <li class="breadcrumb-item active">Contact</li>
                  </ul>
                </nav>
                <h1 class="text-center">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div
            class="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 class="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
          </div>
          <div class="row g-5 mb-5">
            <div class="col-lg-4">
              <div
                class="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  class="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Call to ask any question</h5>
                  <h4 class="text-primary mb-0">+91 8121058121 </h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  class="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-envelope-open text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Email to get free quote</h5>
                  <h4 class="text-primary mb-0">info@example.com</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  class="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa fa-map-marker-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Visit our office</h5>
                  <h4 class="text-primary mb-0">123 Street, NY, USA</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-5">
            <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="email"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control border-0 bg-light px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control border-0 bg-light px-4 py-3"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="page-section"> */}
      {/* <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-pin"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Address</p>
            <p class="mb-0 text-secondary">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-call"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Phone</p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                +1 232 3235 324
              </a>
            </p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                +00 1122 3344 5566
              </a>
            </p>
          </div>
          <div class="col-lg-4 py-3">
            <div class="display-4 text-center text-primary">
              <span class="mai-mail"></span>
            </div>
            <p class="mb-3 font-weight-medium text-lg">Email Address</p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                support@seogram.com
              </a>
            </p>
            <p class="mb-0">
              <a href="#" class="text-secondary">
                hello@seogram.com
              </a>
            </p>
          </div>
        </div>
      </div> */}

      {/* <div class="container-fluid mt-4">
          <div class="row ">
            <div class="col-lg-6 mb-5 mb-lg-0 mx-auto rounded shadow">
              <form action="#" class="contact-form py-5 px-lg-5">
                <h2 class="mb-4 font-weight-medium text-secondary">
                  Get in touch
                </h2>
                <div class="row form-group">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label class="text-black" for="fname">
                      First Name
                    </label>
                    <input type="text" id="fname" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-black" for="lname">
                      Last Name
                    </label>
                    <input type="text" id="lname" class="form-control" />
                  </div>
                </div>

                <div class="row form-group text-center">
                  <div class="col-md-12">
                    <label class="text-black" for="email">
                      Email
                    </label>
                    <input type="email" id="email" class="form-control" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="subject">
                      Subject
                    </label>
                    <input type="text" id="subject" class="form-control" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write your notes or questions here..."
                    ></textarea>
                  </div>
                </div>

                <div class="row form-group mt-4">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* <div class="col-lg-6 px-0">
              <div class="maps-container">
                <div id="google-maps"></div>
              </div>
            </div> */}
      {/* </div>
        </div>
      </div> */}
    </>
  );
}
