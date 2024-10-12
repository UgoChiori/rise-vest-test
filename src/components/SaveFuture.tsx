import React from "react";

const SaveFuture: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-10 md:gap-x-20">
     
      <div className="relative w-full md:w-1/2 mb-8 md:mb-0 flex md:items-start justify-center">
        <div className="w-[400px] h-[550px] lg:w-[450px] lg:h-[650px] relative">
          <img
            src="/images/phone.svg"
            alt="Phone"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute top-[25%] left-6 right-6">
            <img
              src="/images/buildwealth.svg"
              alt="Build Wealth"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 text-left px-4 sm:px-6 md:px-0">
        <h2 className="text-lg md:text-[18px] font-[500] text-[#2D2D2D] font-dmSans">
          The Rise App
        </h2>
        <h1 className="text-3xl md:text-[40px] font-[600px] text-[#2D2D2D] mb-4">
          Save for your <span className="text-purple-600">future</span>
        </h1>
        <p className="text-[#2D2D2D] font-[400] font-dmSans text-[16px] mb-6 max-w-[400px]">
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children's future, and more.
        </p>
        <button className="px-6 py-3 bg-[#07969E] text-white rounded-lg text-lg font-[700] font-dmSans shadow">
          Start Saving
        </button>
      </div>
    </section>
  );
};

export default SaveFuture;