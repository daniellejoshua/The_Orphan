import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark-bg"
    >
      {/* Background Image/Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Full background image with effects */}
        <img
          src="/src/assets/image/trybg.png"
          alt="Maze Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 blur-sm scale-105"
          style={{ zIndex: 1 }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-dark-bg/70 to-black/90"
          style={{ zIndex: 2 }}
        ></div>
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            zIndex: 3,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-red-accent font-lacquer">The Orphan</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Lost in a haunted maze, you must outsmart the darkness and find your
          way out. Every path is a mystery, every shadow hides a secret. Will
          you escape, or will the house claim you forever?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-accent hover:bg-red-hover text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105">
            Play on HypeHype
          </button>
          <button className="border-2 border-red-accent text-red-accent hover:bg-red-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all">
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-red-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
