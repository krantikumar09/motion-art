import "./App.css";
import Feature from "./components/Feature/Feature";
import FeaturedCompany from "./components/FeaturedCompany/FeaturedCompany";
import Features from "./components/Features/Features";
import FluidSimulation from "./components/FluidAnimation/FluidSimulation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Support from "./components/Support/Support";
import Use from "./components/Use/Use";

function App() {
  return (
    <div>
      <FluidSimulation />
      <div className="md:container mx-auto px-4">
        <Header />
        <Hero />
        <FeaturedCompany />
        <Feature />
        <Use />
        <Support />
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
