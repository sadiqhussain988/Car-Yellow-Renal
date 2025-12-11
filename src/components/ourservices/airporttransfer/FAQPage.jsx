import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is an Airport Transfer?",
    answer:
      "Airport Transfers provide professional chauffeur-driven rides directly to or from the airport with fixed pricing and premium comfort.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 1–24 hours in advance depending on flight schedules, though last-minute bookings are possible.",
  },
  {
    question: "Are prices fixed or metered?",
    answer:
      "All prices are transparent and fixed at booking. No surge, traffic, or hidden fees.",
  },
  {
    question: "Do you support corporate accounts?",
    answer:
      "Yes, corporate clients can enjoy centralized billing, team access, and detailed travel reports.",
  },
  {
    question: "Can I add multiple stops?",
    answer:
      "Yes, you can include extra stops during booking or while your chauffeur is on route.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "Business sedans, SUVs, luxury cars, and executive vans—all fully modern and chauffeur-driven.",
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
          Learn everything you need about our Airport Transfer services, bookings, pricing, and premium features.
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
            src="https://exciting-basket-1cebec2b8a.media.strapiapp.com/airport_5ad7c40c79.webp"
            alt="Airport Transfer"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
