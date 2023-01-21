import About from "./components/About/About";
import CountdownSection from "./components/CountdownSection/CountdownSection";
import CTASection from "./components/CTASection/CTASection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import PopularProperty from "./components/PopularProperty/PopularProperty";
import TestimonialSection from "./components/TestimonialSectio/TestimonialSection";
import Footer from './components/Footer/Footer'
import Social from "./components/Footer/Social";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CountdownSection />
      <About />
      <PopularProperty />
      <TestimonialSection />
      <CTASection />
      <Footer />
      <Social />
    </div>
  );
}

export default App;
