/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Offer = () => {
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
        <div className="flex justify-between gap-10 my-20">
          {/* left-side */}
          <div data-aos="fade-right">
            <h2 className="text-2xl text-primary font-extrabold ml-20 w-full lg:w-2/3">
              We offer candidates a huge database of potential employers and open
              job positions, meaning everyone gets{" "}
              <span className="text-secondary">to find work that truly fits them.</span>
            </h2>
          </div>

          {/* right side */}
          <div className="w-full lg:w-1/3" data-aos="fade-left">
            <div className="w-60 h-0.5 bg-primary"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offer;
