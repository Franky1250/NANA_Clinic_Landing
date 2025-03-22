import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const images = [
    '/images/Ear-machine-1.jpg',
    '/images/Ear-machine-2.jpg',
    '/images/Ear-machine-3.jpg',
    '/images/Ear-machine-4.jpg',
    '/images/Ear-machine-5.jpg',
    '/images/Ear-machine-7.jpg',
    '/images/Ear-machine-8.jpg',
    '/images/Ear-machine-9.jpg',
    '/images/Ear-machine-10.jpg',
    '/images/Ear-machine-11.jpg',
    '/images/Ear-machine-12.jpg',
    '/images/Ear-machine-13.jpg',
    '/images/Ear-machine-14.jpg',
    '/images/Ear-machine-15.jpg',
    '/images/Ear-machine-19.jpg',
    '/images/Ear-machine-17.jpg',
    '/images/Ear-machine-18.jpg',
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-clinic-secondary to-white"
      ref={heroRef}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-clinic-primary opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-clinic-primary opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-lg">
              <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">
                Your Hearing Health Specialists
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-accent reveal"
                style={{ transitionDelay: "100ms" }}
              >
                Exceptional{" "}
                <span className="text-clinic-primary">Hearing Care</span> For
                Everyone
              </h1>
              <p
                className="text-lg text-gray-600 reveal"
                style={{ transitionDelay: "200ms" }}
              >
                State-of-the-art diagnostics and personalized treatments for all
                ear conditions. Our expert audiologists are dedicated to
                improving your hearing health.
              </p>
              <div
                className="flex flex-wrap gap-4 pt-2 reveal"
                style={{ transitionDelay: "300ms" }}
              >
                <a href="#appointment" className="button-primary">
                  Book Appointment
                </a>
                <a href="#services" className="button-secondary">
                  Our Services
                </a>
              </div>

              <div
                className="flex items-center space-x-8 pt-4 reveal"
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center">
                  <div className="text-clinic-primary text-4xl font-bold">
                    7+
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-clinic-primary text-4xl font-bold">
                    3k+
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    Happy
                    <br />
                    Patients
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-clinic-primary text-4xl font-bold">
                    100%
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    Success
                    <br />
                    Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="order-1 md:order-2 flex justify-center reveal"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-clinic-primary rounded-full opacity-10 absolute top-4 left-4"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden card-shadow relative bg-white">
                <img
                  src={images[currentImageIndex]}
                  alt="Sliding images"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg card-shadow animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Certified Specialists
                    </p>
                    <p className="text-xs text-gray-500">Top ear doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
