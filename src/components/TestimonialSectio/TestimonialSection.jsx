import "./TestimonialSection.css";
import userIcon from "../../assets/Ellipse 11.png";
import img from '../../assets/Group 17827.png';
import logos from '../../assets/Logos.png';

const TestimonialSection = () => {
  return (
    <div className="testimonials-container">
      <div className="wrap-testimonials">
        <div className="title">
          <h1>What client say</h1>
          <div  className="dot-container">
            <div className="title-line-otline"></div>
            <div className="title-line"></div>
            <div className="title-line-otline"></div>
          </div>
        </div>
        <div className="user-testimonial">
          <img src={img} alt='' />
          <p>
            I love Dwelling! They make it super easy and safe to find a room for
            rent. Customer service is vary quick and helpful. Highly recommend
            this platform. Really a great and wonderful platform to find rooms
            and houses in quick time.
          </p>
          <div className="icon-user">
            <img src={userIcon} alt="" />
            <div className="heders">
              <h3 className="user-name">Joe Root</h3>
              <h3 className="subtitle">UI/UX designer</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="logos">
        <img src={logos} alt="logos" />
      </div>
    </div>
  );
};

export default TestimonialSection;
