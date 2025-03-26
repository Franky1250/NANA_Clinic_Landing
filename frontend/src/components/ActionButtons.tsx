import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

const ActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show buttons immediately on mobile devices
    if (window.innerWidth < 768) {
      setIsVisible(true);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const openWhatsApp = () => {
    toast({
      title: "Opening WhatsApp",
      description: "Connecting you with our support team...",
      duration: 2000,
    });
    window.open(`https://wa.me/917205454269?text=${encodeURIComponent('Hello, I would like to book an appointment.')}`, '_blank');
  };

  const callClinic = () => {
    toast({
      title: "Calling Clinic",
      description: "Connecting you to +917205454269",
      duration: 2000,
    });
    window.location.href = 'tel:+917205454269';
  };

  return (
    <div
      className={`fixed right-24 bottom-40 flex flex-col space-y-20 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }} // Disable clicks when invisible
    >
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="sticky-button group bg-green-500 hover:bg-green-600 focus:ring-green-500 hover:scale-110 transition-all duration-300 animate-pulse-subtle shadow-lg hover:shadow-green-400/50 p-4 rounded-full"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 animate-float text-white" />
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100">
          WhatsApp
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={callClinic}
        className="sticky-button group bg-clinic-primary hover:bg-clinic-accent focus:ring-clinic-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-clinic-primary/50 p-4 rounded-full"
        aria-label="Call the clinic"
      >
        <Phone className="w-6 h-6 animate-float text-white" />
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100">
          Call Us
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;