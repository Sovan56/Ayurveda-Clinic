import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="WhatsApp Us"
      >
        <MessageCircle size={32} />
      </a>
      <a
        href="tel:+1234567890"
        className="w-14 h-14 bg-olive-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="Call Us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
