import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Games from "./components/Games";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "THE ORPHAN";
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Games />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
