import About from "./components/About/About";
import CountdownSection from "./components/CountdownSection/CountdownSection";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CountdownSection />
      <About />
    </div>
  );
}

export default App;
