import React from "react";
import {
  FaUserFriends,
  FaClock,
  FaCarSide,
  FaGlobeEurope,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../../../public/Link Way 01.png";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function FairDeal() {
  const serviceHighlights = {
    title: "Premium Linked Way Rides Services Across the UK",
    description:
      "Experience seamless travel with comfort, safety, and style at every step. Our team delivers tailored transport solutions for individuals, groups, and businesses — anywhere in the UK.",
    features: [
      {
        id: 1,
        icon: <FaUserFriends className="w-5 h-5" />,
        text: "Private & group transport for weddings, tours, corporate events, and airport transfers.",
      },
      {
        id: 2,
        icon: <FaClock className="w-5 h-5" />,
        text: "24/7 customer support with flexible bookings that fit your schedule.",
      },
      {
        id: 3,
        icon: <FaCarSide className="w-5 h-5" />,
        text: "Modern, air-conditioned vehicles with licensed professional drivers.",
      },
      {
        id: 4,
        icon: <FaGlobeEurope className="w-5 h-5" />,
        text: "Nationwide service across the UK with exceptional reliability.",
      },
    ],
  };

  // Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const zoomInUp = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#FFEE02]/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFEE02]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 bg-[#D68F00] text-black px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md">
            <FaStar className="w-4 h-4" />
            <span>Trusted Transport Solutions</span>
          </div>
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            variants={zoomInUp}
          >
            Travel Together with{" "}
            <span className="text-[#D68F00] drop-shadow-md">Confidence</span>
          </motion.h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Wherever your destination, we ensure your journey is smooth, safe,
            and stylish — every time.
          </p>
          <div className="w-28 h-1 bg-[#D68F00] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-between">
          {/* Left Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomInUp}
          >
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <motion.img
                  src={image}
                  alt="Professional Transport Service"
                  className="w-full h-[380px] sm:h-[450px] lg:h-[500px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#D68F00] text-white px-5 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="w-8 h-8" />
                  <div>
                    <p className="text-sm font-bold">Safe & Reliable</p>
                    <p className="text-xs font-medium text-gray-700">
                      Always on Time
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                className="absolute -bottom-10 -left-5 w-2/3 sm:w-1/2 hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* <img
                  src="https://cdn.pixabay.com/photo/2021/01/12/14/58/audi-5911690_1280.jpg"
                  alt="Luxury Vehicle Interior"
                  className="rounded-2xl border-2 border-[#FFEE02] shadow-xl"
                /> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[black] to-[#f7af07] bg-clip-text text-transparent mb-4 leading-snug">
              {serviceHighlights.title}
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              {serviceHighlights.description}
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {serviceHighlights.features.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D68F00]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D68F00] rounded-xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/services">
                <Button text="Book Now" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
