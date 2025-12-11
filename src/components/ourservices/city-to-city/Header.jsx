import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Button from "../../Button";
const Hero = () => {
  const slides = [
  {
    id: 1,
    title: "City-to-City Rides, Seamless Connections",
    whiteWords: ["City-to-City"],
    subtitle: "Professional B2B Transportation Services",
    description:
      "Book reliable rides between cities for your business clients, employees, or partners. Transparent pricing, real-time tracking, and corporate billing options included.",
    image:
      "https://images.ctfassets.net/ov8o7v78mnye/4k07hkseEOyBAOdkoEnLYu/7eda7d4be70ba875f0b41946e7ec52d4/Hero_01__2_.jpg", // Highway or intercity ride
    link: "/services/city-to-city",
  },
  {
    id: 2,
    title: "Chauffeur & Hourly Hire Services",
    whiteWords: ["Chauffeur", "Hire"],
    subtitle: "Premium Vehicles • Professional Drivers",
    description:
      "Hire professional chauffeurs and luxury vehicles by the hour. Perfect for corporate meetings, airport transfers, or VIP client transportation.",
    image:
      "https://images.ctfassets.net/ov8o7v78mnye/1ikTvO9uiRODDRrI6XbFra/c45880fcc1ca10ac8d108f0cb19f3e41/Blacklane-London-Social-14_web.jpg?w=446&h=792&fit=fill&f=center&q=95&fm=webp", // Luxury car with chauffeur
    link: "/services/chauffeur-hailing",
  },
  {
    id: 3,
    title: "Airport Transfers, On Time Every Time",
    whiteWords: ["Airport Transfers"],
    subtitle: "Reliable • Comfortable • B2B Focused",
    description:
      "Arrange airport pickups and drop-offs for your business teams or clients with professional drivers and timely service. Corporate accounts supported.",
    image:
      "https://images.ctfassets.net/ov8o7v78mnye/5yCNBv190AI6oAYWiEiUoY/7edd0af75c745c87f15e0a39a0233497/LDN__1_.webp", // Airport arrival with taxi/ride
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
