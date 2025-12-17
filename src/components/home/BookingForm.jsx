import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import Button from "../Button";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("2025-12-18");
  const [time, setTime] = useState("18:09");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, date, time });
  };

  return (
    <section className="py-8 px-4">
      {/* Header */}
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-gray-900">
          Book Your Ride
        </h1>
        <p className=" text-gray-600">
          Premium chauffeur service with comfort and reliability
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* FROM */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-5 py-2 focus-within:ring-2 focus-within:ring-black">
            <MapPin className="text-gray-500 w-5 h-5" />
            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500">
                From
              </label>
              <input
                type="text"
                placeholder="Address, airport, hotel..."
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* TO */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-black">
            <MapPin className="text-gray-500 w-5 h-5" />
            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500">
                To
              </label>
              <input
                type="text"
                placeholder="Address, airport, hotel..."
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* DATE */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-black">
            <Calendar className="text-gray-500 w-5 h-5" />
            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500">
                Pickup Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900"
              />
            </div>
          </div>

          {/* TIME */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-black">
            <Clock className="text-gray-500 w-5 h-5" />
            <div className="w-full">
              <label className="text-xs font-semibold text-gray-500">
                Pickup Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <p className="mt-4 text-sm text-gray-500">
          Chauffeur will wait up to <span className="font-medium">15 minutes</span> free of charge.
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
         <Link to="/services">
          <Button text="Search Available Rides" />
         </Link>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
