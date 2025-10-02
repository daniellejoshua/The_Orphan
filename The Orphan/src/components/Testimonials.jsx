import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex P.",
      text: "I thought it was just a game, but The Orphan maze had me jumping at every turn. Escaping the house was the scariest fun I've had in ages!",
      rating: 5,
      image: "src/assets/image/grouppic/ipis.jpg",
    },
    {
      id: 2,
      name: "Justin Nabunturan",
      text: "The maze changes every time! I finally escaped after so many dead ends. The sound and atmosphere are so creepy!",
      rating: 5,
      image: "src/assets/image/grouppic/ipis.jpg",
    },
    {
      id: 3,
      name: "Morgan S.",
      text: "Best horror maze on HypeHype. I dared my friends to beat my escape time. 10/10 would get lost again!",
      rating: 5,
      image: "src/assets/image/grouppic/ipis.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-red-accent font-horror">Players</span>{" "}
            Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from those who braved the haunted maze in{" "}
            <span className="font-lacquer">The Orphan</span> on HypeHype.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark-card rounded-lg p-6 border border-gray-700 hover:border-red-accent transition-all flex flex-col h-full"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                {testimonial.text.split("The Orphan").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <>
                      {part}
                      <span className="font-lacquer">The Orphan</span>
                    </>
                  ) : (
                    part
                  )
                )}
              </p>

              <div className="flex items-center space-x-3 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-red-accent"
                />
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">Verified Player</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
