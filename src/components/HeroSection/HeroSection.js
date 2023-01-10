import React from "react";
import "./HeroSection.css";
import image2 from "../../assets/Rectangle 2.png";
import image4 from "../../assets/Rectangle 4.png";
import image3 from "../../assets/Rectangle 3.png";
import image5 from "../../assets/Rectangle 5.png";
import vector from "../../assets/Vector 2.png";
import mouse  from '../../assets/Group 17799.png'

const HeroSection = () => {
  return (
    <div className="container">
      <div className="imgContainer">
        <img src={image2} alt="rooms" />
        <img className="imgGroup" src={image4} alt="rooms" />
        <img src={image3} alt="rooms" />
        <img className="imgGroup" src={image5} alt="rooms" />
      </div>
      <div className="textContainer">
        <h1>Home is where your story begins</h1>
        <p className="description">
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents. Live the way you want. Beautiful homes.
          Incredible locations. Pricing that makes sense.
        </p>
        <div className="searchBarContainer">
          <div className="search">
            <input placeholder="Where are you moving?" />
            <input placeholder="What type of home?" />
            <button className="searchButton">
              Find a home <img src={vector} alt='vector' />
            </button>
          </div>
          <img src={mouse} alt='scrol bottom'/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
