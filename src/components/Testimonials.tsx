import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">
        From The People Who Use Rise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Lade",
            quote:
              "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
          },
          {
            name: "Jesse",
            quote:
              "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
          },
          {
            name: "Raye",
            quote:
              "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
          },
        ].map((user) => (
          <div className="p-4  text-[#4A5050] shadow-md font-[200] text-[16px]">
            <p>"{user.quote}"</p>
            <h3 className="mt-4 font-bold">{user.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
