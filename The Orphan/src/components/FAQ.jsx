import React, { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: (
        <>
          What is <span className="font-lacquer">The Orphan</span>?
        </>
      ),
      answer: (
        <>
          {" "}
          <span className="font-lacquer">The Orphan</span> is a scary maze
          escape game on HypeHype. You must find your way out of a haunted house
          filled with twists, dead ends, and surprises.
        </>
      ),
    },
    {
      id: 2,
      question: "How do I escape the maze?",
      answer:
        "Explore every room, solve puzzles, and watch out for traps! The house is always changing, so you need to stay alert and keep moving to find the exit.",
    },
    {
      id: 3,
      question: (
        <>
          Is <span className="font-lacquer">The Orphan</span> really scary?
        </>
      ),
      answer: (
        <>
          Yes! <span className="font-lacquer">The Orphan</span> is designed to
          be a chilling experience with creepy sounds, dark hallways, and
          unexpected scares. Play with headphones for the best effect!
        </>
      ),
    },
    {
      id: 4,
      question: (
        <>
          Where can I play <span className="font-lacquer">The Orphan</span>?
        </>
      ),
      answer: (
        <>
          You can play <span className="font-lacquer">The Orphan</span> for free
          on HypeHype. Just search for '
          <span className="font-lacquer">The Orphan</span>' in the HypeHype app
          and start your escape!
        </>
      ),
    },
    {
      id: 5,
      question: "Can I play with friends?",
      answer: (
        <>
          <span className="font-lacquer">The Orphan</span> is a solo escape
          maze, but you can challenge your friends to see who escapes the
          fastest! Share your best times and scariest moments.
        </>
      ),
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="font-lacquer text-red-accent">The Orphan</span>{" "}
            <span className="text-red-accent">FAQ</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about escaping the haunted maze in{" "}
            <span className="font-lacquer">The Orphan</span> on HypeHype.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full bg-dark-card border border-gray-700 rounded-lg p-6 text-left hover:border-red-accent transition-colors focus:outline-none focus:border-red-accent"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-red-accent transform transition-transform ${
                      openItem === item.id ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              {openItem === item.id && (
                <div className="bg-gray-800 border-l-4 border-red-accent p-6 mt-2 rounded-b-lg">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Want to know more about{" "}
            <span className="font-lacquer">The Orphan</span> or HypeHype? Reach
            out and we’ll help you get started on your escape!
          </p>
          <button className="bg-red-accent hover:bg-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
