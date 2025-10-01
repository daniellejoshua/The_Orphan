import React from "react";

const group = [
  {
    name: "Raynard Poserio",
    role: "Game Designer",
    image:
      "src/assets/image/grouppic/491005379_680215611178392_2043747693491565246_n.jpg",
    bio: "Loves u",
  },
  {
    name: "Danielle Esternon",
    role: "Lead Developer",
    image:
      "src/assets/image/grouppic/234175192_538000147419070_7435224955489352536_n.jpg",
    bio: "Turns nightmares into code. Enjoys horror games",
  },
  {
    name: "Jojn Rober Roldan",
    role: "Group Leader",
    image:
      "src/assets/image/grouppic/Messenger_creation_B2B0C78D-CD45-4555-AF12-AF592BD0D97A.jpeg",
    bio: "Leads the team and keeps the vision alive.",
  },
  {
    name: "Breddie Morallos",
    role: "Sound Effects",
    image:
      "src/assets/image/grouppic/Messenger_creation_DB415855-C1FE-4622-A633-D7BC9CDEAD83.jpeg",
    bio: "Creates chilling soundscapes and eerie effects.",
  },
  {
    name: "Adrian Xiao",
    role: "Level Architect",
    image: "src/assets/image/grouppic/ipis.jpg",
    bio: "Designs the twisted maze",
  },
  {
    name: "Charlotte Sang-An",
    role: "QA & Playtester",
    image: "src/assets/image/grouppic/ipis.jpg",
    bio: "Finds every bug and hidden scare.",
  },
  {
    name: "John Kean Gasalao",
    role: "Story Writer",
    image: "src/assets/image/grouppic/ipis.jpg",
    bio: "Creator of the dark tale behind the maze.",
  },
];

const Games = () => {
  return (
    <section
      id="group"
      className="py-20 bg-gradient-to-b from-dark-bg to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-red-accent">Group</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            The 7 minds behind{" "}
            <span className="text-red-accent font-bold font-lacquer">
              The Orphan
            </span>{" "}
            on HypeHype. Each member brings a unique talent to the maze.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {group.map((member, idx) => (
            <div
              key={idx}
              className="bg-dark-card rounded-xl p-8 border border-gray-700 flex flex-col items-center text-center shadow-lg hover:border-red-accent hover:scale-105 transition-all duration-200"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-red-accent object-cover shadow-md"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-accent text-xs text-white px-2 py-0.5 rounded font-bold shadow">
                  {member.role}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 tracking-wide">
                {member.name}
              </h3>
              <p className="text-gray-300 text-xs mb-2">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to know more?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Connect with the group or ask about the making of{" "}
            <span className="font-lacquer">The Orphan</span>! We love sharing
            our process and hearing your feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Games;
