import React from 'react';

const AppPromotionSection:React.FC = () => {
  return (
    <section className="py-20 bg-[#ECFEFE] text-center rounded-[50px]">
      <h2 className="md:text-[16px] text-[#07969E] font-[500] ">Download the Rise App</h2>
      <p className="md:text-[32px] text-[20px] font-[600] ">Join our 100,000 users investing and setting long-term goals!</p>
      <p>Dollar investments that help you grow.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <img src="/images/appstore.svg" alt="App Store" />
        <img src="/images/googleplay.svg" alt="Google Play" />
        {/* <a href="#" className="bg-black text-white px-4 py-2 rounded-lg">App Store</a>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-lg">Google Play</a> */}
      </div>
    </section>
  );
};

export default AppPromotionSection;