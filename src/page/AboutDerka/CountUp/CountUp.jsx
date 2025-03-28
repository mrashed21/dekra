/* eslint-disable no-unused-vars */

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterItem = ({ end, text, suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldCount(false);
      setTimeout(() => setShouldCount(true), 100);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-primary">
          {shouldCount && (
            <CountUp
              start={0}
              end={end}
              duration={2}
              suffix={suffix}
              separator=""
            />
          )}
        </h2>
        <p className="mt-2 text-sm text-primary">{text}</p>
      </div>
    </motion.div>
  );
};

const CompanyCounters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between container mx-auto px-4 py-12">
      <CounterItem
        end={1925}
        text="We are a part of DEKRA SE, established in 1925."
      />
      <CounterItem
        end={47000}
        suffix="+"
        text="DEKRA SE employs more than 47,000 people in over 50 countries."
      />
      <CounterItem
        end={2003}
        text="As part of the DEKRA Arbeit group, we have been doing business since 2003."
      />
    </div>
  );
};

export default CompanyCounters;
