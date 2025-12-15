import { FaStar } from 'react-icons/fa';
import image from '../../../public/link05.png'
export default function StorySection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-6 md:px-20 overflow-hidden">
      {/* Subtle Shine Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-12 animate-shine"></div>
      </div>

      {/* Soft Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* ===== Left: Actual Image with Effects ===== */}
        <div className="relative group">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Replace the image URL below with your real one */}
            <img
              src={image}
              alt="Linkway Rides Fleet"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border border-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating Accent Orbs */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 shadow-lg"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 shadow-lg"></div>
        </div>

        {/* ===== Right: Text Content ===== */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
           <div className="inline-flex items-center gap-2 bg-[#D68F00] text-black px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md">
                       <FaStar className="w-4 h-4" />
                       <span>About Us</span>
                     </div>

            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our <span className="text-yellow-500">Story</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Founded over a decade ago,{" "}
              <span className="font-bold text-gray-900 bg-yellow-100 px-1 rounded">
                Linkway Rides
              </span>{" "}
              was built with one mission in mind to make travel across the UK
              seamless, safe, and comfortable. What started as a small local
              transport service has now grown into one of the country's most
              trusted names in{" "}
              <span className="font-semibold text-gray-900">
                coach, minibus, and cab hire
              </span>
              .
            </p>

            <p className="text-lg">
              We’ve proudly served thousands of customers from corporate
              clients to schools, event organizers, and travelers. Our
              commitment to{" "}
              <span className="font-semibold text-gray-900">
                punctuality, professionalism, and premium comfort
              </span>{" "}
              has made us the go-to choice for those who expect more from their
              journey.
            </p>
          </div>

          {/* Mini Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">10+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">50K+</div>
              <div className="text-sm text-gray-600">Trips</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">5K+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(12deg);
          }
          100% {
            transform: translateX(100%) rotate(12deg);
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
