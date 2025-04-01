/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import HeroLanding from '@/components/HeroLanding';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';
import ActionButtons from '@/components/ActionButtons';

// Extend window to include fbq
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const Index = () => {

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    // Activate reveal animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-clinic-secondary via-white to-clinic-secondary">
      <ScrollToTop />
      <Navbar />
      <HeroLanding />
      <AppointmentForm />
      <Footer />
      <ActionButtons />
      <Toaster />
    </div>
  );
};

export default Index;
