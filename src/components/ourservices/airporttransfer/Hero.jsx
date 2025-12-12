import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../../Button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Enhance Guest Transport with Linked Way Rides",
      whiteWords: ["Enhance", "Linked", "Rides"],
      subtitle: "Professional Ride Services for Travel Agencies & Hotels",
      description:
        "Linked Way Rides partners with your business to provide reliable, chauffeured transportation for guests. Improve service quality, streamline coordination, and strengthen your brand reputation.",
      image:
        "https://www.groundtransportsolution.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-04-at-3.08.27-PM-6.jpeg",
      link: "/services/travel-agency-hotel-partnerships",
    },
    {
      id: 2,
      title: "Seamless Integration With Linked Way Rides",
      whiteWords: ["Seamless", "Linked", "Rides"],
      subtitle: "Dedicated B2B Support Priority Dispatch Custom Contracts",
      description:
        "Our team works directly with your staff to manage guest transfers efficiently. Enjoy exclusive partner rates, corporate billing, and priority booking systems.",
      image:
        "https://media.istockphoto.com/id/2225405260/photo/london-cityscape-with-the-gherkin-building.jpg?s=612x612&w=0&k=20&c=0-JJ_-oCxKoq1fcRlE0bh4O_HhxvTRqYw2NvhCmQ-24=",
      link: "/services/travel-agency-hotel-partnerships",
    },
    {
      id: 3,
      title: "Premium Ride Services for Your Clients",
      whiteWords: ["Premium", "Ride", "Services"],
      subtitle: "Reliable Chauffeurs Executive Fleet 24/7 Coordination",
      description:
        "Offer your guests professional rides with trusted drivers and a high-standard fleet. Ideal for hotels, resorts, travel agencies, and tour operators.",
      image:
        "https://cdn.pixabay.com/photo/2020/09/29/02/39/aircraft-5611528_1280.jpg",
      link: "/services/travel-agency-hotel-partnerships",
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
    <section className="relative h-[100vh] overflow-hidden bg-[#0D1B2A] pt-[72px]">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-60" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-[#1B263B]/50 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-white">
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
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-4">
            {currentSlide.subtitle}
          </p>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-200 leading-relaxed mb-8">
            {currentSlide.description}
          </p>

          {/* CTA */}
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
