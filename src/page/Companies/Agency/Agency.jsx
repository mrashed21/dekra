/* eslint-disable no-unused-vars */

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Agency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
        {/* Left Side */}
        <motion.div
          className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl w-full lg:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-slika-1.webp"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-115 rounded-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 ">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 px-5 lg:px-0">
                <div>
                  <h2 className="tracking-widest ml-10 text-xl font-semibold mb-10">
                    For Agencies
                  </h2>
                  <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                    <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                      <BiSolidRightArrow />
                    </span>
                    Different options of hiring-out workers under a fixed-term
                    period.
                  </h1>
                  <p className="text-secondary mt-2 ml-10">
                    Find out why so many renowned companies in the region choose
                    DEKRA for selecting and providing workers, year after year.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <hr className="mt-48 border-[#eee] border border-b-2" />
        </div>
      </div>

      {/* 2nd */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
        {/* Left Side */}
        <motion.div
          className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl w-full lg:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-HR.webp"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-115 rounded-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <div className=" w-full lg:w-2/3">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 px-5 lg:px-0">
                <div>
                  <h2 className="tracking-widest ml-10 text-xl font-semibold mb-10">
                    HR CONSULTING
                  </h2>
                  <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                    <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                      <BiSolidRightArrow />
                    </span>
                    Consultancy services and solutions from the field of human
                    resources
                  </h1>
                  <p className="text-secondary mt-2 ml-10">
                    From finding and evaluating candidates to researching the
                    organizational climate and salaries — our HR services cover
                    everything you need in the field of human resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <hr className="mt-48 border-[#eee] border border-b-2" />
        </div>
      </div>
      {/* 3rd */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
        {/* Left Side */}
        <motion.div
          className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl w-full lg:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-ELS.webp"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-115 rounded-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <div className=" w-full lg:w-2/3">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 px-5 lg:px-0">
                <div>
                  <h2 className="tracking-widest ml-10 text-xl font-semibold mb-10">
                    EVENT & LOGISTIC SERVICES
                  </h2>
                  <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                    <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                      <BiSolidRightArrow />
                    </span>
                    Event management, promotion and mystery shopping.
                  </h1>
                  <p className="text-secondary mt-2 ml-10">
                    Find out about our event management services, promotion
                    processes or market research.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <hr className="mt-48 border-[#eee] border border-b-2" />
        </div>
      </div>
    </div>
  );
};

export default Agency;
