import React from "react";
import { motion } from "framer-motion";
import image from '../../../public/Link02.png';
import image1 from '../../../public/link04.png';
import image3 from '../../../public/link05.png';
import { FaStar } from "react-icons/fa";

const HowWorks = () => {
  const steps = [
    {
      img: image,
      title: "Book Your Ride",
      description:
        "Easily book your coach, minibus, or van online in just a few clicks choose your destination, date, and vehicle type.",
      cardImage: image
    },
    {
      img: image1,
      title: "We Pick You Up",
      description:
        "Our professional drivers arrive on time for smooth, safe, and comfortable travel from start to finish.",
      cardImage: image3
    },
    {
      img: image1,
      title: "Enjoy a Safe Journey",
      description:
        "Relax and enjoy reliable, on-time transport across the UK with our licensed and trusted drivers.",
      cardImage: image1
    },
  ];

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#D68F00] text-black px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md"
            variants={item}
          >
            <FaStar className="w-4 h-4" />
            <span>Simple Process</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={item}
          >
            How It <span className="text-yellow-500">Works</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={item}
          >
            Three simple steps to your comfortable and reliable journey across the UK
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid lg:grid-cols-3 gap-12 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 animate-pulse rounded-full z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative z-10"
              variants={item}
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20 text-white font-bold text-lg">
                {idx + 1}
              </div>

              {/* Card */}
              <motion.div
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[420px]"
                whileHover={{ scale: 1.03 }}
              >
                {/* Card Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={step.cardImage}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16  bg-gradient-to-r from-[#daab5a] to-[#dd8417] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <img src={step.img} alt={step.title} className="w-8 h-8 rounded" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="mt-6 flex items-center gap-2 text-yellow-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">Learn more</span>
                    <div className="w-0 group-hover:w-5 h-0.5 bg-yellow-600 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-2xl px-8 py-4 shadow-lg border border-yellow-300 cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <p className="text-white font-medium">
              Ready to book your journey? <span className="font-semibold">Get started today!</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWorks;
