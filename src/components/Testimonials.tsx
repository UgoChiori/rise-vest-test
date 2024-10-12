import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center flex flex-col items-center mx-auto">
       
        <h2 className="text-center md:text-[40px] text-[32px] md:font-[600] mb-4 font-dmSans leading-[28px] text-[#40BBC3] w-[294px] md:w-[547px]">
          <span className="block md:hidden">What our customers are saying</span>
          <span className="hidden md:block">From The People Who Use Rise</span> 
        </h2>

       
        <p className="w-full md:w-[502px] mb-8 font-dmSans md:font-[500] md:text-[18px] md:leading-[23px] text-[#4A5050] text-center">
          <span className="block md:hidden">
            We serve over 80,000 amazing users.
          </span> 
          <span className="hidden md:block">
            Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.
          </span> 
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {[
          {
            name: "Lade",
            image: "/images/user2.svg",
            quote:
              "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
          },
          {
            name: "Jesse",
            image: "/images/user2.svg",
            quote:
              "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
          },
          {
            name: "Raye",
            image: "/images/user1.svg",
            quote:
              "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
          },
        ].map((user, index) => (
          <div
            key={user.name}
            className={`w-full md:w-auto p-6 shadow-md rounded-[10px] bg-white mb-6 text-center md:text-left ${
              index === 0 ? "block" : "hidden md:block"
            }`}
          >
            <p className="font-[200] md:font-[400] md:text-[16px] text-[#4A5050] font-dmSans">
              {user.quote}
            </p>
            <div className="flex flex-col md:flex-row items-center mt-10">
              <img
                src={user.image}
                alt={user.name}
                className="w-[32px] h-32 rounded-full mb-4 md:mb-0 md:mr-4"
              />
              <h3 className="font-bold text-[18px] text-[#2D2D2D]">{user.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
