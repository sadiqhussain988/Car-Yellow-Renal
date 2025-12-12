import React from "react";
import {
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiRefreshCcw,
  FiWifi,
} from "react-icons/fi";
import { MdEventSeat } from "react-icons/md";
import image from "../../../../public/testimonial/city-to-city.png";
import Button from "../../Button";
import { Link } from "react-router-dom";

const airportImage = image;

const CorporateAirportTransfers = () => {
  const features = [
    {
      icon: <FiClock className="text-3xl text-[#F3B800]" />,
      title: "On-Time Pickups",
      description: "Ensure your staff and clients arrive on schedule, every time.",
    },
    {
      icon: <FiCalendar className="text-3xl text-[#F3B800]" />,
      title: "Flexible Scheduling",
      description: "Book in advance or adjust based on flight times and business needs.",
    },
    {
      icon: <MdEventSeat className="text-3xl text-[#F3B800]" />,
      title: "Premium Comfort",
      description: "Travel in executive vehicles with ample space and amenities.",
    },
    {
      icon: <FiDollarSign className="text-3xl text-[#F3B800]" />,
      title: "Transparent Pricing",
      description: "Corporate rates with all taxes, tolls, and fees included—no surprises.",
    },
    {
      icon: <FiRefreshCcw className="text-3xl text-[#F3B800]" />,
      title: "Reliable Service",
      description: "Professional chauffeurs track flights and adjust pickup timings.",
    },
    {
      icon: <FiWifi className="text-3xl text-[#F3B800]" />,
      title: "Stay Connected",
      description: "Wi-Fi and charging available in most vehicles for productivity on the go.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Corporate Airport Transfers
          <span className="block text-[#F3B800] text-3xl md:text-4xl font-bold mt-2">
            Reliable Rides for Airlines & Businesses
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Provide your employees and clients with seamless, professional airport transportation. Executive vehicles, priority dispatch, and corporate billing included.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image + Stats */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <img
              src={airportImage}
              alt="Corporate Airport Transfer"
              className="w-full h-[350px] md:h-[420px] object-cover rounded-xl"
            />
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-[#F3B800]">99%</div>
                <div className="text-sm text-gray-600">On-Time Arrivals</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-[#F3B800]">100%</div>
                <div className="text-sm text-gray-600">Door-to-Door Convenience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features + CTA */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">
            Why Choose Our Corporate Airport Transfers?
          </h2>
          <div className="space-y-4">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-black">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-black mb-2">Book Your Corporate Ride</h3>
            <p className="text-gray-600 text-sm mb-4">
              Seamless, executive transportation for your clients or staff. Reliable and professional service every time.
            </p>
            <Link to="/services">
              <Button text="Book Now" />
            </Link>
          </div>
        </div>
      </div>

      {/* Full Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFEE02] to-black"></div>
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[#f9f9f7] to-[#f9f8f7] shadow rounded-xl mb-4 text-3xl">
              {feature.icon}
            </div>
            <h3 className="font-bold text-black text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorporateAirportTransfers;
