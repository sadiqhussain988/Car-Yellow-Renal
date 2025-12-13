import React, { useState, useEffect } from "react";
import {
  FiShield,
  FiTruck,
  FiTrendingUp,
  FiUsers,
  FiPieChart,
  FiClipboard,
} from "react-icons/fi";
import Button from "../../Button";
import { Link } from "react-router-dom";
import image1 from "../../../../public/Link Way 01.png"
import image2 from "../../../../public/Link02.png"
import image3 from "../../../../public/Link03.png"
import image4 from "../../../../public/Link04.png"

// Corporate Fleet Carousel Images
const images = [
 image1,
  image2,
  image3,
  image4,
];

const CityToCitySection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Enterprise B2B Feature Grid
  const features = [
    {
      icon: <FiTruck className="text-3xl text-[#F3B800]" />,
      title: "Enterprise Fleet Deployment",
      description:
        "Deploy fully managed sedans, SUVs, and vans for daily employee commute or corporate assignments.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#F3B800]" />,
      title: "Cost Optimization Programs",
      description:
        "Reduce expenses with predictable monthly billing and zero maintenance overhead.",
    },
    {
      icon: <FiUsers className="text-3xl text-[#F3B800]" />,
      title: "HR & Admin Integration",
      description:
        "Sync transport needs directly with HR shifts, attendance, and workforce schedules.",
    },
    {
      icon: <FiClipboard className="text-3xl text-[#F3B800]" />,
      title: "Contract-Based Leasing",
      description:
        "Flexible 6–24 month leasing contracts with guaranteed uptime and vehicle replacements.",
    },
    {
      icon: <FiPieChart className="text-3xl text-[#F3B800]" />,
      title: "Advanced Fleet Analytics",
      description:
        "Track performance, route efficiency, vehicle usage, and punctuality in real-time.",
    },
    {
      icon: <FiShield className="text-3xl text-[#F3B800]" />,
      title: "Corporate Level Safety Standards",
      description:
        "GPS surveillance, trained chauffeurs, and enterprise-grade compliance for secure mobility.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 bg-gray-50">

      {/* ---- Section Header ---- */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Long-Term Fleet Leasing
          <span className="block text-[#F3B800] mt-2 text-3xl md:text-4xl">
            Reliable Mobility Infrastructure for Enterprises
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
          Build a modern, scalable transport system with professionally managed fleets,
          trained chauffeurs, and cost-efficient long-term leasing solutions for organizations.
        </p>
      </div>

      {/* ---- Main Section (Carousel + Right Side Cards) ---- */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

        {/* LEFT — IMAGE CAROUSEL */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <img
            src={images[current]}
            alt="Corporate Fleet"
            className="w-full h-[430px] object-cover transition-all duration-[1500ms]"
          />

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? "bg-[#F3B800]" : "bg-white opacity-60"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT: THREE PREMIUM BUSINESS CARDS ---- */}
        <div className="space-y-6">

          {/* Top Card (Large) */}
          <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-black mb-2">
              Enterprise Mobility Management
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Build a centralized mobility ecosystem where employee transportation is automated,
              monitored, and optimized through a single enterprise dashboard.
            </p>
          </div>

          {/* Bottom 2 Cards in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-black mb-2">
                Dedicated Corporate Fleet
              </h3>
              <p className="text-gray-600 text-sm">
                Get a fully branded, company-exclusive fleet with custom configurations and
                priority operational support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all">
              <h3 className="font-bold text-lg text-black mb-2">
                24/7 Support & Fleet Assistance
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy round-the-clock technical, driver, and operational support for seamless
                corporate mobility.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md">
            <h3 className="font-bold text-black mb-2 text-lg">
              Build Your Corporate Fleet Strategy
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with our enterprise experts to customize your long-term mobility plan.
            </p>
            <Link to="/contact">
              <Button text="Request Consultation" />
            </Link>
          </div>
        </div>
      </div>

      {/* ---- Bottom Feature Grid ---- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              bg-white p-8 rounded-2xl shadow-md border border-gray-200
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300
              relative overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFEE02] to-black"></div>

            <div className="w-14 h-14 flex items-center justify-center 
              bg-gradient-to-r from-[#fbfbfa] to-[#f9f8f7] shadow rounded-xl mb-4 text-3xl">
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

export default CityToCitySection;
