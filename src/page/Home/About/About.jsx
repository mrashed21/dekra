/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="">
        <h1
          className="text-3xl pl-5 lg:pl-0 lg:text-6xl font-extrabold text-primary "
          // data-aos="fade-up"
        >
          Why DEKRA?
        </h1>
        <div className="border-b border-2 pl-5 lg:pl-0 border-primary mt-10 w-[220px]"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-10">
        {/* left side */}
        <div data-aos="fade-right " className="px-5 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Homepage-Usluge.webp"
              alt="image"
              className="rounded-4xl"
            />
          </motion.div>
        </div>
        {/* right side */}
        <div data-aos="fade-left" className="px-5 lg:px-0">
          <motion.div className="mb-10" data-aos="fade-up">
            <h1 className="text-3xl font-extrabold text-primary flex">
              <h1 className="mr-5"> 1.</h1> More than 18 years of experience
            </h1>
            <p className="mt-5 pl-14">
              We have been on the Croatian market since 2003, and over the years
              we have established ourselves as exceptional experts with
              specialist knowledge and tools.
            </p>
          </motion.div>
          <motion.div className="mb-10" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-3xl font-extrabold text-primary flex">
              <h1 className="mr-5"> 2.</h1> 7 offices in Croatia
            </h1>
            <p className="mt-5 pl-14">
              In addition to Zagreb, we have offices in Osijek, Slavonski Brod,
              Pula, Rijeka, Zadar and Split.
            </p>
          </motion.div>
          <motion.div className="mb-10" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-3xl font-extrabold text-primary flex">
              <h1 className="mr-5"> 3.</h1> Reliability, speed and
              responsibility
            </h1>
            <p className="mt-5 pl-14">
              In DEKRA, we are equally committed to our Client companies and
              candidates we employ.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <button className="bg-primary py-3 px-20 rounded-4xl font-semibold hover:bg-[#71b0a6ef] transition-all ease-in-out">
              About us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
