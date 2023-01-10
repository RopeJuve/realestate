import React from "react";
import "./CountdownSection.css";
import icon1 from "../../assets/image 733.png";
import icon2 from "../../assets/image 734.png";
import icon3 from "../../assets/image 736.png";

const CountdownSection = () => {
  return (
    <div className="containerCountdown">
      <div className="descriptionParagraf">
        <p>
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents. Live the way you want. Beautiful homes.
          Incredible locations. Pricing that makes sense.
        </p>
        <p>
          No matter what stage of life you’re in, having friends to share
          experiences with is what it’s all about.
        </p>
      </div>
      <div className="countdown">
        <div className="impresion">
          <div className="icon">
            <img src={icon3} alt='icon' />
            <p> +20K</p>
          </div>
          <p className="subTitle">Clients worldwide</p>
        </div>
        <div className="impresion">
          <div className="icon">
            <img src={icon1} alt='icon'/>
            <p>95.7%</p>
          </div>
          <p className="subTitle">Satisfied Clients</p>
        </div>
        <div className="impresion">
          <div className="icon">
            <img src={icon2} alt='icon' />
            <p>100+</p>
          </div>
          <p className="subTitle">City around</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
