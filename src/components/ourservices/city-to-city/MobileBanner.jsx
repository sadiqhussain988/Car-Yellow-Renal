import React from "react";

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
              <span className="text-sm font-medium text-[#FFEE02]">Available Now</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-5 leading-tight">
              Effortless Travel
              <span className="block text-[#F3B800] mt-2">At Your Fingertips</span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg lg:text-xl max-w-2xl lg:pl-1 mb-2">
              Book, track, and manage your journey seamlessly with the Blacklane app.
            </p>

            {/* Sub features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mt-6">
              {['Instant Booking', 'Live Tracking', 'Secure Payment', '24/7 Support'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            {/* QR Code Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="//images.ctfassets.net/ov8o7v78mnye/4qZi5AXwLS3ciw4lUtd4DC/68e6b66dbacbe330be3bac30cb6e7d0a/app_qrcode.svg"
                  alt="Scan to download Blacklane App"
                  className="w-28 h-28"
                />
                <p className="text-xs text-gray-600 mt-2">Scan to download</p>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
                aria-label="Download on the iOS App Store"
                className="group relative overflow-hidden bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </div>
              </a>

              <a
                href="https://blacklane.onelink.me/Jxjh/androidAppDownload"
                aria-label="Get it on Google Play"
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 lg:mt-0 flex justify-center relative">
          {/* Floating device mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#FFEE02] rounded-[3rem] blur-xl opacity-20"></div>
            <div className="relative">
              <img
                src="https://images.ctfassets.net/ov8o7v78mnye/4nd4iEDEP4NunG4HHzJzRw/2b658ff83396e36fb3b274c313f0e471/mobile-banner-image.png"
                alt="Blacklane App Interface"
                className="max-w-xs sm:max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500 rounded-2xl shadow-xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-semibold">Live Tracking</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-2 h-2 bg-[#FFEE02] rounded-full"></div>
                <span className="text-xs font-semibold">Driver Arriving</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileBanner;
