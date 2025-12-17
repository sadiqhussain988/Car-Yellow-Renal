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
        "https://images.ctfassets.net/ov8o7v78mnye/5O1sEzScSUnx3FBXEo0dIp/6eb66e45dbc70ab10480648995743d1c/MD_02.jpg?w=1280&f=center&q=85&fm=webp",
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
        "https://images.ctfassets.net/ov8o7v78mnye/1wAh2er4Ka7t5ez8CP9lhi/289c6dfc3d72fd6827b8f80bef8a0c67/LONDON_EQS_DAY_11603_sRGBsmaller.webp?w=1280&f=center&q=85&fm=webp",
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
        "https://images.ctfassets.net/ov8o7v78mnye/5GVuXIPMmOSavqs7R2kxe8/00b5663961a7752a76207da91b00232b/1280___px__800___px_Woman_getting_out_of_car_with_chauffeur.png?w=1280&f=center&q=85&fm=webp",
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
                  className="text-white"
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

export default Hero;
