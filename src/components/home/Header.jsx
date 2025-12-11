import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2020/11/08/14/18/car-5723905_1280.jpg",
    title: "Corporate Transport Solutions",
    subtitle: "Reliable. Scalable. Professional.",
    description:
      "Delivering dependable coach and minibus services for companies requiring consistent, high-quality transport for teams, clients, and operational logistics across the UK.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/07/29/16/42/car-8157299_1280.jpg",
    title: "Event & Conference Transport",
    subtitle: "Streamlined Business Mobility",
    description:
      "End-to-end logistics for corporate events, conferences, and exhibitions—ensuring your staff and guests arrive on time, comfortably, and with professional coordination.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2024/06/11/13/30/ai-generated-8823151_1280.jpg",
    title: "Executive Airport Transfers",
    subtitle: "Efficient Travel for Teams & Clients",
    description:
      "Premium airport transfers for business travellers, ensuring punctual departures and reliable pickups with high-comfort vehicles suitable for executives and VIP clients.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/01/08/20/46/transport-6924808_1280.jpg",
    title: "Long-Term Corporate Contracts",
    subtitle: "Workforce Transport You Can Trust",
    description:
      "Cost-effective, scheduled staff transport and corporate shuttle solutions built for companies needing consistent, high-capacity and reliable mobility every day.",
  },
];


  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1.1 }}
              animate={{ scale: index === currentSlide ? 1 : 1.1 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16 lg:px-24 w-[90%] sm:w-[80%] md:w-[65%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-3 sm:mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentSlide].title}
          <br />
          <motion.span
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {slides[currentSlide].subtitle}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed bg-black/40 p-3 sm:p-4 rounded-xl backdrop-blur-sm border-l-4 border-yellow-500 shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {slides[currentSlide].description}
        </motion.p>

        <Link to="/services">
          <motion.div
            className="flex gap-3 sm:gap-4"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button text="Discover more" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Dots */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 cursor-pointer rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-500 scale-125"
                : "bg-white/50 hover:bg-yellow-400"
            }`}
          />
        ))}
      </motion.div>

      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Header;
