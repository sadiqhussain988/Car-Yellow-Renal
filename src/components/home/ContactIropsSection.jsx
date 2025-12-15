import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactIropsSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!formData.email.includes("@")) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@linkwayrides.com",
      link: "mailto:ops@groundtransportsolution.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 161 706 1110",
      link: "#",
    },
    {
      icon: Clock,
      label: "Ops Hours",
      value: "24/7",
      description: "Always available for emergencies",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F5F7FA] to-white py-6 px-4 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFEE02]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#F5A623]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#FFEE02] via-[#F5A623] to-[#FF8C00] bg-clip-text text-transparent">
                IROPS Team
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/40 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Need immediate assistance? Our IROPS team is ready to activate
            within hours at most major hubs worldwide. Fill out the form below
            and we'll respond promptly.
          </p>
        </div>

        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl px-6 py-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFEE02]/20 to-[#F5A623]/20 mb-4 group-hover:from-[#FFEE02]/30 group-hover:to-[#F5A623]/30 transition-all">
                  <item.icon className="h-7 w-7 text-[#F5A623]" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="font-semibold text-gray-900 text-lg hover:text-[#F5A623] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold text-gray-900 text-lg">{item.value}</p>
                )}
                {item.description && (
                  <p className="text-sm text-gray-400 mt-2 max-w-xs">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Send Us Your Query
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the form below and our IROPS team will contact you within
              hours. All fields marked with <span className="text-red-500">*</span> are required.
            </p>
          </div>

          {/* Form Status */}
          <div aria-live="polite">
            {formStatus.submitted && (
              <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">Our IROPS team will contact you within 2 hours.</p>
                </div>
              </div>
            )}
            {formStatus.error && (
              <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Error sending message</p>
                  <p className="text-red-600 text-sm">{formStatus.error}</p>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={formStatus.submitting}
                  className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={formStatus.submitting}
                  className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus.submitting}
                  className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all"
                  placeholder="info@linkwayrides.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={formStatus.submitting}
                  className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all"
                  placeholder="+44 161 706 1110"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={formStatus.submitting}
                className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all"
                placeholder="Your company/organization name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={formStatus.submitting}
                rows={5}
                className="w-full rounded-xl bg-gray-50 border border-gray-300 px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:border-transparent transition-all resize-none"
                placeholder="Describe your situation, location, number of passengers, and timeline..."
              />
              <p className="text-xs text-gray-500 mt-2">
                Please include: Airport/IATA code, number of passengers, and required service timeframe
              </p>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={formStatus.submitting}
                className="relative px-12 py-4 rounded-full font-semibold bg-gradient-to-r from-[#FFEE02] via-[#F5A623] to-[#FF8C00] text-gray-900 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center justify-center">
                  {formStatus.submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Request to IROPS Team
                    </>
                  )}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFEE02] to-[#F5A623] opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity duration-300" />
              </button>

              <p className="text-sm text-gray-500 mt-6">
                By submitting this form, you agree to our{" "}
                <a
                  href="#"
                  className="text-[#F5A623] hover:underline font-medium"
                >
                  privacy policy
                </a>
                . We respect your data and will never share it with third parties.
              </p>
            </div>
          </form>
        </div>

        
      </div>
    </section>
  );
}
