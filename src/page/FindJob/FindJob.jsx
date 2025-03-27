import React from "react";
import Info from "../Home/Info/Info";
import AgencyTust from "./AgencyTust/AgencyTust";
import Faq from "./FAQ/Faq";
import FindHero from "./FIndHero/FindHero";
import Offer from "./Offer/Offer";
import OpenPositions from "./OpenPositions/OpenPositions";
import Testimonial from "./Testimonial/Testimonial";

const FindJob = () => {
  return (
    <div>
      <FindHero />
      <Offer />
      <AgencyTust />
      <OpenPositions />
      <Testimonial />
      <Faq />
      <Info />
    </div>
  );
};

export default FindJob;
