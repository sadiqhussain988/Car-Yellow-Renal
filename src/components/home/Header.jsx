import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import image from "../../../public/link05.png"

const Header = () => {
 const slides = [
  {
    id: 1,
    title: "Executive Airport Transfers",
    whiteWords: ["Corporate", "Solutions"],
    subtitle: "Reliable Mobility for Businesses",
    description:
      "We provide executive-grade Mercedes Vito transport solutions designed for companies seeking consistent, professional mobility for teams, clients, and operational logistics.",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/05/59/ai-generated-8723087_1280.jpg",
    link: "/services/corporate-transport",
  },
  {
    id: 2,
    title: "Event & Conference Transport",
    whiteWords: ["Event", "Conference"],
    subtitle: "Seamless Logistics for Corporate Events",
    description:
      "End-to-end transport solutions for corporate events, conferences, and exhibitions, ensuring staff, speakers, and VIP clients arrive punctually and comfortably.",
    image:
      "https://cdn.pixabay.com/photo/2024/05/18/01/09/ai-generated-8769301_1280.jpg",
    link: "/services/event-transport",
  },
  {
    id: 3,
    title: "Corporate Transport Solutions",
    whiteWords: ["Executive", "Transfers"],
    subtitle: "Professional Travel for Business Teams",
    description:
      "Premium airport transfer services for corporate clients, guaranteeing timely pickups, punctual departures, and high-comfort vehicles for executives and teams.",
    image:
      image,
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
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
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
