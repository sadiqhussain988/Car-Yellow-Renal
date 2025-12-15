import React from "react";
import Button from "../../Button";

const MobileBanner = () => {
  return (
    <div className="relative overflow-hidden" id="mobile-banner">
      
      {/* Soft Glow Blur Orbs */}
      <div className="absolute left-10 w-96 h-96 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[150px]"></div>

      <section className="container mx-auto px-6 py-10 lg:py-16 flex flex-col items-center relative z-10 gap-10">
        
        {/* TOP SECTION TITLE */}
        <div className="text-center text-black">
          <h2 className="text-4xl lg:text-4xl font-extrabold leading-tight drop-shadow-xl">
            Experience Premium  
            <span className="block text-[#F6B626] mt-1">
              Chauffeur Services
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mt-3 mx-auto leading-relaxed">
            Travel with luxury, comfort, and precision. Enjoy professional, reliable,
            business-class rides with real-time tracking and executive service.
          </p>
        </div>

        {/* THREE PREMIUM FEATURE CARDS */}
        <div className="w-full flex flex-col lg:flex-row justify-center gap-6 mt-4">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-1/3 border border-gray-100 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-black mb-2">Instant Booking</h3>
            <p className="text-gray-700 leading-relaxed">
              Book your chauffeur instantly with one tap. Fast, simple, and reliable for all business needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-1/3 border border-gray-100 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-black mb-2">Live Tracking</h3>
            <p className="text-gray-700 leading-relaxed">
              Track your driver in real time with precise GPS and corporate-level accuracy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-1/3 border border-gray-100 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-black mb-2">Business Class</h3>
            <p className="text-gray-700 leading-relaxed">
              Executive vehicles, trained chauffeurs, and a first-class B2B travel experience.
            </p>
          </div>

        </div>


      </section>
    </div>
  );
};

export default MobileBanner;
