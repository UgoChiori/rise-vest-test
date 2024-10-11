import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SaveFuture from './components/SaveFuture';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PartnersSection from './components/Partners';
import AssetClasses from './components/AssetClasses';
import RegulationSection from './components/RegulationSection';
import CommunitySection from './components/CommunitySection';
import AppPromotionSection from './components/AppPromotionSection';
import Features from './components/Features';

const App:React.FC = () => {
  return (
    <div className="px-4 md:px-[120px]">
      <Header />
      <Hero />
      <PartnersSection/>
      <Features />
    
      <AssetClasses/>
      <SaveFuture />
      <RegulationSection />
      <Testimonials />
      <CommunitySection />
      <AppPromotionSection />
      <Footer />
    </div>
  );
};

export default App;
