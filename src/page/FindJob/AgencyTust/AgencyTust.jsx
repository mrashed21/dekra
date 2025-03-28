/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AgencyTust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl font-extrabold text-primary ml-5 " data-aos="fade-left">
          An agency <br /> you can trust
        </h1>
        <div className="border-b border-2 border-primary mt-10 w-[220px] ml-5" data-aos="fade-left"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 px-5 lg:px-0 mb-10 lg:mb-0">
          <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-2xl font-bold text-primary">
              1. <br />
              No fictitious fees and extra charges
            </h1>
            <p>
              Your money is your money — we don’t take any percentage from the
              amount you earn, respecting all rules defined by the Labour Law.
            </p>
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-2xl font-bold text-primary">
              2. <br />
              Reliable payment
            </h1>
            <p>
              We guarantee you will get paid in the mutually agreed timeframe.
            </p>
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="600">
            <h1 className="text-2xl font-bold text-primary">
              3. <br />
              Balance between flexibility and stability
            </h1>
            <p>
              Your money is your money — we don’t take any percentage from the
              amount you earn, respecting all rules defined by the Labour Law.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgencyTust;
