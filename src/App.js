import About from "./components/About/About";
import CountdownSection from "./components/CountdownSection/CountdownSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import PopularProperty from "./components/PopularProperty/PopularProperty";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CountdownSection />
      <About />
      <PopularProperty />
    </div>
  );
}

export default App;
