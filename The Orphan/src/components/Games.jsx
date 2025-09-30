import React from "react";

const creators = [
  {
    name: "Alex Rivera",
    role: "Game Designer",
    image: "/api/placeholder/120/120",
    bio: "Loves crafting spooky mazes and mind-bending puzzles.",
  },
  {
    name: "Jamie Lee",
    role: "Lead Developer",
    image: "/api/placeholder/120/120",
    bio: "Turns nightmares into code. Enjoys horror games and coffee.",
  },
  {
    name: "Morgan Smith",
    role: "Artist & Animator",
    image: "/api/placeholder/120/120",
    bio: "Brings the haunted house to life with chilling visuals.",
  },
];

const Games = () => {
  return (
    <section
      id="creators"
      className="py-20 bg-gradient-to-b from-dark-bg to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-red-accent">Creators</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            The minds behind{" "}
            <span className="text-red-accent font-bold font-lacquer">
              The Orphan
            </span>{" "}
            on HypeHype. Passionate about horror, games, and unforgettable
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {creators.map((creator, idx) => (
            <div
              key={idx}
              className="bg-dark-card rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center hover:border-red-accent transition-all"
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="w-24 h-24 rounded-full border-2 border-red-accent mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-1">
                {creator.name}
              </h3>
              <div className="text-red-accent font-semibold mb-2">
                {creator.role}
              </div>
              <p className="text-gray-300 text-sm mb-2">{creator.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to know more?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Connect with the creators or ask about the making of{" "}
            <span className="font-lacquer">The Orphan</span>! We love sharing
            our process and hearing your feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Games;
