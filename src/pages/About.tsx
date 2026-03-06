import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const stats = [
  { icon: <Users size={24} />, label: 'Happy Patients', value: '5,000+' },
  { icon: <Award size={24} />, label: 'Years Experience', value: '15+' },
  { icon: <BookOpen size={24} />, label: 'Treatments', value: '50+' },
  { icon: <Heart size={24} />, label: 'Success Rate', value: '98%' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000"
                alt="Ayurvedic Doctor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-olive-500 text-white p-8 rounded-[40px] shadow-xl">
              <h3 className="text-2xl font-serif font-bold">Dr. Ananya Sharma</h3>
              <p className="text-olive-100">B.A.M.S, M.D. (Ayurveda)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-olive-900 mb-8">Meet Our Lead Physician</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Dr. Ananya Sharma is a renowned Ayurvedic practitioner with over 15 years of experience in treating chronic ailments through traditional Vedic methods. She believes that true health is a state of physical, mental, and spiritual well-being.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              After completing her M.D. in Ayurveda from a prestigious institution, she has dedicated her life to bringing the ancient wisdom of Ayurveda to the modern world, helping thousands of patients find natural relief from lifestyle diseases.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-3xl border border-olive-100 shadow-sm">
                  <div className="text-olive-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-olive-900">{stat.value}</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-olive-50 rounded-[60px] p-12 md:p-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-olive-900 mb-8">Our Philosophy</h2>
            <p className="text-xl text-neutral-700 italic leading-relaxed">
              "Ayurveda is not just a system of medicine; it is a way of life. Our mission is to empower individuals to take charge of their health by understanding their unique Prakriti (constitution) and living in harmony with nature's rhythms."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
