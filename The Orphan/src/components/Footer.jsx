import React from "react";

const Footer = () => {
  // No pricing for a free HypeHype game

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black">
      {/* No pricing section for a free HypeHype game */}

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contact & Community
            </h3>
            <p className="text-gray-300 mb-6">
              Have feedback or want to share your escape story? Tag us on social
              media or email{" "}
              <span className="text-red-accent">theorphanmaze@gmail.com</span>.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-accent rounded-full flex items-center justify-center hover:bg-red-hover transition-colors"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-accent rounded-full flex items-center justify-center hover:bg-red-hover transition-colors"
              >
                <span className="text-white font-bold">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-accent rounded-full flex items-center justify-center hover:bg-red-hover transition-colors"
              >
                <span className="text-white font-bold">i</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-white font-lacquer">
                THE ORPHAN
              </span>
            </div>

            <p className="text-gray-400 text-center md:text-right">
              © 2025 The Orphan Maze Game. All rights reserved. <br />© 2025{" "}
              <span className="font-lacquer">The Orphan</span> Maze Game. All
              rights reserved. <br />
              Can you escape the maze?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
