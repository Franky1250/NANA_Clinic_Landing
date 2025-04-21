
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Carousel from "./Carousel";

const HeroLanding = () => {
  // Carousel images
  const carousel1Images = [
    "/images/about-7.jpg",
    "/images/Ear-machine-1.jpg",
    "/images/Ear-machine-5.jpg",
    "/images/Ear-machine-7.jpg",
    "/images/Ear-machine-8.jpg",
  ];
  
  const carousel2Images = [
    "/images/about-4.jpg",
    "/images/about-3.jpg",
    "/images/Ear-machine-10.jpg",
    "/images/Ear-machine-9.jpg",
    "/images/Ear-machine-18.jpg",
    "/images/Ear-machine-17.jpg",
    "/images/Ear-machine-22.jpg",
    "/images/Ear-machine-21.jpg",
  ];
  
  const carousel3Images = [
    "/images/Ear-machine-2.jpg",
    "/images/Ear-machine-4.jpg",
    "/images/Ear-machine-12.jpg",
    "/images/Ear-machine-15.jpg",
  ];

  return (
    <section id="services" className="pt-24 pb-2 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-semibold mb-4 reveal">
            Advanced Hearing Technology
          </span>
          <h1
            className="text-xl md:text-xl lg:text-xl font-bold text-clinic-accent leading-tight reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-clinic-primary">This German Technology </span> <br />
            Hearing Aid Are <span className="relative inline-block">
              <span className="relative z-10">Invisible</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-clinic-muted -z-0"></span>
            </span> & <br />
            Best In Quality
          </h1>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
          {[
            { delay: "100ms", text: "Smartphone Connectivity", icon: <IoMdCheckmarkCircle /> },
            { delay: "200ms", text: "Nearly Invisible Design", icon: <IoMdCheckmarkCircle /> },
            { delay: "300ms", text: "Rechargeable Hearing Machine", icon: <IoMdCheckmarkCircle /> },
            { delay: "400ms", text: "Exchange Offer", icon: <IoMdCheckmarkCircle /> },
            { delay: "500ms", text: "Tiny Invisible Rechargeable", icon: <IoMdCheckmarkCircle /> },
            { delay: "600ms", text: "Premium Sound Quality", icon: <IoMdCheckmarkCircle /> },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 reveal px-4 py-1 rounded-lg hover:bg-white/50 transition-all duration-300"
              style={{ transitionDelay: feature.delay }}
            >
              <div className="w-8 h-8 rounded-full bg-clinic-muted flex items-center justify-center shrink-0 mt-0.5">
                <IoMdCheckmarkCircle className="h-5 w-5 text-clinic-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-clinic-accent">
                  {feature.text}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Carousels Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="reveal" style={{ transitionDelay: "300ms" }}>
            <Carousel autoslideInterval={4000}>
              {carousel1Images.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Hearing aid ${index + 1}`} 
                  className="w-full h-80 object-cover"
                />
              ))}
            </Carousel>
          </div>
          
          <div className="reveal" style={{ transitionDelay: "300ms" }}>
            <Carousel autoslideInterval={4000}>
              {carousel2Images.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Patient care ${index + 1}`} 
                  className="w-full h-80 object-cover"
                />
              ))}
            </Carousel>
          </div>
          
          <div className="reveal" style={{ transitionDelay: "400ms" }}>
            <Carousel autoslideInterval={4000}>
              {carousel3Images.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Clinic image ${index + 1}`} 
                  className="w-full h-80 object-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroLanding;