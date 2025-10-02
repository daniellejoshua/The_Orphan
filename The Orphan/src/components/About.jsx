import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        {/* About The Orphan Game */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="text-red-accent font-lacquer">The Orphan</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="font-lacquer">The Orphan</span> is a terrifying
              maze escape game on{" "}
              <span className="text-red-accent font-bold">HypeHype</span>! You
              wake up alone in a haunted house, with only one goal:{" "}
              <span className="text-red-accent font-bold">
                find your way out
              </span>{" "}
              before the darkness finds you. Every room is a twist, every
              hallway a trap, and the house itself is a shifting maze. Can you
              keep your cool and escape, or will you become another lost soul?
            </p>
          </div>
          <div className="relative">
            <div className="bg-dark-card rounded-lg p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-accent mb-2">
                    1
                  </div>
                  <div className="text-gray-300">Maze House</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-accent mb-2">
                    100+
                  </div>
                  <div className="text-gray-300">Dead Ends</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-accent mb-2">
                    1
                  </div>
                  <div className="text-gray-300">Way Out</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-accent mb-2">
                    ∞
                  </div>
                  <div className="text-gray-300">Scares</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is The Orphan? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-dark-card rounded-lg p-8 border border-gray-700">
              <img
                src="/src/assets/image/poster.png"
                alt="The Orphan Maze Game Poster"
                className="w-full h-auto max-h-96 object-contain rounded-lg mb-4"
              />
              <div className="text-center">
                <div className="text-red-accent font-semibold mb-2">
                  HypeHype Game
                </div>
                <div className="text-white font-bold text-xl">
                  Escape the Maze House
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is{" "}
              <span className="text-red-accent font-lacquer">The Orphan</span>?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="font-lacquer">The Orphan</span> is a horror maze
              game where you must escape a haunted house by solving puzzles,
              dodging traps, and outsmarting the maze itself. Every playthrough
              is a new challenge—no two escapes are the same!
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Play now on{" "}
              <span className="text-red-accent font-bold">HypeHype</span> and
              see if you can survive the maze. Will you make it out, or will the
              house claim you too?
            </p>
            <button
              className="bg-red-accent hover:bg-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() =>
                window.open(
                  "https://hypehype.com/game/the-orphan/r/10ZO1w1eSGncAsR",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Play on HypeHype
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
