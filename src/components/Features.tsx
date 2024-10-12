
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="space-y-4 md:max-w-[432px] max-w-[326px] text-center md:text-left">
              <h3 className="text-[18px] md:text-[32px] font-[600] text-[#2D2D2D] leading-[18px] md:leading-[28px] font-dmSans">
                Invest your money in dollars
              </h3>
              <p className="mt-2 leading-relaxed md:font-[500] md:text-[16px] text-[#4A5050] md:max-w-[318px]">
                By holding your investments in a stable currency, your money
                grows more over time and retains its value better.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold inline-block mt-2"
              >
                Start Investing Now <span className="ml-4 ">&rarr;</span>
              </a>
            </div>
            <div className="md:flex-shrink-0">
              <img
                src="/images/cartoonone.svg"
                alt="Invest your money in dollars"
                className="w-full md:w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:flex-shrink-0">
              <img
                src="/images/cartoontwo.svg"
                alt="Choose what’s best for you"
                className="w-full md:w-auto object-contain"
              />
            </div>
            <div className="space-y-4 md:max-w-[432px] max-w-[326px] text-center md:text-left">
              <h3 className="text-[18px] md:text-[32px] font-[600] text-[#2D2D2D] leading-[18px] md:leading-[28px] font-dmSans">
                Choose what’s best for you
              </h3>
              <p className="font-dmSans max-w-[432px] mt-2 leading-relaxed md:font-[500] md:text-[16px] text-[#4A5050]  ">
                Unlike other platforms, Rise lets you pick between stocks, US
                real estate, and fixed income, according to your risk appetite.
                That way, you can spread your risk and tap into different
                investments all in one place.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold inline-block mt-2"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
          </div>

       
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="space-y-4 md:max-w-[432px] max-w-[326px] text-center md:text-left">
              <h3 className="text-[18px] md:text-[32px] font-[600] text-[#2D2D2D] leading-[18px] md:leading-[28px] font-dmSans">
                Set goals and reach them
              </h3>
              <p className="mt-2 leading-relaxed md:font-[500] md:text-[16px] text-[#4A5050]">
                You can invest towards a goal on Rise—retirement, higher
                education, saving for your home or travel budgets. Or create a
                goal of your own and invest periodically to achieve them.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold inline-block mt-2"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
            <div className="md:flex-shrink-0">
              <img
                src="/images/cartoonthree.svg"
                alt="Set goals and reach them"
                className="w-full md:w-auto object-contain"
              />
            </div>
          </div>

       
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:flex-shrink-0">
              <img
                src="/images/cartoonfour.svg"
                alt="We remember so you don’t have to"
                className="w-full md:w-auto object-contain"
              />
            </div>
            <div className="space-y-4 md:max-w-[432px] max-w-[326px] text-center md:text-left">
              <h3 className="text-[18px] md:text-[32px] font-[600] text-[#2D2D2D] leading-[18px] md:leading-[28px] font-dmSans">
                We remember so you don’t have to
              </h3>
              <p className="mt-2 leading-relaxed md:font-[500] md:text-[16px] text-[#4A5050]">
                Our Auto-invest feature makes it easy to stay consistent, even
                when you forget. Set a funding amount, frequency, and payment
                method, and Rise will automatically fund your investment on
                schedule.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold inline-block mt-2"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

