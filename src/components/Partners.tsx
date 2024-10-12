

import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="flex justify-center space-x-8">
        <img
          src="/images/arm.svg"
          alt="ARM Partners"
          className="h-8 md:h-12"
        />
        <img
          src="/images/westernunion.svg"
          alt="Western Union Partners"
          className="h-8 md:h-12"
        />
        <img
          src="/images/techstars.svg"
          alt="Techstars Partners"
          className="h-8 md:h-12"
        />
        <img
          src="/images/ventures.svg"
          alt="Ventures Partners"
          className="h-8 md:h-12"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
