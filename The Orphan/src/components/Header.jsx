import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg bg-opacity-95 backdrop-blur-md"
          : "bg-dark-bg bg-opacity-90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/src/assets/image/logo2.png"
            alt="The Orphan Logo"
            className="w-10 h-10 object-contain rounded-full shadow-lg border-2 border-red-accent bg-black"
          />
          <span className="text-2xl font-bold text-white font-lacquer">
            THE ORPHAN
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-300 hover:text-red-accent transition-colors"
            type="button"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-red-accent transition-colors"
            type="button"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("creators")}
            className="text-gray-300 hover:text-red-accent transition-colors"
            type="button"
          >
            Creators
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-red-accent transition-colors"
            type="button"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-bg bg-opacity-95 backdrop-blur-md border-t border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-red-accent transition-colors text-left"
              type="button"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-red-accent transition-colors text-left"
              type="button"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("creators")}
              className="text-gray-300 hover:text-red-accent transition-colors text-left"
              type="button"
            >
              Creators
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-red-accent transition-colors text-left"
              type="button"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
