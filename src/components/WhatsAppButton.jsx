import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-4 ">
      <a
        href="https://wa.me/645834584254625"
        target="_blank"
        className="bg-green-500  text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 hover:text-green-600"
      >
        <BsWhatsapp className="w-10 h-10" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
