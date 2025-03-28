import React from "react";
import CompanyCounters from "./CountUp/CountUp";
import DerkaHero from "./DerkaHero/DerkaHero";
import DerkaService from "./DerkaService/DerkaService";
import ImageGallary from "./ImageGallary/ImageGallary";
import OurTeam from "./OurTeam/OurTeam";

const AboutDerka = () => {
  return (
    <div>
      <DerkaHero />
      <OurTeam />
      <CompanyCounters />
      <DerkaService />
      <ImageGallary />
    </div>
  );
};

export default AboutDerka;
