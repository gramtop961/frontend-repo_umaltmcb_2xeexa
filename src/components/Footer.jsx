import { Mail, Phone, MapPin, Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-white">East West Booking</span>
            </div>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              Elegant, professional travel planning for discerning explorers. Traditional values, modern convenience.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500" /> +1 (234) 567-890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" /> hello@ewb.co
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" /> 221B Baker Street, London
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-400">Sign up for route launches and seasonal offers.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              <button type="button" className="px-4 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} East West Booking. All rights reserved.</p>
          <p>Crafted with care for explorers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
