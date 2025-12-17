import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import image from "../../../../public/Link02.png"

const faqs = [
  {
    question: "What corporate services do you provide?",
    answer:
      "We offer dedicated employee transportation with scheduled pickups, route optimization, corporate fleet branding, and real-time tracking for businesses of all sizes.",
  },
  {
    question: "How do we set up a corporate account?",
    answer:
      "Simply contact our sales team. We will create a centralized account for your organization with customizable access, billing, and reporting options.",
  },
  {
    question: "Can we schedule rides for multiple employees?",
    answer:
      "Yes, our platform allows bulk scheduling for employees, including recurring rides, multiple routes, and flexible adjustments.",
  },
  {
    question: "Are the rides secure and compliant?",
    answer:
      "Absolutely. All drivers undergo background checks, vehicles meet safety standards, and rides are monitored via real-time GPS for compliance.",
  },
  {
    question: "Do you provide analytics for employee transportation?",
    answer:
      "Yes, our corporate dashboard provides detailed insights into ride punctuality, employee usage, route efficiency, and cost reporting.",
  },
  {
    question: "Can we integrate with our internal HR or scheduling systems?",
    answer:
      "Our system supports API integration with HR platforms to automate bookings, manage employees, and sync schedules seamlessly.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Frequently <span className="text-[black]">Asked Questions</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Learn everything you need about our corporate employee transportation services, compliance, analytics, and booking solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="Corporate Travel"
            className="w-full h-full object-cover lg:h-[400px] rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* RIGHT — FAQ LIST */}
        <div className="flex flex-col justify-start">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-200 transition-all hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </span>

                  <FiChevronDown
                    className={`text-xl text-gray-900 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
