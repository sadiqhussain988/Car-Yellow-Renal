import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How can my hotel or agency partner with Linked Way Rides?",
    answer:
      "Sign up for our B2B program to provide seamless, chauffeur-driven airport transfers to your guests. Enjoy priority dispatch and dedicated account management.",
  },
  {
    question: "Can we manage multiple guest transfers at once?",
    answer:
      "Yes! Our platform allows travel agencies and hotels to book and manage multiple rides simultaneously with real-time tracking.",
  },
  {
    question: "Do you offer corporate billing for partners?",
    answer:
      "Absolutely. Partners receive consolidated invoices, reporting, and simplified payment processes tailored for hotels and travel agencies.",
  },
  {
    question: "What vehicles are available for partner bookings?",
    answer:
      "Linked Way Rides offers executive sedans, SUVs, luxury cars, and vans — all modern, chauffeur-driven, and ideal for VIP guests.",
  },
  {
    question: "Can transfers be customized for VIP guests?",
    answer:
      "Yes. We provide personalized services including flexible pickup/drop-off times, multiple stops, and special amenities for premium guests.",
  },
  {
    question: "How reliable is the service for guest arrivals?",
    answer:
      "Our professional chauffeurs monitor flights and adjust timings to ensure punctual, stress-free transfers for your guests every time.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          FAQs for <span className="text-[#F3B800]">Partner Hotels & Agencies</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Everything you need to know about partnering with Linked Way Rides to provide seamless airport transfers to your guests.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* FAQ List */}
        <div className="flex flex-col space-y-4">
           {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#F3B800] to-[#debe2e] border border-gray-200 rounded-2xl px-5 py-2 shadow-md hover:shadow-lg transition-all"
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

        {/* B2B Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Partner Hotel & Agency Transfers"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 hover:brightness-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
