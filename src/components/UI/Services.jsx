import React from "react";
import "../../styles/services.css";

const servicedata = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    icon: "ri-terminal-box-line",
    title: "Web Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    icon: "ri-landscape-line",
    title: "Logo Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    icon: "ri-customer-service-line",
    title: "Resource Team",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2>Save Time managing your Business</h2>
            <h2 className="highlight">Our Best Services</h2>
          </div>

          <div className="services__item-wrapper">
            {
            servicedata.map((item, index) => (
              <div className="services__item" key={index}>
                <span className="services__icon">
                  <i class={item.icon}></i>
                </span>
                <h3 className="services__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
