import { motion } from "framer-motion";
import one from "../../assets/home/one.png";
import two from "../../assets/home/two.png";
import dot from "../../assets/home/dot.png";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const TrustedCabService = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-8 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12"
      style={{
        backgroundImage: `url(${dot})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/30 via-white/90 to-yellow-50/20 pointer-events-none" />

      {/* Left Image */}
      <motion.div
        className="relative w-full lg:w-1/3 flex justify-center items-center z-10"
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={one}
          alt="Cab Service"
          className="h-64 sm:h-80 md:h-96 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-500"
        />
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-25"></div>
      </motion.div>

      {/* Center Text */}
      <motion.div
        className="relative w-full lg:w-1/2 text-center lg:text-left z-10"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.p
          className="text-yellow-600 font-medium uppercase tracking-widest text-sm mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our Company
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We Deliver{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Trusted Cab Services
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-3 text-base sm:text-lg"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Professional, safe, and timely transport services across the UK.
        </motion.p>

        <motion.p
          className="text-gray-600 mb-6 text-base sm:text-lg"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our fleet and experienced drivers ensure comfort and reliability for
          every journey.
        </motion.p>

        {/* Features */}
        <div className="text-center">
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 bg-yellow-100 px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CiCalendarDate className="text-3xl text-yellow-600" />
              <h4 className="text-lg font-semibold text-gray-800">
                Online Booking
              </h4>
            </div>

            <div className="flex items-center gap-3 bg-yellow-100 px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <FaHeadset className="text-2xl text-yellow-600" />
              <h4 className="text-lg font-semibold text-gray-800">
                24/7 Support
              </h4>
            </div>
          </motion.div>

          {/* Centered Button below cards */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services">
              <Button
                text="Book a Ride"
                bgHover="black"
                textHover="white"
                cutHover="white"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full lg:w-1/4 hidden sm:flex justify-center items-center z-10"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://i.pinimg.com/1200x/35/7c/54/357c54b83b935748cf756d018dadf1f4.jpg"
          alt="Cab Service 2"
          className="h-64 sm:h-80 md:h-96 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-500"/>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-25"></div>
      </motion.div>
    </section>
  );
};

export default TrustedCabService;
