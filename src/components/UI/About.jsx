import React from "react";
import "../../styles/about.css";
import aboutImg from '../../images/about-us.jpg';

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First Working Process",
    desc: "he European languages are members of the same family. Their separate existence is a myth. ue vocabulary. Everyone realizes why a new common language would be desirable: one cou",
  },
  {
    icon: "ri-team-line",
    title: "Dedicate Team",
    desc: "he European languages are members of the same family. Their separate existence is a myth. ue vocabulary. Everyone realizes why a new common language would be desirable: one cou",
  },
  {
    icon: "ri-customer-service-line",
    title: "24/7 customer service",
    desc: "he European languages are members of the same family. Their separate existence is a myth. ue vocabulary. Everyone realizes why a new common language would be desirable: one cou",
  },
];

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="abount__wrapper">
            <div className="about__content">
              <h6 className="subtitle">Why Choose us</h6>
              <h2>Specialist in auto design technology</h2>
              <h2 className="highlight">Financial Challenges</h2>
              <p className="description about__content-desc">
                he European languages are members of the same family. Their
                separate existence is a myth. cabulary. Everyone realizes why a
                new common language would be desirable: one cou
              </p>

              <div className="choose_item-wrapper">
                {chooseData.map((item, index) => (
                  <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon">
                      <i class={item.icon}></i>
                    </span>
                    <div>
                      <h4 className="choose__us-title">{item.title}</h4>
                      <p className="description about__content-desc">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__img">
                <img src={aboutImg} alt="aboutus" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
