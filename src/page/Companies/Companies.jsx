import React from "react";
import Agency from "./Agency/Agency";
import CompaniesHero from "./CompaniesHero/CompaniesHero";
import CompanyAbout from "./CompanyAbout/CompanyAbout";

const Companies = () => {
  return (
    <div>
      <CompaniesHero />
      <Agency />
      <CompanyAbout />
    </div>
  );
};

export default Companies;
