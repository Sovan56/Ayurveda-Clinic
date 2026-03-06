import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Chronic Back Pain Patient',
    content: 'I had been suffering from back pain for years. After just three weeks of Abhyanga and specialized herbal treatments, I feel like a new person. The holistic approach really works!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Stress Management',
    content: 'Shirodhara sessions at this clinic are pure magic. The environment is so peaceful, and Dr. Sharma really takes the time to listen to your concerns. Highly recommended for anyone dealing with stress.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Priya Patel',
    role: 'Digestive Issues',
    content: 'The Panchakarma treatment was a life-changing experience. It not only cleared my digestive issues but also gave me a clarity of mind I haven\'t felt in a long time. Thank you!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Robert Wilson',
    role: 'Insomnia Patient',
    content: 'I struggled with sleep for a decade. The combination of dietary changes and herbal supplements prescribed here worked wonders. I\'m finally sleeping through the night naturally.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-900 mb-6">Patient Stories</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Hear from our patients about their journey to wellness through Ayurveda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-olive-50 relative"
            >
              <div className="absolute top-8 right-10 text-olive-100">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-olive-400 text-olive-400" : "text-neutral-200"}
                  />
                ))}
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-olive-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-olive-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
