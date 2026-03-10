import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Leaf, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Leaf className="text-olive-500" />,
    title: 'Natural Healing',
    description: '100% herbal and natural treatments based on ancient Vedic scriptures.',
  },
  {
    icon: <Shield className="text-olive-500" />,
    title: 'Expert Consultation',
    description: 'Personalized diagnosis by certified Ayurvedic practitioners.',
  },
  {
    icon: <Sparkles className="text-olive-500" />,
    title: 'Holistic Approach',
    description: 'Treating the root cause of ailments, not just the symptoms.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000"
            alt="Ayurveda Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/80 to-cream" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Ancient Wisdom for Modern Health</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] text-olive-900 mb-8">
              Restore Your <br />
              <span className="italic text-olive-500">Natural Balance</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed">
              Experience the profound healing power of Ayurveda. Our clinic provides personalized treatments to rejuvenate your body, mind, and soul.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="btn-primary flex items-center gap-2">
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/treatments" className="btn-outline">
                View Treatments
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[100px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000"
                alt="Ayurvedic Treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-xl max-w-[240px] border border-olive-100">
              <div className="flex items-center gap-2 text-olive-500 mb-2">
                <CheckCircle2 size={20} />
                <span className="font-bold">15+ Years</span>
              </div>
              <p className="text-sm text-neutral-500">Of experience in traditional Ayurvedic healing.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-olive-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-cream hover:shadow-lg transition-all border border-transparent hover:border-olive-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-olive-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-olive-900 rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-olive-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 relative z-10">
            Ready to Start Your <br />
            <span className="italic text-olive-400">Healing Journey?</span>
          </h2>
          <p className="text-olive-200 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Book your first consultation today and discover a personalized path to wellness that respects your unique constitution.
          </p>
          <Link to="/book" className="btn-primary bg-white text-olive-900 hover:bg-olive-50 relative z-10 inline-block">
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
