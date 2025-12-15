import React from "react";
import { FiClock, FiCalendar, FiDollarSign, FiRefreshCcw, FiWifi } from "react-icons/fi";
import { MdEventSeat } from "react-icons/md";
import image from "../../../../public/se1.png";
import Button from "../../Button";
import { Link } from "react-router-dom";

const airportImage = image;

const TravelAgencyHotelSection = () => {
  const features = [
    { icon: <FiClock className="text-3xl text-[#F3B800]" />, title: "Priority Guest Pickup", description: "Ensure your guests arrive on time with dedicated airport transfers." },
    { icon: <FiCalendar className="text-3xl text-[#F3B800]" />, title: "Flexible Scheduling", description: "Adjust bookings according to flight timings or guest requests." },
    { icon: <MdEventSeat className="text-3xl text-[#F3B800]" />, title: "Luxury Fleet", description: "Offer guests premium vehicles for comfort and convenience." },
    { icon: <FiDollarSign className="text-3xl text-[#F3B800]" />, title: "Corporate Billing", description: "Simplified invoicing and reporting for hotels and travel partners." },
    { icon: <FiRefreshCcw className="text-3xl text-[#F3B800]" />, title: "Reliable Service", description: "Professional chauffeurs track flights and ensure timely arrivals." },
    { icon: <FiWifi className="text-3xl text-[#F3B800]" />, title: "Guest Connectivity", description: "Wi-Fi and in-car amenities for your VIP guests." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl font-bold text-black leading-tight">
          Travel Agency & Hotel Partnerships
          <span className="block text-[#F3B800] text-3xl md:text-4xl font-bold mt-2">
            Premium Guest Transfers Made Simple
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Partner with Linked Way Rides to provide seamless, reliable airport transfers for your guests. Enjoy priority dispatch, corporate billing, and dedicated support.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image + Stats */}
        <div className="relative">
          <img
            src={airportImage}
            alt="Travel Agency & Hotel Transfers"
            className="w-full h-[400px] object-cover  rounded-2xl shadow-lg border border-gray-200"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-white rounded-xl shadow-md px-6 py-3 border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F3B800]">99%</div>
              <div className="text-sm text-gray-600">On-Time Guest Arrivals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F3B800]">100%</div>
              <div className="text-sm text-gray-600">Door-to-Door Convenience</div>
            </div>
          </div>
        </div>

        {/* Right: Features + CTA */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="grid md:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div>{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-black">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start mt-4">
            <Link to="/services">
              <Button text="Book Now" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAgencyHotelSection;
