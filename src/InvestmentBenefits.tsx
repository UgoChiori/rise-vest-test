import React from 'react';

const InvestmentBenefits:React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center space-x-8">
          <img src="/path/to/invest-image.png" alt="Invest" className="w-1/2" />
          <div className="w-1/2">

          
            <h2 className="text-3xl font-bold">Invest your money in dollars</h2>
            <p>By holding your investments in a stable currency, you protect yourself from devaluation and get strong returns.</p>
            <a href="#" className="text-blue-500 underline">Start investing now</a>
          </div>
        </div>
        {/* Repeat for other benefits */}
      </div>
    </section>
  );
};

export default InvestmentBenefits;