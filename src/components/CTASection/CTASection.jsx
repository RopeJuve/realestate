import './CTASection.css'
import img1 from '../../assets/Rectangle 5187.png'
import img2 from '../../assets/Rectangle 5188.png'

const CTASection = () => {
  return (
    <div className="section-container">
      <div className="img-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="text-container">
        <h1>Ready to find your dream home?</h1>
        <p>
          Building a next-generation collaborative platform to connect renters,
          homeowners, and agents. Live the way you want. Beautiful homes.
        </p>
        <div className="button-container">
            <button>Find Home</button>
            <button className='contactUs-button'>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
