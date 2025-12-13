import React from "react";
import service5 from "../../assets/home/bus1.jpg";
import service6 from "../../assets/home/service5-2.jpg";
import service7 from "../../assets/home/event.png";
import Button from "../Button";
import { Link } from "react-router-dom";
import image from "../../../public/Link Way 01.png"

const Services = () => {
  const services = [
    {
      title: "Mercedes Fleet Hire",
      subtitle: "Premium Corporate Vehicles",
      description:
        "Choose from our premium Mercedes Vito, C-Class, and E-Class vehicles for corporate transfers, client visits, or executive travel across the UK. Comfort, style, and professionalism guaranteed.",
      image: image,
    },
    {
      title: "Airport & Executive Transfers",
      subtitle: "Seamless Travel",
      description:
        "Reliable and punctual airport transfers for business travelers. Our team ensures smooth, stress-free journeys to and from all major UK airports, including Heathrow, Gatwick, Manchester, and Edinburgh.",
      image: "https://cdn.pixabay.com/photo/2013/02/27/23/12/sacramento-international-airport-86684_1280.jpg",
    },
    {
      title: "Corporate & Event Transport",
      subtitle: "Group & Event Solutions",
      description:
        "Professional transport services for corporate events, conferences, team outings, and private functions. Safe, on-time, and fully managed transport for groups of any size.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/01/22/automotive-1866521_1280.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-center py-6 sm:py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-2xl text-amber-500 font-semibold tracking-wide animate-pulse">
            OUR SERVICES
          </p>
          <h1 className="text-2xl md:text-5xl font-bold w-full md:w-[60%] mx-auto leading-tight text-gray-900 relative inline-block">
            Premium Corporate <span className="text-[#D68F00]">Transport Solutions Across the UK</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg w-full md:w-[70%] mx-auto">
            Reliable, comfortable, and professional transport services for businesses, clients, and corporate events. Choose the right vehicle for your needs.
          </p>
          <div className="w-20 h-1 bg-[#D68F00] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 sm:mt-14">
          {services.map((data, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl border border-gray-200 h-[500px] sm:h-[520px] md:h-[560px] flex flex-col"
            >
              {/* Gradient Line */}
              <div className="relative h-1.5 bg-gradient-to-r from-[#D68F00] to-black"></div>

              {/* Image Section */}
              <div className="relative overflow-hidden h-44 sm:h-52 md:h-56">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {data.title}
                    </h2>
                    <div className="w-8 h-8 bg-[#D68F00] rounded-full flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="text-sm uppercase text-amber-500 font-medium mb-2">
                    {data.subtitle}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {data.description}
                  </p>
                </div>

                {/* Centered Button */}
                <div className="flex justify-center mt-auto">
                  <Link to="/services">
                    <Button
                      text="Learn More →"
                      bgHover="black"
                      textHover="white"
                      cutHover="white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
