import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Limousine Service?",
    answer:
      "Our Limousine Service provides luxury, chauffeur-driven vehicles for VIP experiences, corporate travel, airport pickups, and special events.",
  },
  {
    question: "How do I book a limousine?",
    answer:
      "You can book online via our app or website. Choose your vehicle, pickup time, and duration.",
  },
  {
    question: "Are prices fixed or variable?",
    answer:
      "All pricing is fixed at booking and includes taxes, tolls, and gratuity—no hidden fees.",
  },
  {
    question: "Can I hire a limousine by the hour?",
    answer:
      "Yes, we offer flexible hourly hire for events, city tours, and business meetings.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "Luxury sedans, stretch limousines, SUVs, and executive vans—all maintained and chauffeur-driven.",
  },
  {
    question: "Do you offer corporate packages?",
    answer:
      "Yes, businesses can reserve limousines for corporate travel with dedicated billing and priority service.",
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
          Learn everything about our Limousine Service, booking options, pricing, and premium experiences.
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
            src="https://img.freepik.com/free-photo/woman-getting-taxi-car_23-2149149625.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Limousine Service"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
