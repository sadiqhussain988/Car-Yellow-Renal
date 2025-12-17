import React from "react";
import Button from "../../Button";
import carvideo from "../../../assets/ServiceImage/carvideo.mp4";

const MobileBanner = () => {
  return (
    <div
      className="bg-white shadow-xl relative overflow-hidden"
      id="mobile-banner"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

      <section className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-14 relative z-10">
        {/* LEFT SECTION */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[white] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              Corporate Service
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Corporate Employee
            <span className="block  mt-2">Transportation</span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg lg:text-xl max-w-xl mt-4 mx-auto lg:mx-0">
            Reliable, safe, and punctual transportation solutions designed for
            businesses. Ensure on-time employee commutes and boost workplace
            productivity with our professional corporate ride services.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-7">
            {[
              "Daily Employee Commute",
              "Route Optimization",
              "Safety & Live Tracking",
              "Dedicated Fleet for Companies",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg"
              >
                <svg
                  className="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - VIDEO */}
        <div className="flex-1 flex justify-center relative w-full">
          <div className="relative group w-full flex justify-center">
            {/* Video */}
            <video
              src={carvideo}
              autoPlay
              loop
              muted
              playsInline
              className="
                w-[90vw] sm:w-[80vw] md:w-[55vw] lg:w-[40vw]
                h-[280px] sm:h-[350px] md:h-[500px] lg:h-[550px]
                object-cover rounded-[2rem]
                shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* Bottom Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-5 py-2 rounded-xl backdrop-blur-xl text-xs shadow-lg border border-white/20">
              Premium Corporate Mobility Solutions
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-[#FFEE02] opacity-10 blur-3xl rounded-[3rem] -z-10"></div>
          </div>

          {/* Floating Labels */}
          <div className="absolute -top-2 -right-2 bg-white px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 ">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-semibold">Live Tracking</span>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default MobileBanner;
