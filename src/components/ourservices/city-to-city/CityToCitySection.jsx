import React from "react";
import {
  FiClock,
  FiShield,
  FiBarChart2,
  FiMapPin,
  FiRefreshCcw,
  FiUsers,
} from "react-icons/fi";
import carimage from "../../../assets/ServiceImage/city-city.png";
import Button from "../../Button";
import { Link } from "react-router-dom";

const CityToCitySection = () => {
  const features = [
    {
      icon: <FiClock />,
      title: "Guaranteed On-Time Pickups",
      description:
        "Optimized routing and real-time tracking ensure your employees always arrive on time.",
    },
    {
      icon: <FiShield />,
      title: "Safety & Compliance Standards",
      description:
        "Strict driver background checks, compliance audits, and monthly safety inspections.",
    },
    {
      icon: <FiUsers />,
      title: "Dedicated Corporate Fleet",
      description:
        "Exclusive organization-branded vehicles and customizable scheduling options.",
    },
    {
      icon: <FiMapPin />,
      title: "Smart Route Optimization",
      description:
        "AI-powered route planning reduces travel time and overall commute cost.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Corporate Performance Dashboard",
      description:
        "Access ridership stats, punctuality reports, trip logs, and cost insights.",
    },
    {
      icon: <FiRefreshCcw />,
      title: "Scalable for All Workforce Sizes",
      description:
        "Whether 20 or 20,000 employees — we scale with your growing organization.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">

      {/* Header Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
           B2B Reliable Transportation
        </h1>

        <p className="text-[#F3B800] text-2xl md:text-3xl font-bold mt-3">
          Reliable, Safe & Intelligent Mobility Solutions
        </p>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Empower your workforce with seamless daily commutes backed by advanced
          technology, safety assurance, and real-time analytics.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left - Image / Stats */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <img
              src={carimage}
              alt="Corporate Transportation"
              className="w-full h-[400px] md:h-[480px] object-cover rounded-2xl"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-5 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-extrabold text-[#F3B800]">98%</div>
                <div className="text-sm text-gray-600">On-Time Arrival Rate</div>
              </div>

              <div className="bg-gray-100 p-5 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-extrabold text-[#F3B800]">100%</div>
                <div className="text-sm text-gray-600">Safety Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Feature Cards */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Top Organizations Trust Us
          </h2>

          <div className="space-y-5">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white p-6 rounded-xl border border-gray-200 shadow-sm
                  hover:shadow-lg transition-all duration-300 relative overflow-hidden
                "
              >
                {/* Hover Animated Line */}
                <div className="
                  absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#F3B800] to-black
                  group-hover:w-full transition-all duration-500
                "></div>

                <div className="flex items-start">
                  {/* Hover Icon Reveal */}
                  <div className="
                    text-3xl text-[#F3B800] mr-4 opacity-0 translate-x-[-10px]
                    group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-500
                  ">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-10 p-7 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">
              Transform Employee Mobility Today
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Explore customized solutions tailored to your workforce needs.
            </p>
            <Link to="/services">
              <Button text="Schedule Consultation" />
            </Link>
          </div>
        </div>
      </div>

      {/* Full Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group relative bg-white p-8 rounded-2xl shadow-md border border-gray-200
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden
            "
          >

            {/* Top Gradient Line */}
            <div className="
              absolute top-0 left-0 h-1 w-full 
              bg-gradient-to-r from-[#FFEE02] to-black
            "></div>

            {/* Hidden Icon on Hover */}
            <div className="
              text-4xl text-[#F3B800] mb-4 opacity-0 translate-y-2 
              group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500
            ">
              {feature.icon}
            </div>

            <h3 className="font-bold text-gray-900 text-xl mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>

            {/* Bottom Hover Line */}
            <div className="
              absolute bottom-0 left-0 h-1 w-0 
              bg-gradient-to-r from-[#F3B800] to-black
              group-hover:w-full transition-all duration-500
            "></div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default CityToCitySection;
