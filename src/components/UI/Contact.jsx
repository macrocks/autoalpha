import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact__wrapper">
        <div className="contact__top-content">
          <h6 className="subtitle">Contact Us</h6>
          <h2>
            Find Us <span className="highlight">Our Team</span>
          </h2>
        </div>
        <div className="contact__content">
          <div className="contact__map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  title="google_map"
                  width="291"
                  height="327"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=london%20bridge&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Your Role:{" "}
                  <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
