export default function About() {
    return <>

<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="300">
      <div class="container">
        <a href="#" class="navbar-brand">Seo<span class="text-primary">Gram.</span></a>

        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapsed" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div class="container">
      <div class="page-banner">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul class="breadcrumb justify-content-center py-0 bg-transparent">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">About</li>
              </ul>
            </nav>
            <h1 class="text-center">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="page-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3">
          <h2 class="title-section">The number #1 SEO Service Company</h2>
          <div class="divider"></div>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi saepe eum ipsa. Tempore dolore itaque est blanditiis libero fugiat, ea nostrum nam at tempora quis, facilis officiis nemo mollitia.</p>
        </div>
        <div class="col-lg-6 py-3">
          <div class="img-fluid py-3 text-center">
            <img src="../assets/img/about_frame.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-section">
    <div class="container">
      <div class="text-center">
        <div class="subhead">Pricing Plan</div>
        <h2 class="title-section">Choose plan the right for you</h2>
        <div class="divider mx-auto"></div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 py-3">
          <div class="card-pricing">
            <div class="header">
              <div class="pricing-type">Basic</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>39<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 py-3">
          <div class="card-pricing marked">
            <div class="header">
              <div class="pricing-type">Standar</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>59<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 py-3">
          <div class="card-pricing">
            <div class="header">
              <div class="pricing-type">Professional</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>99<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

      </div>
    </div> <!-- .container -->
  </div> 
    </>;
  }
  