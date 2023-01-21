import "./Footer.css";
import Logo from "../../assets/layer1.png";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="email">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>dweling</p>
        </div>
        <p>
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents.
        </p>
        <div className="send-email">
            <input placeholder="email" />
            <button className="searchButton">Send</button>
          </div>
      </div>
      <div className="menu1">
      {["Dvelinge", "Finde my home", "Homeowners", "Community", "Reviews"].map(
          (menuItem, index) => (
            <a href='/' id={`p${index}`} key={index}>
              {menuItem}
            </a>
          )
        )}
      </div>
      <div className="menu1">
      {["Company", "Features", "Articles", "Press", "Careers", 'API documentations'].map(
          (menuItem, index) => (
            <a href='/' id={`p${index}`} key={index}>
              {menuItem}
            </a>
          )
        )}
      </div>
      <div className="menu1">
      {["Support", "Contact", "Privacy", "Terms", "FAQ"].map(
          (menuItem, index) => (
            <a href='/' id={`p${index}`} key={index}>
              {menuItem}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
