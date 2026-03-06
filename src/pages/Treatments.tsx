import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    title: 'Panchakarma',
    description: 'The ultimate detoxification and rejuvenation therapy consisting of five specialized procedures.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    duration: '7-21 Days',
    price: 'Starting from $500',
  },
  {
    title: 'Abhyanga Massage',
    description: 'A full-body massage with warm medicated oils to improve circulation and reduce stress.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    duration: '60-90 Mins',
    price: '$80',
  },
  {
    title: 'Shirodhara',
    description: 'A deeply relaxing therapy where warm oil is poured in a continuous stream over the forehead.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800',
    duration: '45 Mins',
    price: '$120',
  },
  {
    title: 'Yoga Therapy',
    description: 'Customized yoga sessions designed to address specific health concerns and improve flexibility.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    duration: '60 Mins',
    price: '$60',
  },
  {
    title: 'Dietary Consultation',
    description: 'Personalized nutritional guidance based on your body type and current health state.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    duration: '45 Mins',
    price: '$75',
  },
  {
    title: 'Herbal Therapy',
    description: 'Prescription of specific Ayurvedic herbs and formulations to balance your doshas.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    duration: '30 Mins',
    price: '$50',
  },
];

export default function Treatments() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-900 mb-6">Our Treatments</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover a wide range of traditional Ayurvedic therapies tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-olive-700">
                  {treatment.duration}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-olive-900 mb-3">{treatment.title}</h3>
                <p className="text-neutral-600 mb-6 line-clamp-2">{treatment.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-olive-600 font-bold">{treatment.price}</span>
                  <Link to="/book" className="text-olive-500 font-medium hover:underline">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
