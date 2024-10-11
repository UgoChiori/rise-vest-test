import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
  
          <div className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <div>
              <h3 className="text-lg md:font-[600] ">
                Invest your money in dollars
              </h3>
              <p className="text-gray-600 mt-2">
                By holding your investments in a stable currency, your money
                grows more over time and retains its value better.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold mt-2 inline-block"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
            <img
              src="/images/cartoonone.svg"
              alt="Invest your money in dollars"
              className="w-full md:w-auto"
            />
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <img
              src="/images/cartoontwo.svg"
              alt="Choose what’s best for you"
              className="w-full md:w-auto"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Choose what’s best for you
              </h3>
              <p className="text-gray-600 mt-2">
                Unlike other platforms, Rise lets you pick between stocks, US
                real estate, and fixed income, according to your risk appetite.
                That way, you can spread your risk and tap into different
                investments all in one place.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold mt-2 inline-block"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <div>
              <h3 className="text-lg font-semibold">
                Set goals and reach them
              </h3>
              <p className="text-gray-600 mt-2">
                You can invest towards a goal on Rise—retirement, higher
                education, saving for your home or travel budgets. Or create a
                goal of your own and invest periodically to achieve them.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold mt-2 inline-block"
              >
                Start Investing Now <span className="ml-4">&rarr;</span>
              </a>
            </div>
            <img
              src="/images/cartoonthree.svg"
              alt="Set goals and reach them"
              className="w-full md:w-auto"
            />
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <img
              src="/images/cartoonfour.svg"
              alt="We remember so you don’t have to"
              className="w-full md:w-auto"
            />
            <div>
              <h3 className="text-lg font-semibold">
                We remember so you don’t have to
              </h3>
              <p className="text-gray-600 mt-2">
                Our Auto-invest feature makes it easy to stay consistent, even
                when you forget. Set a funding amount, frequency, and payment
                method, and Rise will automatically fund your investment on
                schedule.
              </p>
              <a
                href="#"
                className="text-teal-500 font-semibold mt-2 inline-block"
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
