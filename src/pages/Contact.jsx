import React from "react";
import CallImg from "../images/Call.png";
import MessageImg from "../images/Message.png";
import ScheduleImg from "../images/Schedule.png";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT US</h1>
      <h2 className="contact-description">Please feel free to contact us about partnership and Ideas</h2>

      <div className="contact-div">
        <div className="call">
          <img src={CallImg} alt="" />
          <h2>Call Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>
        <div className="message">
          <img src={MessageImg} alt="" />
          <h2>Text Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>
        <div className="schedule">
          <img src={ScheduleImg} alt="" />
          <h2>Schedule Appointment</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            velit quo minima,
          </p>
        </div>
        </div>
        
    </div>
  );
}

export default Contact;
