import React from "react";

const AssetClasses: React.FC = () => {
  return (
    <section className="py-20">
   
      <div className="text-center mb-8 flex flex-col items-center mx-auto">
        <h2 className="text-center text-[32px] md:font-[600] md:text-[40px] font-dmSans">Asset Classes</h2>
        <p className="text-[18px] font-[500] md:font-[400] md:text-[20px] font-dmSans leading-[23px] w-[259px] md:w-[411px]">It’s your money, choose where you invest it</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        {[
          {
            name: "Stocks",
            image: "/images/stocks.svg",  
          },
          {
            name: "Real Estate",
            image: "/images/realestate.svg",  
          },
          {
            name: "Fixed Income",
            image: "/images/fixedincome.svg", 
          },
        ].map((asset, index) => (
          <div
            key={index}
            className="text-center cursor-pointer p-4  "
          >
          
            <img 
              src={asset.image} 
              alt={asset.name} 
              className="mx-auto" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetClasses;
