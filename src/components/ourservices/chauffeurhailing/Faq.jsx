import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Long-Term Fleet Leasing for Businesses?",
    answer:
      "Long-term fleet leasing provides companies with fully managed sedans, SUVs, and vans for 6–36 month contracts. All maintenance, replacements, drivers, and operations are handled by our team.",
  },
  {
    question: "How does corporate fleet leasing help reduce costs?",
    answer:
      "Businesses save up to 30% by avoiding vehicle purchase costs, repairs, insurance, and depreciation. Monthly fixed invoices ensure predictable expenses.",
  },
  {
    question: "Do you provide trained and verified drivers?",
    answer:
      "Yes. All chauffeurs are background-checked, uniformed, trained in corporate etiquette, and monitored through GPS and compliance systems.",
  },
  {
    question: "Can we customize fleet type and contract duration?",
    answer:
      "Absolutely. You can choose sedans, SUVs, vans, luxury vehicles, and adjust contract duration from 6 to 36 months based on your business needs.",
  },
  {
    question: "Do you offer fleet analytics and usage reports?",
    answer:
      "Yes. You receive detailed digital reports covering routes, fuel optimization, punctuality, and driver performance through our analytics dashboard.",
  },
  {
    question: "How quickly can fleet deployment start?",
    answer:
      "Depending on fleet size, deployment starts within 24–72 hours after contract signing, with complete onboarding and driver allocation.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-black leading-tight">
          Long-Term Fleet Leasing for{" "}
          <span className="text-gray-900">Businesses</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Get complete control of your company’s mobility needs with reliable,
          cost-efficient, and professionally managed fleet leasing solutions.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                       hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>

              {openIndex === index ? (
                <FiMinus className="text-xl text-black" />
              ) : (
                <FiPlus className="text-xl text-black" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-52 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-black mb-3">
          Need a Custom Fleet Plan?
        </h3>
        <p className="text-gray-600 mb-6">
          Our enterprise specialists will help you design a tailored mobility solution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-xl
                     shadow-md hover:bg-gray-900 transition-all duration-300"
        >
          Request Consultation
        </a>
      </div>
    </section>
  );
};

export default FAQPage;
