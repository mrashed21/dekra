import React from "react";
import { Helmet } from "react-helmet-async";
import Blog from "./Blog/Blog";
import InfoHero from "./InfoHero/InfoHero";

const InfoCorner = () => {
  return (
    <div>
      <Helmet>
        <title>Info Corner</title>
      </Helmet>
      <InfoHero />
      <Blog />
    </div>
  );
};

export default InfoCorner;
