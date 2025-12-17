import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import Button from "../Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-12">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background shapes */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6">
                Let’s <span className="text-gray-300">Connect</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We’d love to hear from you! Whether it’s a partnership, inquiry, or feedback, our team is ready to assist.
              </p>

              <div className="space-y-6">
                <ContactItem icon={<MdEmail />} label="Email" text="info@linkwayrides.com" />
                <ContactItem icon={<FiPhone />} label="Phone" text="+44 161 706 1110" />
                <ContactItem icon={<MdLocationOn />} label="Location" text="2739 Saint Augustine Trl, Marietta, GA, UK" />
                <ContactItem icon={<IoMdTime className="text-2xl" />} label="Hours" text="24/7 Available Service" />
              </div>

              <div className="mt-12 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Need instant assistance? Reach out via live chat or call us directly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="relative rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div
              style={{
                background:
                  "url(https://img.freepik.com/premium-photo/headset-telephone-desk_1377216-12848.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 grayscale"
            ></div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-black/80 text-white p-12 md:p-16 rounded-3xl"
            >
              <h1 className="text-4xl font-extrabold mb-4">
                Send Us a <span className="text-gray-300">Message</span>
              </h1>

              <p className="text-lg mb-10 text-gray-300">
                Fill out the form below, and we’ll get back to you shortly.
              </p>

              <form className="space-y-2">
                <InputField type="text" placeholder="Your Name" />
                <InputField type="email" placeholder="Your Email" />
                <TextArea placeholder="Your Message" />

                <div className="pt-6">
                  <Button
                    text="Submit Message"
                    bgColor="white"
                    textColor="black"
                    hoverBg="black"
                    hoverText="white"
                    className="w-full md:w-auto px-12 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-300"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- COMPONENTS ---------------- */

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-5 py-4 text-lg text-white bg-gray-800/40 border-b-2 border-gray-600 focus:border-white outline-none rounded transition-all duration-300 placeholder-gray-400"
  />
);

const TextArea = ({ placeholder }) => (
  <textarea
    rows="5"
    placeholder={placeholder}
    className="w-full px-5 py-4 text-lg text-white bg-gray-800/40 border-b-2 border-gray-600 focus:border-white outline-none rounded transition-all duration-300 placeholder-gray-400 resize-none"
  />
);

const ContactItem = ({ icon, label, text }) => (
  <div className="flex items-start gap-5 group cursor-pointer">
    <div className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>

    <div>
      <p className="text-gray-400 text-sm uppercase tracking-wide">{label}</p>
      <p className="text-white text-lg font-medium group-hover:text-gray-300 transition-colors">
        {text === "+44 161 706 1110" ? (
          <div className="flex items-center gap-4 mt-1">
            <span>{text}</span>
            <a href="tel:+441617061110" className="hover:scale-110 transition-transform">
              <FaPhoneAlt />
            </a>
            <a href="https://wa.me/441617061110" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaWhatsapp />
            </a>
          </div>
        ) : (
          text
        )}
      </p>
    </div>
  </div>
);

export default ContactForm;
