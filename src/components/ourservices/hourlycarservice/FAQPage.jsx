import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What are Corporate Airport Transfers?",
    answer:
      "Corporate Airport Transfers provide professional chauffeur-driven rides for employees, executives, or clients directly to and from the airport, ensuring punctuality and comfort.",
  },
  {
    question: "Can I schedule transfers in advance?",
    answer:
      "Yes, you can book transfers in advance according to flight schedules or corporate requirements, with flexibility for changes if needed.",
  },
  {
    question: "Are the rates fixed or per passenger?",
    answer:
      "Rates are transparent and fixed at the time of booking. Corporate billing ensures no hidden fees, tolls, or surcharges.",
  },
  {
    question: "Can multiple passengers or stops be accommodated?",
    answer:
      "Yes, our executive vehicles can accommodate multiple passengers and stops as requested for your business needs.",
  },
  {
    question: "Do you provide corporate accounts?",
    answer:
      "Yes, businesses can set up corporate accounts for centralized billing, team access, and detailed travel reports.",
  },
  {
    question: "What types of vehicles are available?",
    answer:
      "Luxury sedans, SUVs, and executive vans—all chauffeur-driven and maintained to the highest standards for corporate travel.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12 px-6">
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-black">
          Frequently <span className="text-[black]">Asked Questions</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Everything you need to know about our Corporate Airport Transfer services, bookings, pricing, and premium chauffeurs.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* FAQ LIST */}
        <div className="flex flex-col justify-between h-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
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
            src="https://cdn.pixabay.com/photo/2024/04/27/05/59/ai-generated-8723087_1280.jpg"
            alt="Corporate Airport Transfers"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
