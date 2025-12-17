import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import image from "../../../../public/link05.png";

const Hero = () => {
  // --- TEXT-ONLY CAROUSEL SLIDES ---
  const slides = [
    {
      id: 1,
      title: "Long Term Fleet Leasing for Businesses",
      highlight: ["Fleet", "Businesses"],
      subtitle: "Reliable  Scalable  Cost-Efficient",
      description:
        "Empower your business with long-term leased vehicles fully maintained, insured, and managed for maximum uptime and operational efficiency.",
    },
    {
      id: 2,
      title: "Corporate Fleet Tailored to Your Needs",
      highlight: ["Corporate Fleet"],
      subtitle: "Custom Agreements  Zero Maintenance Stress",
      description:
        "Whether you need 5 or 50 vehicles we design leasing plans that match your business goals, employee mobility needs, and financial structure.",
    },
    {
      id: 3,
      title: "Reduce Cost. Increase Productivity",
      highlight: ["Reduce", "Productivity"],
      subtitle: "Monthly Billing   No Hidden Charges",
      description:
        "Shift from high capital expenditure to predictable operational costs. Our fleet leasing keeps your business moving without interruption.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto change text every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-[100vh] overflow-hidden bg-[#0B121A] pt-[72px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B121A]/70 to-[#1A2533]/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 text-white leading-tight">
            {slide.title.split(" ").map((word, i) => {
              const isHL = slide.highlight.some(
                (h) => h.toLowerCase() === word.toLowerCase()
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

          <p className="text-lg md:text-xl text-gray-300 mb-3">
            {slide.subtitle}
          </p>

          <p className="text-md md:text-lg text-gray-200 leading-relaxed mb-8">
            {slide.description}
          </p>

          <Link to="/services/fleet-leasing">
            <Button text="Explore Fleet Leasing" />
          </Link>
        </div>

        <div className="flex space-x-3 mt-8">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`transition-all rounded-full ${
                index === i
                ? "bg-white w-8 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-[white]"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
