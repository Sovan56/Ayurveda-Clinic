import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-olive-500 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Leaf size={20} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-olive-900">
            AyurVeda
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-olive-500',
                location.pathname === link.path ? 'text-olive-500' : 'text-neutral-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="btn-primary py-2 px-5 text-sm">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-olive-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-serif font-medium py-2',
                location.pathname === link.path ? 'text-olive-500' : 'text-neutral-600'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="btn-primary text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
