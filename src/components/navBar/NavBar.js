import React from "react";
import Logo from "../../assets/layer1.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
        <p>dweling</p>
      </div>

      <ul>
        {["Home", "About us", "Renters", "Homeawners", "Reviews"].map(
          (menuItem, index) => (
            <a href={`#${menuItem}`} key={index}>
              {menuItem}
            </a>
          )
        )}
      </ul>

      <button>Register</button>
    </div>
  );
};

export default NavBar;
