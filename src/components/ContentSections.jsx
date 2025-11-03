import { Wifi, Shield, Coffee, Clock, MapPin, Star, CheckCircle, Compass, Globe } from "lucide-react";

const amenityItems = [
  { icon: Wifi, title: "Wi‑Fi on board", desc: "Stay connected throughout your journey." },
  { icon: Coffee, title: "Complimentary meals", desc: "Tasteful selections inspired by the route." },
  { icon: Shield, title: "Trusted partners", desc: "Premium carriers vetted for safety." },
  { icon: Clock, title: "On-time focus", desc: "Precision planning from check‑in to arrival." },
];

const routes = [
  { from: "New York", to: "Paris", time: "7h 30m", price: 499, image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=2070&auto=format&fit=crop" },
  { from: "Dubai", to: "Tokyo", time: "9h 50m", price: 699, image: "https://images.unsplash.com/photo-1518544801976-3e1884712f47?q=80&w=2069&auto=format&fit=crop" },
  { from: "London", to: "Delhi", time: "8h 40m", price: 559, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop" },
];

const features = [
  "Curated routes blending heritage and innovation",
  "Dedicated travel concierge from booking to return",
  "Flexible changes with transparent policies",
  "Exclusive lounge and partner perks",
];

const gallery = [
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493554411431-de7ea80f0b29?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2069&auto=format&fit=crop",
];

const testimonials = [
  { name: "Aarav S.", text: "A graceful experience end‑to‑end. The route suggestions were spot on.", rating: 5 },
  { name: "Lina M.", text: "Felt classic yet refreshingly modern. Exceptional support throughout.", rating: 5 },
  { name: "George K.", text: "Simple booking, great value, and punctual flights. Highly recommended!", rating: 4 },
];

export default function ContentSections() {
  return (
    <div className="relative">
      <section id="amenities" className="py-20 bg-gradient-to-b from-white to-amber-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">Amenities</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Comfort that complements every mile.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenityItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop')" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-black/5 p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">Where tradition meets tomorrow</h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              We honor timeless routes and cultures while embracing modern comfort and technology.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-amber-600">
              <Compass className="h-6 w-6" />
              <Globe className="h-6 w-6" />
              <Star className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">Popular Routes</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Handpicked journeys loved by our travelers.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{r.from} → {r.to}</h3>
                    <span className="text-amber-600 font-semibold">${r.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" /> Approx. {r.time}
                  </p>
                  <button className="mt-4 w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium group-hover:bg-gray-800 transition">Book now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">About East West Booking</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a vision to bridge cultures, East West Booking brings decades of
              hospitality into the digital age. Our team blends meticulous planning with a human
              touch, ensuring each itinerary feels personal, elegant, and effortless.
            </p>
            <ul className="mt-6 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop"
                alt="About East West Booking"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-red-600/10" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Salient Features</h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-600" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2069&auto=format&fit=crop')" }} />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">Gallery</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">A glimpse of journeys we love.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={src} alt="Travel" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center">Testimonials</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Stories from travelers across the globe.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-gray-700">“{t.text}”</p>
                <p className="mt-4 text-sm text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
