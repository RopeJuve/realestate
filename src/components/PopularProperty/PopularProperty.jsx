import React from "react";
import "./PopularProperty.css";
import arrows from "../../assets/Arrows.png";
import img1 from "../../assets/Rectangle 5190.png";
import img2 from "../../assets/Rectangle 5191.png";
import img3 from "../../assets/Group 17882.png";
import arrow from "../../assets/Group 17726.png";

const PopularProperty = () => {
  return (
    <div className="bg-blue">
      <div className="head-container-flex">
        <div className="head-info">
          <h1>Popular property</h1>
          <p>
            Building a next-generation collaborative platform to connect
            renters, homeowners, and agents.
          </p>
        </div>
        <div className="arrow-container">
          <img src={arrows} alt="arrows" />
        </div>
      </div>
      <div className="img-container-flex">
        <div className="flex-container-img">
          <img src={img1} alt="img" />
          <div className="info-flex-container">
            <div>
              <p>
                <span>$</span> 49,143
              </p>
              <p>Gulshan duplex house</p>
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
      </div>
      <div className="bg-white">
        <button>All Property</button>
      </div>
    </div>
  );
};

export default PopularProperty;
