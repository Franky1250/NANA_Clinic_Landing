
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Sankalp Patra",
      role: "Patient",
      image: "/images/testimonial-1.jpg",
      content: "Most effective care provided. Cost effective and also hygienic environment. Mainly The staffs and other members are having good manner sense. Always preferable clinic ❤",
      rating: 5
    },
    {
      name: "Umakanta Jena",
      role: "Patient",
      image: "/images/testimonial-2.jpg",
      content: "After suffering from tinnitus for years, I finally found relief thanks to the specialized treatment plan from this clinic. The staff is knowledgeable and genuinely caring.",
      rating: 5
    },
    {
      name: "Bibekananda Biswal",
      role: "Patient",
      image: "/images/testimonial-3.jpg",
      content: "I like their service and their behaviour, so friendly in nature. Must Visit 👌",
      rating: 5
    },
    {
      name: "Prangya Parimita Samal",
      role: "Patient",
      image: "https://plus.unsplash.com/premium_photo-1661964122297-48da1eeac9a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "I've been wearing hearing aids for decades, but the technology and fitting process at this clinic is far superior to anywhere else I've been. Life-changing improvement!",
      rating: 5
    },
    {
      name: "Jayashree Mohapatra",
      role: "Patient",
      image: "/images/testimonial-4.jpg",
      content: "The treatment I received was incredibly effective. Within weeks, my severe symptoms were significantly reduced. The entire team is professional and supportive.",
      rating: 5
    },
  ];

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

  const scrollToNext = () => {
    if (sliderRef.current) {
      const newIndex = (currentIndex + 1) % testimonials.length;
      const cardWidth = sliderRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
      const scrollPosition = cardWidth * newIndex;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  const scrollToPrev = () => {
    if (sliderRef.current) {
      const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      const cardWidth = sliderRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
      const scrollPosition = cardWidth * newIndex;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-clinic-secondary" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-accent mt-4 reveal" style={{ transitionDelay: '100ms' }}>
            What Our <span className="text-clinic-primary">Patients</span> Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 reveal" style={{ transitionDelay: '200ms' }}>
            Don't just take our word for it. Here's what our patients have to say about their experience with our ear clinic.
          </p>
        </div>

        <div className="relative reveal" style={{ transitionDelay: '300ms' }}>
          {/* Navigation buttons */}
          <button 
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-clinic-accent hover:text-clinic-primary transition-all md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-clinic-accent hover:text-clinic-primary transition-all md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Testimonial slider */}
          <div 
            ref={sliderRef}
            className="testimonial-slider flex overflow-x-auto gap-6 pb-8 hide-scrollbar"
            style={{ overflowY: 'hidden' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="testimonial-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl p-6 card-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-clinic-accent">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14}
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-clinic-primary w-8' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = sliderRef.current.querySelector('.testimonial-card')?.clientWidth || 0;
                    const scrollPosition = cardWidth * index;
                    sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
