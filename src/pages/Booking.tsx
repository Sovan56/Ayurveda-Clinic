import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: 'Morning (9 AM - 12 PM)',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: startDate?.toLocaleDateString()
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send booking request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-2xl text-center border border-olive-100"
        >
          <div className="w-20 h-20 bg-olive-100 text-olive-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Calendar size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-olive-900 mb-4">Request Received!</h2>
          <p className="text-neutral-600 mb-8">
            Thank you for booking. Our team will contact you shortly to confirm your appointment slot.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary w-full"
          >
            Book Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-serif font-bold text-olive-900 mb-6">Book Your Consultation</h1>
            <p className="text-lg text-neutral-600 mb-10">
              Take the first step towards holistic wellness. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-olive-900">Clinic Hours</h4>
                  <p className="text-neutral-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-neutral-500">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-olive-900">Direct Contact</h4>
                  <p className="text-neutral-500">+1 (234) 567-890</p>
                  <p className="text-neutral-500">emergency@ayurvedaclinic.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[40px] shadow-xl border border-olive-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                    <Calendar size={14} /> Preferred Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all"
                    minDate={new Date()}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                    <Clock size={14} /> Preferred Time
                  </label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                  <MessageSquare size={14} /> Message (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your health concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-500/20 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending Request...' : 'Confirm Booking Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
