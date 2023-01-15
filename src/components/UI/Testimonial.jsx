import React from "react";
import "../../styles/testimonial.css";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  return (
    <section id="testimonial" className="testimonial">
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted By more than
            <span className="highlight"> 200 customer</span>
          </h2>
        </div>


        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                he European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                their pronunciation and their most common words. Everyone
                realizes why a new common language would be desirable: one cou
                dsds fsfs
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">John Deo</h5>
                  <p className="description">CEO, WoskSpace Network</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                he European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                their pronunciation and their most common words. Everyone
                realizes why a new common language would be desirable: one cou
                dsds fsfs
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Alicia Count</h5>
                  <p className="description">CIO, Slae Market</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                he European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                their pronunciation and their most common words. Everyone
                realizes why a new common language would be desirable: one cou
                dsds fsfs
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Marker Neb</h5>
                  <p className="description">CTO, AG Security</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
