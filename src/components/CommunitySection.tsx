import React from "react";

const CommunitySection: React.FC = () => {
  return (
    <section className="flex flex-col py-20 justify-center items-center text-center">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full max-w-6xl md:space-x-16 md:space-x-reverse">
        <div className="md:w-1/2 md:ml-16">
          <img
            src="/images/community.svg"
            alt="Community"
            className="mx-auto md:mx-0 mt-8 md:mt-0"
          />
        </div>

        <div className="md:w-1/2 md:text-left md:pr-16">
          <h2 className="md:text-[40px] text-[32px] font-dmSans font-[600] mb-4 mt-4">
            Join The Rise Community
          </h2>
          <p className="text-[#2D2D2D] md:w-[478px] mb-4 md:text-[16px] font-dmSans">
            If you want to go far, go together. Our Telegram community surrounds
            you with others who can help you along your financial journey with
            tips, support, advice and learning. It's completely free and open to
            new and seasoned investors.
          </p>
          <button className="px-6 py-3 bg-[#A0DDE2] text-[#2D2D2D] rounded-[5px] md:text-[16px] font-[600] font-dmSans mb-8 mt-8">
            Join our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
