import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";

const AirportTransferHero = () => {
  const slides = [
    {
      id: 1,
      title: "Airport Transfers, Reliable & On Time",
      whiteWords: ["Airport Transfers"],
      subtitle: "Seamless Corporate Travel Solutions",
      description:
        "Partner with Linked Way Rides for punctual airport pickups and drop-offs. Perfect for business travelers, airline crew, and corporate clients who expect professional service.",
      image:
        "https://cdn.pixabay.com/photo/2021/09/15/15/59/airport-6627221_1280.jpg",
      link: "/services/airport-transfer",
    },
    {
      id: 2,
      title: "Efficient Transfers for Corporates",
      whiteWords: ["Efficient", "Corporates"],
      subtitle: "Priority Dispatch & Dedicated Account Management",
      description:
        "Ensure your corporate guests and airline staff enjoy smooth transfers with real-time flight tracking, priority bookings, and premium vehicles.",
      image:
        "https://cdn.pixabay.com/photo/2013/02/17/07/20/dusseldorf-82440_1280.jpg",
      link: "/services/airport-transfer",
    },
    {
      id: 3,
      title: "Luxury & Professionalism Every Trip",
      whiteWords: ["Luxury", "Professionalism"],
      subtitle: "Executive Fleet  Experienced Chauffeurs",
      description:
        "Offer VIP experiences to your corporate guests or airline crew. Our professional chauffeurs ensure comfort, reliability, and a seamless travel experience.",
      image:
        "https://media.istockphoto.com/id/2194248587/photo/sunset-over-londons-financial-district-england-uk.jpg?s=612x612&w=0&k=20&c=_SihcMi0-A2Cn8yFRzEoXcmPa9QjdIS3n_nrMCwYh2U=",
      link: "/services/airport-transfer",
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
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-[#1B263B]/40 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords.some(
                (w) => w.toLowerCase() === word.toLowerCase()
              );
              return (
                <span
                  key={i}
                  className="text-white"
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-4">{currentSlide.subtitle}</p>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-200 leading-relaxed mb-8">
            {currentSlide.description}
          </p>

          {/* CTA Button */}
          <Link to={currentSlide.link}>
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
                   ? "bg-white w-8 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-[white]"
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

export default AirportTransferHero;
