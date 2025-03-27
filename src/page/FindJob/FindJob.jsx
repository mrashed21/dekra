import React from "react";
import AgencyTust from "./AgencyTust/AgencyTust";
import FindHero from "./FIndHero/FindHero";
import Offer from "./Offer/Offer";
import OpenPositions from "./OpenPositions/OpenPositions";

const FindJob = () => {
  return (
    <div>
      <FindHero />
      <Offer />
      <AgencyTust />
      <OpenPositions />
    </div>
  );
};

export default FindJob;
