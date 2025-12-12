import React from "react";
import Button from "../../Button";

const MobileBanner = () => {
  return (
    <div
      className="bg-gradient-to-br from-white to-gray-50 shadow-lg relative overflow-hidden"
      id="mobile-banner"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] bg-indigo-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-30"></div>

      <section className="container mx-auto px-5 py-12 lg:py-20 flex flex-col lg:flex-row items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/90 px-4 py-1.5 rounded-full mb-5 shadow-md">
            <span className="w-2 h-2 bg-[#FFEE02] rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-[#FFEE02] tracking-wide">
              B2B PARTNER SOLUTION
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Enterprise Transport with
            <span className="block text-[#F3B800] mt-2">Linked Way Rides</span>
          </h2>

          {/* Sub-text */}
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-7">
            Offer your guests seamless car rides and transfers backed by corporate billing, priority dispatch, and dedicated account management. Perfect for hotels, resorts, and travel agencies.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 text-center lg:grid-cols-2 gap-3 lg:gap-4 mt-3 mb-6">
            {[
              "Partner Priority Dispatch",
              "Corporate Invoicing",
              "Dedicated Account Manager",
              "Custom Integration Support",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <svg
                  className="w-5 h-5 text-blue-600"
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

          {/* CTA Button */}
          <Button  text="Book Now" />
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 mt-12 lg:mt-0 flex justify-center relative">
          <div className="relative group">
            <div className="absolute -inset-6 bg-[#FFEE02] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Business Partnership Rides"
                className="w-full max-w-[420px] rounded-2xl scale-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 bg-white shadow-md px-4 py-2 rounded-full text-xs font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Partner Connected
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileBanner;
