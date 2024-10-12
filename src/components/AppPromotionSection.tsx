import React from "react";

const AppPromotionSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center h-auto h-[394px] py-16 md:py-24 bg-[#ECFEFE] text-center rounded-[30px] md:rounded-[50px] px-6 md:px-16 overflow-hidden">
      <div className="md:w-1/2 md:text-left z-10">
        <h2 className="text-[#07969E] text-[14px] md:text-[16px] font-medium mb-2 md:mb-4">
          Download the Rise App
        </h2>
        <p className="w-[320px] md:w-[500px] text-[20px] md:text-[32px] font-[600] text-[#2D2D2D] mb-4 md:mb-6 font-dmSans ">
          Join our 100,000 users investing and setting long term goals!
        </p>
        <p className="text-[#2D2D2D] mb-4 md:mb-8 text-[14px] md:text-[16px] font-dmSans">
          Dollar investments that help you grow.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://risevest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/appstore.svg"
              alt="App Store"
              className="w-[130px] md:w-[180px]"
            />
          </a>
          <a
            href="https://risevest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/googleplay.svg"
              alt="Google Play"
              className="w-[130px] md:w-[180px]"
            />
          </a>
        </div>
      </div>

      <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center z-0">
        <img
          src="/images/heroimage.svg"
          alt="Phone"
          className="w-[180px] md:w-[250px] object-contain relative md:absolute md:top-[-150px]"
        />
      </div>
    </section>
  );
};

export default AppPromotionSection;
