
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';
import AppointmentForm from './AppointmentForm';
import ActionButtons from './ActionButtons';
import HeroLanding from './HeroLanding';
import Footer from './Footer';

const Page = () => {
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

export default Page;
