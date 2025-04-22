import React from 'react';
import { Sticker } from 'lucide-react';

const PriceSticker = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToAppointment}
      className="fixed right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right p-4 bg-clinic-primary hover:bg-clinic-primary/90 text-white rounded-b-full shadow-lg z-40 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
      aria-label="Download Price"
    >
      <span className="text-sm font-medium whitespace-nowrap">
        Price Download
      </span>
    </button>
  );
};

export default PriceSticker;
