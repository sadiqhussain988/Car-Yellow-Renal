import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/companyLogo.png";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { LuChevronsLeft } from "react-icons/lu";
import Button from "../components/Button.jsx";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black px-10 pt-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Logo */}
        <div className="w-full md:w-[20%] md:ms-7 flex justify-center md:justify-start">
          <img
            src={logo}
            alt="company logo"
            loading="lazy"
            className="w-fit max-w-[100px]"
          />
        </div>

        {/* Call for Taxi */}
        <div className="w-full md:w-[30%] relative">
          <div
            className="max-w-[300px] h-[60px] md:h-[70px] bg-[#F5B533]"
            style={{ clipPath: "polygon(20% 3%, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>
          <div className="text-black flex items-center absolute top-2 right-14 md:top-3 md:right-8 lg:right-16 xl:right-20 2xl:right-24 max-w-[250px]">
            <div>
              <motion.p
                className="uppercase ms-4 mb-1 text-sm md:font-semibold"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Call For Booking
              </motion.p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="tel:+441617061110"
                  className="text-black hover:scale-110 transition-transform"
                >
                  <FaPhoneAlt className="text-lg" />
                </a>

                <a
                  href="https://wa.me/441617061110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-110 transition-transform"
                >
                  <FaWhatsapp className="text-lg" />
                </a>
                <motion.p
                  className="text-md md:text-xl lg:text-xl"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  +4477 75251519
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mt-5 mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Column: About */}
        <div className="w-full md:w-[30%] text-center md:text-left">
          <motion.p
            className="text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Linkway Rides streamlines transportation services by connecting
            customers with reliable drivers, simplifying bookings, and
            enhancing ride management through intelligent, user friendly
            technology
          </motion.p>

          <div className="mt-4 flex items-center flex-wrap gap-2">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  className="w-8 h-8 flex items-center justify-center relative overflow-hidden border border-black/15 rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
                >
                  <Icon className="text-gray-900 relative z-10 transition-all duration-300 group-hover:text-white text-sm" />
                  <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#F5B533] z-0 transition-all duration-500 group-hover:top-0"></div>
                </button>
              )
            )}
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex mt-5 text-white">
          <div className="max-w-[300px]">
            <motion.h3
              className="font-bold text-2xl uppercase"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Useful Links
            </motion.h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#ba8722] h-1 rounded-full mt-[-2px]" />
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {["Home", "Services", "About-us", "Contact"].map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <LuChevronsLeft className="mt-0.5" />
                  <Link
                    to={`/${item ? item.toLowerCase().replace(" ", "-") : "about-us"}`}
                    className="relative text-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#c68a12] after:transition-all after:duration-300 hover:after:w-full rounded-full"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex mt-5 text-white">
          <div className="max-w-[300px]">
            <motion.h3
              className="font-bold text-2xl uppercase"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Newsletter
            </motion.h3>
            <div className="relative mt-2">
              <hr className="w-[90%] border-gray-500" />
              <hr className="w-[30%] bg-[#bc8924] h-1 rounded-full mt-[-2px]" />
            </div>
            <motion.p
              className="my-2 text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Signup for our weekly Newsletter updates.
            </motion.p>
            <div>
              <input
                type="email"
                className="px-5 py-3 mb-4 border max-w-[139px] border-gray-300  rounded-md outline-none"
                placeholder="Your email"
              />
              <Button  text="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full text-gray-500 mt-8" />

      {/* Footer Bottom */}
      <div className="container mx-auto mt-4 pb-4 flex flex-col md:flex-row justify-between items-center">
        <motion.p
          className="text-white text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © Copyright Reserved By Linkway Rides 2025
        </motion.p>
        <div className="text-white items-center cursor-pointer flex gap-1 hover:text-[#cc8f16] mt-2 md:mt-0">
          <FaFacebook className="text-white" />
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
