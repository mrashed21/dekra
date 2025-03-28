import React from "react";
import { Helmet } from "react-helmet-async";
import CompanyCounters from "./CountUp/CountUp";
import DerkaHero from "./DerkaHero/DerkaHero";
import DerkaService from "./DerkaService/DerkaService";
import ImageGallary from "./ImageGallary/ImageGallary";
import OurTeam from "./OurTeam/OurTeam";

const AboutDerka = () => {
  return (
    <div>
      <Helmet>
        <title>About Derka</title>
      </Helmet>
      <DerkaHero />
      <OurTeam />
      <CompanyCounters />
      <DerkaService />
      <ImageGallary />
    </div>
  );
};

export default AboutDerka;
