import React from "react";

const AssetClasses: React.FC = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-8">
        <h2 className="text-center text-3xl font-bold">Asset Classes</h2>
        <p className="text-center">
          It’s your money, choose where you invest it
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Stocks",
            description: `We help you invest and manage your money by investing in our portfolio 
                          of 30 high-growth stocks across the US market with our equity portfolio 
                          of power stocks. Historical returns: 14% per annum Risk Level: Medium`,
            link: "#",
            image: "/path/to/stocks.png",
          },
          {
            name: "Real Estate",
            description: `Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.Historical returns: 14% per annum
Risk Level: Medium`,
            link: "#",
            image: "/path/to/real-estate.png",
          },
          {
            name: "Fixed Income",
            description: `A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.
Historical returns: 14% per annum
Risk Level: Medium`,
            link: "#",
            image: "/path/to/fixed-income.png",
          },
        ].map((asset, index) => (
          <div
            key={index}
            className="text-center p-4 border rounded-lg bg-white"
          >
            <img src={asset.image} alt={asset.name} className="mx-auto h-24" />
            <h3 className="text-2xl font-bold mt-4">{asset.name}</h3>
            <p>{asset.description}</p>
            <a href={asset.link} className="text-blue-500 underline">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetClasses;
