import React from 'react';

const Map = () => {
  return (
    <div className="relative overflow-hidden mx-auto max-w-6xl rounded-5xl my-12 px-4 md:px-8 lg:px-5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0  z-10 pointer-events-none rounded-5xl"></div>

      {/* Google Map Iframe */}
      <div className="rounded-5xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="United Kingdom Location Map"
        ></iframe>
      </div>

      {/* Location Label */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md z-10">
        <h3 className="font-bold text-gray-800">Our Location</h3>
        <p className="text-sm text-gray-600">United Kingdom</p>
      </div>
    </div>
  );
};

export default Map;
