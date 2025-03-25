import React from "react";
import About from "./About/About";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <Service />
    </>
  );
};

export default Home;
