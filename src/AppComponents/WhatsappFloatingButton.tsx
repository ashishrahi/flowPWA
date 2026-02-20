"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useMemo } from "react";

export default function WhatsappFloatingButton() {
  const whatsappUrl = useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

    if (!number) return "#";

    return `https://wa.me/${number}?text=${message || ""}`;
  }, []);

  if (!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      
      {/* Chat Bubble (Above) */}
      <div className="relative bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-lg">
        Chat with us 👋
        
        {/* Small Arrow */}
        <span className="absolute right-4 -bottom-2 w-3 h-3 bg-white rotate-45"></span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center
                   bg-[#25D366] text-white
                   p-4 rounded-full shadow-xl
                   transition-transform duration-300
                   hover:scale-105"
      >
        {/* Slow Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-[ping_3s_infinite]" />

        <FaWhatsapp size={26} className="relative z-10" />
      </a>
    </div>
  );
}