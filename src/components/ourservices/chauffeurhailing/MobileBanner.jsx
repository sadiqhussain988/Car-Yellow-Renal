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
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Experience Premium  
            <span className="block text-yellow-400 mt-1">
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

        {/* QR + App Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">

          {/* QR Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-500/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition"></div>
            <div className="relative bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/10">
              <img
                src="//images.ctfassets.net/ov8o7v78mnye/4qZi5AXwLS3ciw4lUtd4DC/68e6b66dbacbe330be3bac30cb6e7d0a/app_qrcode.svg"
                alt="QR Code"
                className="w-28 h-28"
              />
              <p className="text-xs text-gray-300 mt-2 text-center">
                Scan to download
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button text="Download on the App Store" />
            <Button text="Get it on Google Play" />
          </div>

        </div>

      </section>
    </div>
  );
};

export default MobileBanner;
