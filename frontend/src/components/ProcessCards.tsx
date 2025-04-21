import React from "react";

const ProcessCards = () => {
  return (
    <div>
      {/* Process Cards */}
      <div className="mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-clinic-accent mb-16 reveal">
          Hear Better In{" "}
          <span className="text-clinic-primary">3 Easy Step</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1",
              subtitle: "Hearing Test",
              description:
                "To check your hearing difficulties our Audiologist (Ear Specialists) will check your hearing health & will prescribe accordingly to your diagnosis.",
              image: "/images/treating-a-patient.jpg",
              delay: "200ms",
            },
            {
              title: "2",
              subtitle: "Choose suitable Hearing Aids",
              description:
                "According to your hearing loss, suitable hearing aid will be trial and get fitted.",
              image: "/images/Step-2.jpg",
              delay: "200ms",
            },
            {
              title: "3",
              subtitle: "Regular Fine tuning",
              description:
                "Frequently check up & sound adjustment will be done for your better hearing without cost for lifetime.",
              image: "/images/Step-3.jpg",
              delay: "200ms",
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
                <p className="text-slate-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCards;
