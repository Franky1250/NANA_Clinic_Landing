
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
            className="text-3xl md:text-3xl lg:text-3xl font-bold text-clinic-accent leading-tight reveal"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          {[
            { delay: "400ms", text: "Smartphone Connectivity", icon: <IoMdCheckmarkCircle /> },
            { delay: "500ms", text: "Nearly Invisible Design", icon: <IoMdCheckmarkCircle /> },
            { delay: "600ms", text: "Rechargeable Hearing Machine", icon: <IoMdCheckmarkCircle /> },
            { delay: "700ms", text: "Exchange Offer", icon: <IoMdCheckmarkCircle /> },
            { delay: "800ms", text: "Tiny Invisible Rechargeable", icon: <IoMdCheckmarkCircle /> },
            { delay: "900ms", text: "Premium Sound Quality", icon: <IoMdCheckmarkCircle /> },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 reveal px-4 py-1 rounded-lg hover:bg-white/50 transition-all duration-300"
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
            <Carousel autoSlide={true} autoslideInterval={4000}>
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
          
          <div className="reveal" style={{ transitionDelay: "600ms" }}>
            <Carousel autoSlide={true} autoslideInterval={5000}>
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
          
          <div className="reveal" style={{ transitionDelay: "900ms" }}>
            <Carousel autoSlide={true} autoslideInterval={6000}>
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

        {/* Process Cards */}
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-clinic-accent mb-16 reveal">
            Hear Better In <span className="text-clinic-primary">3 Easy Step</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1",
                subtitle: "Hearing Test",
                description: "To check your hearing difficulties our Audiologist (Ear Specialists) will check your learning health & will prescribe accordingly to your diagnosis.",
                image: "/images/treating-a-patient.jpg",
                delay: "300ms"
              },
              {
                title: "2",
                subtitle: "Choose suitable Hearing Aids",
                description: "According to your hearing loss, suitable hearing aid will be trial and get fitted.",
                image: "/images/Step-2.jpg",
                delay: "600ms"
              },
              {
                title: "3",
                subtitle: "Regular Fine tuning",
                description: "Frequently check up & sound adjustment will be done for your better hearing without cost for lifetime.",
                image: "/images/Step-3.jpg",
                delay: "900ms"
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card-modern reveal"
                style={{ transitionDelay: card.delay }}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    src={card.image}
                    alt={card.subtitle}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-clinic-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {card.title}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="mb-2 text-xl font-semibold text-clinic-accent">
                    {card.subtitle}
                  </h4>
                  <p className="text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;