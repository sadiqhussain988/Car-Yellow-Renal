import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import image from "../../../public/Link Way 01.png";
import image1 from "../../../public/bg.png";

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
      image:
        "https://cdn.pixabay.com/photo/2013/02/27/23/12/sacramento-international-airport-86684_1280.jpg",
    },
    {
      title: "Corporate & Event Transport",
      subtitle: "Group & Event Solutions",
      description:
        "Professional transport services for corporate events, conferences, team outings, and private functions. Safe, on-time, and fully managed transport for groups of any size.",
      image: image1,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 sm:py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[black] text-white px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md mx-auto">
            <FaStar className="w-4 h-4" />
            <span>Our Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-gray-900 mx-auto max-w-3xl">
            Premium Corporate{" "}
            <span className="text-[black]">Transport Solutions Across the UK</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl mx-auto max-w-4xl">
            Reliable, comfortable, and professional transport services for businesses, clients, and corporate events. Choose the right vehicle for your needs.
          </p>

          <div className="w-20 h-1 bg-[black] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 sm:mt-14">
          {services.map((data, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl border border-gray-200 flex flex-col"
            >
              {/* Gradient Line */}
              <div className="h-1 bg-gradient-to-r from-[black] to-black"></div>

              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {data.title}
                    </h2>
                   
                  </div>

                  <h3 className="text-sm uppercase text-black font-medium mb-2">
                    {data.subtitle}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {data.description}
                  </p>
                </div>

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
