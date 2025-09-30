import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Games from "./components/Games";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <Hero />
      <About />
      <Games />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
