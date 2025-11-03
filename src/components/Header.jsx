import { Plane, Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center shadow-sm">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900 tracking-tight">East West Booking</p>
              <p className="text-xs text-gray-500">Travel beyond horizons</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="#amenities" className="hover:text-amber-600 transition-colors">Amenities</a>
            <a href="#routes" className="hover:text-amber-600 transition-colors">Popular Routes</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#features" className="hover:text-amber-600 transition-colors">Features</a>
            <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-amber-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </nav>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:hello@eastwestbooking.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600">
              <Mail className="h-4 w-4" />
              <span>hello@ewb.co</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
