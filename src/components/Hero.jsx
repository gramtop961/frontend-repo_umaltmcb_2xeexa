import { Calendar, MapPin, Users, Plane } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0 pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 pt-28 pb-20">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
                <Plane className="h-4 w-4" />
                <span className="text-xs tracking-wide">Traditional yet modern journeys</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Discover the world with elegance and ease
              </h1>
              <p className="mt-4 text-white/90 max-w-xl">
                East West Booking crafts seamless travel experiences across continents. From classic
                routes to hidden gems, plan your next escape with confidence.
              </p>
            </div>

            <div className="">
              <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan your journey</h3>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">From</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="City or Airport"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">To</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="City or Airport"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Depart</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Return</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Travellers</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        defaultValue={1}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Class</label>
                    <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 mt-2 flex gap-3">
                    <button type="button" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-red-600 text-white font-medium shadow hover:opacity-90 transition">
                      <Plane className="h-4 w-4" /> Search Flights
                    </button>
                    <button type="button" className="px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-medium hover:border-gray-300 transition">
                      Advanced
                    </button>
                  </div>
                </form>
                <p className="text-xs text-gray-500 mt-4">Secure bookings • Best price guarantee • 24/7 assistance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 -mb-16">
            {["Trusted by 50k+ travelers", "Global network", "Tailored itineraries", "Premium support"].map(
              (item) => (
                <div key={item} className="bg-white/90 backdrop-blur rounded-xl shadow ring-1 ring-black/5 p-4 text-center text-sm font-medium text-gray-700">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
