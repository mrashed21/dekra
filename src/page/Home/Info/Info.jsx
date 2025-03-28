/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-16 px-5 lg:px-0">
      <h2 className="tracking-wider font-semibold" data-aos="fade-up">
        INFO CORNER
      </h2>
      <hr className="mt-3 border-[#eee] border border-b-2" data-aos="fade-up" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
        {/* Left Side */}
        <motion.div
          className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/03/DEKRA-Blog-header-Nauc%CC%8Cite-kako-biti-samouvjereni.webp"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-125 rounded-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-start gap-4 px-5 lg:px-0">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>
                Learn how to be confident in online meetings
              </h1>
              <p className="text-secondary mt-2 ml-10">
                Most of us have recently digitized our way of doing business and
                started new work principles. Online meetings were one of many
                changes that have occurred in the workplace.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="my-10 border-[#eee] border border-b-2" />

      <motion.div
        className="flex items-start gap-4 w-full lg:w-1/3 cursor-pointer px-5 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
            <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
              <BiSolidRightArrow />
            </span>
            What is boreout and how to deal with it?
          </h1>
          <p className="text-secondary mt-2 ml-10">
            Although it sounds similar to the term burnout, the boreout still
            receives much less attention, but it is encountered daily by many
            employees. You may have faced it too, without even knowing it.
          </p>
        </div>
      </motion.div>
      <hr className="my-10 border-[#eee] border border-b-2" />
    </div>
  );
};

export default Info;
