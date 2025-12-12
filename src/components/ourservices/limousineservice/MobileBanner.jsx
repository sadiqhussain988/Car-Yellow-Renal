import React from "react";
import Button from "../../Button";

const MobileBanner = () => {
  return (
    <div className="bg-white shadow-md relative overflow-hidden" id="mobile-banner">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <section className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-8 lg:mb-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black px-4 py-2 rounded-full mb-4 lg:mb-6">
              <div className="w-2 h-2 bg-[#FFEE02] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#FFEE02]">Event Logistics</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-5 leading-tight">
              Large-Scale Event
              <span className="block text-[#F3B800] mt-2">Transportation Management</span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg lg:text-xl max-w-2xl lg:pl-1 mb-2">
              Seamlessly coordinate transportation for conferences, corporate events, and large gatherings with our fleet management solutions.
            </p>

            {/* Sub features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mt-6">
              {[
                'Group Coordination', 
                'On-Time Pickups', 
                'Multiple Vehicle Support', 
                '24/7 Operations'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button text="Get Event Quote" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#FFEE02] rounded-[3rem] blur-xl opacity-20"></div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/14608917/pexels-photo-14608917.jpeg"
                alt="Event Transportation Fleet"
                className="max-w-xs sm:max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500 rounded-2xl shadow-xl"
              />
              <div className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-semibold">Fleet Ready</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-2 h-2 bg-[#FFEE02] rounded-full"></div>
                <span className="text-xs font-semibold">Coordinated Routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileBanner;
