import React from "react";


const RegulationSection: React.FC = () => {
  return (
    <section className="py-10" style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 40%, #f0d8d9 60%, #d9f0ed 100%)" }}>
  <h2 className="md:text-[40px] text-[32px] font-dmSans font-[600] text-center">
    How we are Regulated
  </h2>
  <p className="mt-4 font-dmSans md:text-[16px] text-[13px] leading-[24px] text-[#4A5050] font-[400] md:font-[500] md:w-[504px] w-[289px] text-center md:text-center mx-auto">
    Rise is registered and regulated both in the US and in Nigeria. Our team
    is made up of US registered investment advisers, our Nigerian users are
    covered by our SEC licensed trustees, ARM Trustees and all our assets
    are held with regulated third parties, in all relevant jurisdictions.
  </p>
</section>


  );
};

export default RegulationSection;
