import Carousel from "react-multi-carousel";
import v1 from "../../Assests/Images/vendor-1.jpg";
import v2 from "../../Assests/Images/vendor-2.jpg";
import v3 from "../../Assests/Images/vendor-3.jpg";
import v4 from "../../Assests/Images/vendor-4.jpg";
import v5 from "../../Assests/Images/vendor-5.jpg";
import v6 from "../../Assests/Images/vendor-6.jpg";
import v7 from "../../Assests/Images/vendor-7.jpg";
import v8 from "../../Assests/Images/vendor-8.jpg";
import v9 from "../../Assests/Images/vendor-9.jpg";

export const OurPartners = () => {
  // responsive for carousel

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // client logos
  const clientLogos = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
  return (
    // ourpartners
    <section className="ourpartners">
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
          <h3 className="text-center fw-bold text-primary ">Our Partners</h3>
          <div className="d-flex justify-content-center  ">
            <div class="divider col-md-2"></div>
          </div>

          <div class="bg-white">
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
              {clientLogos.map((x, index) => (
                <div className="mx-3">
                  <img key={index} className="img-fluid" src={x} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
