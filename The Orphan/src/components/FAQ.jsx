import React from "react";

const HowToPlay = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="font-lacquer text-red-accent">How to Play</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Survive the haunted maze in{" "}
            <span className="font-lacquer">The Orphan</span> on HypeHype. Here
            are the basic controls and objectives:
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-dark-card border border-gray-700 rounded-xl p-8 shadow-lg">
          <ul className="space-y-6 text-left">
            <li>
              <span className="text-red-accent font-bold">WASD</span> — Move
              your character through the maze. Explore every corner!
            </li>
            <li>
              <span className="text-red-accent font-bold">Checkpoints</span> —
              Reach glowing checkpoints to unlock pieces of the story.
            </li>
            <li>
              <span className="text-red-accent font-bold">Find the Key</span> —
              Search the maze for the hidden key. You need it to unlock the exit
              and escape.
            </li>
            <li>
              <span className="text-red-accent font-bold">Escape!</span> — Once
              you have the key, find the exit door and get out before the house
              claims you.
            </li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need more help?
          </h3>
          <p className="text-gray-300 mb-6">
            Reach out if you have questions or want tips for escaping{" "}
            <span className="font-lacquer">The Orphan</span>!
          </p>
          <a
            href="mailto:theorphan@gmail.com"
            className="bg-red-accent hover:bg-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
