
import { LucideSpeech } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { CiFaceSmile } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import { FaEarListen } from 'react-icons/fa6';
import { IoClipboardOutline } from 'react-icons/io5';
import { RiCoupon2Line } from "react-icons/ri";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services: Service[] = [
    {
      title: 'Hearing Assessments',
      description: 'Comprehensive evaluation of your hearing health with state-of-the-art equipment.',
      icon: (
        <IoClipboardOutline className="h-10 w-10 text-clinic-primary" />
      ),
    },
    {
      title: 'Occupational Therapy',
      description: 'Expert care for all types of ear infections with personalized treatment plans.',
      icon: (
        <FaRegClock className="h-10 w-10 text-clinic-primary" />
      ),
    },
    {
      title: 'Hearing Aid trial & Fitting',
      description: 'Customized hearing aid solutions with expert fitting and ongoing support.',
      icon: (
        <RiCoupon2Line className="h-10 w-10 text-clinic-primary" />
      ),
    },
    {
      title: 'Tinnitus Treatment',
      description: 'Specialized care for ringing in the ears with proven treatment protocols.',
      icon: (
        <CiFaceSmile className="h-10 w-10 text-clinic-primary" />
      ),
    },
    {
      title: 'Speech Therapy',
      description: 'Diagnosis and treatment of vertigo and other balance-related conditions.',
      icon: (
        <LucideSpeech className="h-10 w-10 text-clinic-primary" />
      ),
    },
    {
      title: 'Ear Wax Removal',
      description: 'Safe and gentle ear wax removal by experienced professionals.',
      icon: (
        <FaEarListen className="h-10 w-10 text-clinic-primary" />
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-clinic-secondary" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-accent mt-4 reveal" style={{ transitionDelay: '100ms' }}>
            Comprehensive <span className="text-clinic-primary">Ear Care</span> Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 reveal" style={{ transitionDelay: '200ms' }}>
            We offer a full range of ear care services using advanced technology and evidence-based treatments to address all your hearing concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white rounded-xl p-6 card-shadow hover:translate-y-[-5px] transition-all duration-300 reveal"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-clinic-accent mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
