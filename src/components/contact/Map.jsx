import React from 'react';

const Map = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl my-12 mx-4 md:mx-8 lg:mx-5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFEE02]/20 to-black/10 z-10 pointer-events-none rounded-xl"></div>

      {/* Google Map Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244318.1849212446!2d-0.44195100000000003!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb3e879bffd%3A0x7c6f62b5446f5aa4!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1741933697589!5m2!1sen!2s"
        height="450"
        className="w-full border-0 rounded-xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="United Kingdom Location Map"
      ></iframe>

      {/* Location Label */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md z-10">
        <h3 className="font-bold text-gray-800">Our Location</h3>
        <p className="text-sm text-gray-600">United Kingdom</p>
      </div>
    </div>
  );
};

export default Map;
