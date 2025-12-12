import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../../Button";
const Hero = () => {
 const slides = [
  {
    id: 1,
    title: "Hourly Hire, Flexible & Reliable",
    whiteWords: ["Hourly Hire"],
    subtitle: "Professional Drivers  On Demand Service",
    description:
      "Book a chauffeur by the hour for meetings, events, or city travel. Enjoy full control over pickup times, routes, and stops with premium service.",
    image:
      "https://i.ytimg.com/vi/3pb5ywhCnBU/mqdefault.jpg", // Chauffeur opening car door
    link: "/services/hourly-car-service",
  },
  {
    id: 2,
    title: "Your Time, Your Schedule",
    whiteWords: ["Time", "Schedule"],
    subtitle: "Flexibility for Corporate & Personal Travel",
    description:
      "Hire a professional driver for as long as you need. Perfect for business appointments, city tours, or VIP client transport.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZU_z29AUH08HlLiKYDHyw5FEs0YWLpNqNHQ&s", // Executive inside luxury car
    link: "/services/hourly-car-service",
  },
  {
    id: 3,
    title: "Luxury on Demand, Every Hour",
    whiteWords: ["Luxury", "Demand"],
    subtitle: "Comfortable Vehicles Attentive Service",
    description:
      "Travel in style with high-end vehicles, WiFi, and professional chauffeurs. Pay for the hours you use, with no hidden fees or restrictions.",
    image:
      "https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2024/mercedes-benz/classe-e-berline/450-4matic/sedan/interiorColors/2024_mercedes-benz_classe-e_sedan_2-450-4matic_int_201_003.jpg", // Chauffeur driving executive car in city
    link: "/services/hourly-car-service",
  },
];

 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[100vh] overflow-hidden bg-[#1a1a1a] pt-[72px]">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-60" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-[#1B263B]/40 mix-blend-multiply" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 transition-all duration-1000 text-white">
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords.some(
                (w) => w.toLowerCase() === word.toLowerCase()
              );
              return (
                <span
                  key={i}
                  className={
                    isWhite
                      ? "text-white"
                      : "bg-gradient-to-r from-[#FFEE02] to-[#F5A623] bg-clip-text text-transparent"
                  }
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            {currentSlide.subtitle}
          </p>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-200 leading-relaxed mb-8">
            {currentSlide.description}
          </p>

          {/* CTA */}
           <Link to="/services">
            <Button text="Book Now" />
          </Link>
        </div>

        {/* Pagination dots */}
        <div className="flex space-x-3 mt-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 cursor-pointer rounded-full ${
                currentIndex === index
                  ? "bg-gradient-to-r from-[#FFEE02] to-[#F5A623] w-8 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-[#FFEE02]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
};

export default Hero;
