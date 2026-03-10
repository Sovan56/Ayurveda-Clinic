import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-olive-50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-olive-500 rounded-full flex items-center justify-center text-white">
              <Leaf size={20} />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">
              AyurVeda
            </span>
          </Link>
          <p className="text-olive-200/80 leading-relaxed">
            Restoring balance and harmony to your life through the ancient wisdom of Ayurveda. Natural healing for modern living.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-olive-700 flex items-center justify-center hover:bg-olive-800 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-olive-700 flex items-center justify-center hover:bg-olive-800 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-olive-700 flex items-center justify-center hover:bg-olive-800 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-olive-200/80">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Doctor</Link></li>
            <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Treatments</h4>
          <ul className="space-y-4 text-olive-200/80">
            <li>Panchakarma</li>
            <li>Abhyanga Massage</li>
            <li>Shirodhara</li>
            <li>Yoga Therapy</li>
            <li>Dietary Consultation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-olive-200/80">
            <li className="flex gap-3">
              <MapPin size={20} className="shrink-0 text-olive-400" />
              <span>123 Healing Way, Wellness District, City Name</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="shrink-0 text-olive-400" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="shrink-0 text-olive-400" />
              <span>contact@ayurvedaclinic.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-olive-800 text-center text-olive-400 text-sm">
        <p>© {new Date().getFullYear()} AyurVeda Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
