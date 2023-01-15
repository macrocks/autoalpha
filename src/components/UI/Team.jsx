import React from "react";
import "../../styles/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "County hurrey",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "John Web",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Katrina Marr",
    position: "CEO",
  },
  {
    imgUrl: team04,
    name: "Alisa Tek",
    position: "Managing Director",
  },
];

const Team = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>
              Meet with <span className="highlight">Our Team</span>
            </h2>
          </div>

          <div className="team__wrapper">
            {
              teamMembers.map((item,index)=> (
                <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="team" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
