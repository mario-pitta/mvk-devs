import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ContactButtonProps {
  product: string;
}

export default function ContactButton({ product }: ContactButtonProps) {
  const handleContact = () => {
    const message = `Olá! Gostaria de saber mais sobre ${product}`;
    const whatsappNumber = '5511999999999';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleContact}
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Falar com um consultor
    </button>
  );
}