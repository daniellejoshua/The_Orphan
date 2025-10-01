import React, { useEffect, useState } from "react";

const Hero = () => {
  const [flash, setFlash] = useState(false);

  // Lightning flash effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 400); // flash duration
    }, 4000); // 4 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // Ambient creepy sound effect
  useEffect(() => {
    const audio = new Audio("/src/assets/Creepymusic1.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();
    return () => audio.pause();
  }, []);

  // (Removed duplicate ambient sound effect)

  const [showTrailer, setShowTrailer] = useState(false);

  const handleOpenTrailer = () => setShowTrailer(true);
  const handleCloseTrailer = () => setShowTrailer(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark-bg"
    >
      {/* Background Image/Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Full background image with blur and darken filter */}
        <img
          src="/src/assets/image/gifbg.gif"
          alt="Maze Background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{
            zIndex: 1,
            filter: "brightness(0.7) saturate(1.2)",
            transition: "filter 0.5s",
          }}
        />
        {/* Enhanced dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(30,0,0,0.35) 60%, rgba(0,0,0,0.65) 100%)",
            mixBlendMode: "multiply",
          }}
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
          <span className="text-red-accent font-lacquer flicker">
            The Orphan
          </span>
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
          <button
            className="border-2 border-red-accent text-red-accent hover:bg-red-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all"
            onClick={handleOpenTrailer}
          >
            Watch Trailer
          </button>
        </div>
        {/* Creepy eyes in the corner */}

        <img
          src="/src/assets/image/eyes.png"
          alt="creepy eyes"
          className="fixed bottom-10 right-10 w-16 opacity-70 animate-pulse z-40 pointer-events-none select-none"
          style={{ filter: "drop-shadow(0 0 8px #b91c1c)" }}
        />
      </div>

      {/* Trailer Modal Dialog */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6 border-2 border-red-accent animate-fade-in">
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-accent focus:outline-none"
              onClick={handleCloseTrailer}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-4 font-lacquer tracking-wide">
              The Orphan Trailer
            </h2>
            <div className="aspect-w-16 aspect-h-9 w-full rounded overflow-hidden mb-2">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="The Orphan Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-96 rounded"
              ></iframe>
            </div>
          </div>
        </div>
      )}

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

      {/* Blood Splatter Images */}
    </section>
  );
};

export default Hero;
