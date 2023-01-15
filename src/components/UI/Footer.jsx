import React from "react";
import "../../styles/footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analystics",
  },
  {
    path: "#",
    display: "Computing",
  },
  {
    path: "#",
    display: "Desinging",
  },
];


const quickLinks02 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Blogs",
  },
  {
    path: "#",
    display: "Community",
  },
  {
    path: "#",
    display: "Documentation",
  },
];


const quickLinks03 = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#",
    display: "About us",
  },
  {
    path: "#",
    display: "Service",
  },
  {
    path: "#",
    display: "Contact us",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>AutoAlpha</h2>
            <p className="description">Grow with us</p>
          </div>

          <div className="footer__quicks-links">
            <h3 className="quick__links-title">Solution</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quicks-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>


          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>


      <p className="copyright">Copyright @{year}, Designed & Developed by mac consultancy.
      All Rights Reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
