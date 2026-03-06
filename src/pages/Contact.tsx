import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Have questions about our treatments? We're here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-olive-50">
              <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-500 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-olive-900 mb-2">Our Location</h3>
              <p className="text-neutral-600">123 Healing Way, Wellness District, City Name, State 12345</p>
              <a 
                href="https://maps.app.goo.gl/hsLLzbyc1WDCjJFo6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-olive-500 font-medium mt-4 inline-block hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-olive-50">
              <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-500 mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-olive-900 mb-2">Call Us</h3>
              <p className="text-neutral-600">Clinic: +1 (234) 567-890</p>
              <p className="text-neutral-600">Mobile: +1 (987) 654-321</p>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-olive-50">
              <div className="w-12 h-12 bg-olive-50 rounded-2xl flex items-center justify-center text-olive-500 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-olive-900 mb-2">Email Us</h3>
              <p className="text-neutral-600">info@ayurvedaclinic.com</p>
              <p className="text-neutral-600">support@ayurvedaclinic.com</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[40px] shadow-xl border border-olive-100 h-full">
              <h3 className="text-3xl font-serif font-bold text-olive-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-2xl flex items-center gap-3 mb-6"
                  >
                    <CheckCircle size={20} />
                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Subject</label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:border-olive-500 outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.492163345862!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708512345678!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs">
            <h4 className="font-bold text-olive-900 mb-1">Visit Our Clinic</h4>
            <p className="text-xs text-neutral-600">We are located in the heart of the city, easily accessible by public transport.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
