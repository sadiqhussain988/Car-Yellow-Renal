import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

const Header = () => {
  const slides = [
    {
      id: 1,
      title: "Corporate Transport Solutions",
      whiteWords: ["Corporate", "Solutions"],
      subtitle: "Reliable. Scalable. Professional.",
      description:
        "Providing executive-grade Mercedes Vito transport solutions for businesses seeking consistent, high quality mobility for teams, clients, and operational logistics.",
      image:
        "https://blenderartists.org/uploads/default/optimized/4X/5/6/9/5698b29d1c4d3e3ef3ab0a97be4d9895dcb2bad5_2_690x431.jpeg",
      link: "/services/corporate-transport",
    },
    {
      id: 2,
      title: "Event & Conference Transport",
      whiteWords: ["Event", "Conference"],
      subtitle: "Streamlined Business Mobility",
      description:
        "End-to-end logistics for corporate events, conferences, and exhibitions—ensuring staff and guests arrive on time and comfortably.",
      image:
        "https://cache1.pakwheels.com/ad_pictures/1326/mercedes-benz-e-class-e-180-amg-2022-132694952.webp",
      link: "/services/event-transport",
    },
    {
      id: 3,
      title: "Executive Airport Transfers",
      whiteWords: ["Executive", "Transfers"],
      subtitle: "Efficient Travel for Teams & Clients",
      description:
        "Premium airport transfers for business travellers, ensuring punctual departures and reliable pickups with high comfort vehicles.",
      image:
        "https://i.pinimg.com/1200x/de/e5/95/dee595d9c2c6d66a0de390def7b33d3b.jpg",
      link: "/services/airport-transfers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[100vh] pb-2 overflow-hidden bg-black pt-[72px]">
      {/* Background slides */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            )
        )}
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 lg:px-16">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Title with two-color effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords.some(
                (w) => w.toLowerCase() === word.toLowerCase()
              );
              return (
                <span
                  key={i}
                  className={`relative ${
                    isWhite
                      ? "text-white"
                      : "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                  }`}
                >
                  {word + " "}
               
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-md md:text-lg text-gray-200 leading-relaxed mb-8"
          >
            {currentSlide.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/services">
              <Button text="Discover More" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Pagination dots */}
        <div className="flex space-x-3 mt-10">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 cursor-pointer rounded-full ${
                currentIndex === index
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 w-10 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-yellow-400"
              }`}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
