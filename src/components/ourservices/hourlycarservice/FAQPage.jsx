import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Hourly Hire?",
    answer:
      "Hourly Hire allows you to book a professional chauffeur and vehicle for a set number of hours, perfect for meetings, events, or sightseeing.",
  },
  {
    question: "How many hours can I book?",
    answer:
      "You can book anywhere from 1 hour up to a full day, depending on your requirements.",
  },
  {
    question: "Are prices fixed or per hour?",
    answer:
      "Pricing is hourly and fixed at the time of booking. There are no hidden fees or surcharges.",
  },
  {
    question: "Can I add stops during my hire?",
    answer:
      "Yes, you can request additional stops while your chauffeur is on route.",
  },
  {
    question: "Do you offer corporate hourly hire?",
    answer:
      "Yes, businesses can book chauffeurs by the hour with centralized billing and reporting.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "Luxury sedans, SUVs, executive vans, and other premium vehicles—all chauffeur-driven and maintained.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-black">
          Frequently <span className="text-[#F3B800]">Asked Questions</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Learn everything about our Hourly Hire services, bookings, pricing, and premium chauffeurs.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* FAQ LIST */}
        <div className="flex flex-col justify-between h-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#F3B800] to-[#debe2e] border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus className="text-xl cursor-pointer text-gray-900" />
                ) : (
                  <FiPlus className="text-xl cursor-pointer text-gray-900" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-black leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://cdn.prod.website-files.com/61fc302889864b68615ef7fa/655de882147545f32f7f34ac_paris-chauffeur-service-hire-dbsexperience.webp"
            alt="Hourly Hire"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
