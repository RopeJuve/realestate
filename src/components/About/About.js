import React from "react";
import img from "../../assets/Rectangle 2.png";
import account from "../../assets/Ellipse 1902.png";
import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="flex-row-center">
        <div className="img-container">
          <img src={img} alt="img" />
          <div className="contact">
            <img src={account} alt="account" />
            <h2>David Warner</h2>
            <p>Property Agent</p>
            <button>Messages</button>
          </div>
        </div>
        <div className="text-info-flex">
          <h1>Providing the effective solutions for you</h1>
          <p>
            Building a next-generation collaborative platform to connect
            renters, homeowners, and agents. Live the way you want. Beautiful
            homes. Incredible locations. Pricing that makes sense.
          </p>
          <button>More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
