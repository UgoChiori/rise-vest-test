import React from "react";
import "./herosection.css";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between  py-10 md:py-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute top-[15%] left-[4%] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#A0DDE2] rounded-full bounce-animation mobile-opaque"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-5 right-[1%] w-6 h-6 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#A0DDE2] rounded-full bounce-animation mobile-opaque"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-[5%] right-[35%] w-6 h-6 md:w-12 md:h-12 lg:w-20 lg:h-20 bg-[#A0DDE2] rounded-full bounce-animation mobile-opaque"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[2%] left-[10%] w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#A0DDE2] rounded-full bounce-animation mobile-opaque"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[10%] left-[70%] w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#A0DDE2] rounded-full bounce-animation mobile-opaque"
        aria-hidden="true"
      ></div>

      <div className="w-full md:w-1/2 space-y-6 md:space-y-8 px-6 md:px-0 text-center md:text-left">
        <h1
          id="hero-heading"
          className="w-[359px] md:w-[500px] text-center md:text-left w-full text-[40px] md:text-[48px] lg:text-[56px] font-[600] font-dmSans text-[#07969E] leading-[36px] md:leading-[52px] lg:leading-[64px]"
        >
          Dollar investments that help you grow
          <div className="inline-block relative">
            <div
              className="absolute -right-3 bottom-5 w-2 h-2 bg-[#07969E] rounded-full"
              aria-hidden="true"
            ></div>
          </div>
        </h1>

        <p className="md:w-[450px] w-[300px] text-center md:text-left text-[16px] md:text-[16px] lg:text-[18px] font-[400] leading-[22px] md:leading-[24px] lg:leading-[28px] text-[#4A5050] font-dmSans">
          We put your money in high-quality assets that help you build wealth
          and achieve your financial goals.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <img
            src="/images/appstore.svg"
            alt="Download on the Apple App Store"
            className="h-8 md:h-10 lg:h-12"
          />
          <img
            src="/images/googleplay.svg"
            alt="Download on Google Play"
            className="h-8 md:h-10 lg:h-12"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:pl-28 lg:pl-60 mt-10 md:mt-0">
        <img
          src="/images/heroimage.svg"
          alt="Screenshot of the investment app"
          className="max-w-[240px] md:w-[300px] lg:max-w-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
