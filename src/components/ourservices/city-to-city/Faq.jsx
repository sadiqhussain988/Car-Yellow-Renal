import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is a City-to-City ride?",
    answer:
      "City-to-City rides are long-distance transfers between cities with a professional chauffeur, fixed pricing, and premium comfort.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–24 hours in advance, although last-minute bookings are often possible.",
  },
  {
    question: "Are prices fixed or metered?",
    answer:
      "All prices are transparent and fixed at booking. No surge, traffic or hidden fees.",
  },
  {
    question: "Do you support corporate accounts?",
    answer:
      "Yes, we offer centralized billing, team access, and expense reports for businesses.",
  },
  {
    question: "Can I add multiple stops?",
    answer:
      "Yes, additional stops can be added while booking or during the ride.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "Business sedans, SUVs, luxury cars, and executive vans—all modern and chauffeur-driven.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* ---------- PAGE HEADER ---------- */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-black">
          Frequently <span className="text-[#F4C224]">Asked Questions</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Learn everything you need about City-to-City rides, pricing, bookings,
          corporate travel, and premium services.
        </p>
      </div>

      {/* ---------- MAIN CONTENT (FAQ + IMAGE) ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT — FAQ LIST */}
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#F4C224] to-[#debe2e] border border-gray-200 
                           rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>

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
        </div>

        {/* RIGHT — IMAGE SAME HEIGHT AS FAQ */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://www.experis.com/-/media/project/manpowergroup/experis/experis-us/articles/all_financial_planning_bluewash_rgb_150.jpg"
            alt="City travel"
            className="w-full h-full object-cover rounded-2xl shadow-lg 
               transition-all duration-500
               hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
