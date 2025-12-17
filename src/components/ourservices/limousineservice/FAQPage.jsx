import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Event Transportation Management?",
    answer:
      "Event Transportation Management provides coordinated transport solutions for large-scale events, including conferences, weddings, and corporate gatherings.",
  },
  {
    question: "How do I book for an event?",
    answer:
      "You can request a quote online or contact our team to plan pickups, drop-offs, and vehicle allocation for your event.",
  },
  {
    question: "Are prices fixed or variable?",
    answer:
      "All pricing is transparent and customized based on fleet size, distance, and service duration. No hidden fees.",
  },
  {
    question: "Can I hire multiple vehicles for the same event?",
    answer:
      "Yes, we manage fleets of sedans, vans, buses, and luxury vehicles to accommodate any number of guests.",
  },
  {
    question: "Do you provide on-site coordination?",
    answer:
      "Our professional coordinators manage all transportation logistics to ensure smooth operations during the event.",
  },
  {
    question: "Is Wi-Fi and connectivity available?",
    answer:
      "Yes, most vehicles are equipped with Wi-Fi and charging ports for guests to stay connected during transit.",
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
          Frequently <span className="text-[black]">Asked Questions</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Learn everything about our Event Transportation Management services, booking options, fleet coordination, and premium event logistics.
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
            src="https://i.pinimg.com/1200x/1c/fa/fe/1cfafee22e5c72a3eee1285f47d262f5.jpg"
            alt="Event Transportation"
            className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
