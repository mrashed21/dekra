import React from "react";
import { Helmet } from "react-helmet-async";
import Agency from "./Agency/Agency";
import CompaniesHero from "./CompaniesHero/CompaniesHero";
import CompanyAbout from "./CompanyAbout/CompanyAbout";
import News from "./News/News";
const Companies = () => {
  return (
    <div>
      <Helmet>
        <title>DEKRA Services For Companies</title>
      </Helmet>
      <CompaniesHero />
      <Agency />
      <CompanyAbout />
      <News />
    </div>
  );
};

export default Companies;
