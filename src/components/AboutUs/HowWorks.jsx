import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from '../../../public/link02.png'
import image1 from '../../../public/link04.png'
import image3 from '../../../public/link05.png'

const HowWorks = () => {
  const working = [
    {
      img: image,
      title: "Book Your Ride",
      description:
        "Easily book your coach, minibus, or van online in just a few clicks choose your destination, date, and vehicle type.",
      cardImage:image // Card background image
    },
    {
      img: image1,
      title: "We Pick You Up",
      description:
        "Our professional drivers arrive on time for smooth, safe, and comfortable travel from start to finish.",
      cardImage: image3 // Card background image
    },
    {
      img: image1,
      title: "Enjoy a Safe Journey",
      description:
        "Relax and enjoy reliable, on-time transport across the UK with our licensed and trusted drivers.",
      cardImage: image1 // Card background image
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-yellow-800 uppercase tracking-wide">
              Simple Process
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How It <span className="text-yellow-500">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Three simple steps to your comfortable and reliable journey across the UK
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 transform -translate-y-1/2 z-0"></div>
          
          {working.map((step, index) => (
            <div
              key={index}
              className="relative z-10"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>

              {/* Main Card */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full min-h-[400px] flex flex-col">
                {/* Card Image - Always Visible */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={step.cardImage}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-200 transition-all duration-300">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-yellow-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">Learn more</span>
                    <div className="w-0 group-hover:w-5 h-0.5 bg-yellow-600 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-700 font-medium">
              Ready to book your journey?{" "}
              <span className="text-yellow-600 font-semibold">Get started today!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;