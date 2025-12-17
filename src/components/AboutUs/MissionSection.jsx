import { FaStar } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="relative py-10 px-6 md:px-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Shine Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-gray-200/10 to-transparent rotate-45 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header / Tagline */}
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md">
            <FaStar className="w-4 h-4" />
            <span> Trusted Airport Transfers</span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Mission <span className="text-gray-900">&</span> Vision
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Stress-free, punctual, and comfortable airport pick & drop services across the UK.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 text-left">
          {/* Mission Card */}
          <div 
            className="group relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-400/50 overflow-hidden"
            data-aos="fade-right"
          >
            {/* Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-400 rounded-full"></div>
            </div>

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gray-950 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Mission Content */}
            <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              To provide <span className="font-semibold text-gray-900">reliable and stress free airport pick & drop services</span> that ensure every passenger reaches their flight on time. 
              We focus on <span className="font-semibold text-gray-900">punctuality, comfort, and professional service</span> so your journey starts and ends with peace of mind.
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Vision Card */}
          <div 
            className="group relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-black/10 overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-200"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-6 left-6 w-24 h-24 bg-gray-400 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>

            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gray-950 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            {/* Vision Content */}
            <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              To become the <span className="font-semibold text-gray-900">UK's most trusted airport transfer service</span>, 
              known for <span className="font-semibold text-gray-900">punctuality, safety, and premium travel experience</span>. 
              We aim to set new standards in airport transport by combining <span className="font-semibold text-gray-900">innovation, comfort, and professional service</span> for every journey.
            </p>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-300"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-2 shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <p className="text-gray-700 font-semibold text-lg">
              Ready to experience <span className="font-semibold text-gray-800">stress-free airport transfers</span>?{" "}
              <span className="text-gray-900 font-bold">Book your journey with Linkway Rides today!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
