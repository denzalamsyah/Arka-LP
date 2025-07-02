import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-10">
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition"
      >
        <BsWhatsapp className="w-10 h-10" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
