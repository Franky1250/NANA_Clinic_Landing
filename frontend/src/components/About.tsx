import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const images = [
    '/images/about-1.jpg',
    '/images/about-2.jpg',
    '/images/about-3.1.jpg',
    '/images/about-3.jpg',
    '/images/about-4.jpg',
    '/images/about-6.jpg',
    '/images/about-7.jpg',
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
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
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden card-shadow">
              <img
                src={images[currentImageIndex]}
                alt="Sliding images"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-white p-5 rounded-xl card-shadow w-48 animate-float">
              <div className="flex flex-col items-center">
                <div className="text-clinic-primary text-3xl font-bold">
                  100%
                </div>
                <div className="text-center text-sm text-gray-600 mt-1">
                  Patient Satisfaction Rate
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-clinic-primary text-white p-5 rounded-xl shadow-lg">
              <div className="font-bold text-2xl">7+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">
              About Our Clinic
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-clinic-accent reveal"
              style={{ transitionDelay: "100ms" }}
            >
              Your <span className="text-clinic-primary">Trusted Partner</span>{" "}
              in Ear Healthcare & Speech / Voice Care
            </h2>
            <p
              className="text-gray-600 reveal"
              style={{ transitionDelay: "200ms" }}
            >
              Founded in 2018, our ear clinic has been at the forefront of
              audiological care, combining cutting-edge technology with
              compassionate service. Our team of specialists is dedicated to
              improving your quality of life through better hearing.
            </p>
            <p
              className="text-gray-600 reveal"
              style={{ transitionDelay: "300ms" }}
            >
              We believe in personalized care that addresses your unique needs.
              From comprehensive diagnostics to tailored treatment plans, we're
              with you at every step of your hearing health journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div
                className="flex items-start space-x-3 reveal"
                style={{ transitionDelay: "400ms" }}
              >
                <div className="w-6 h-6 rounded-full bg-clinic-muted flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-clinic-primary"
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
                  <h4 className="font-semibold text-clinic-accent">
                    Experienced Specialists
                  </h4>
                  <p className="text-sm text-gray-600">
                    Board-certified audiologists
                  </p>
                </div>
              </div>
              <div
                className="flex items-start space-x-3 reveal"
                style={{ transitionDelay: "500ms" }}
              >
                <div className="w-6 h-6 rounded-full bg-clinic-muted flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-clinic-primary"
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
                  <h4 className="font-semibold text-clinic-accent">
                    Advanced Technology
                  </h4>
                  <p className="text-sm text-gray-600">
                    Latest cutting edge technology
                  </p>
                </div>
              </div>
              <div
                className="flex items-start space-x-3 reveal"
                style={{ transitionDelay: "600ms" }}
              >
                <div className="w-6 h-6 rounded-full bg-clinic-muted flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-clinic-primary"
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
                  <h4 className="font-semibold text-clinic-accent">
                    Patient-Centered Care
                  </h4>
                  <p className="text-sm text-gray-600">
                    Compassionate approach
                  </p>
                </div>
              </div>
              <div
                className="flex items-start space-x-3 reveal"
                style={{ transitionDelay: "700ms" }}
              >
                <div className="w-6 h-6 rounded-full bg-clinic-muted flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-clinic-primary"
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
                  <h4 className="font-semibold text-clinic-accent">
                    Ongoing Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lifetime service commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
