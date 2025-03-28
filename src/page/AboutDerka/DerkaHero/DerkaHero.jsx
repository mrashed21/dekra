/* eslint-disable no-unused-vars */

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const DerkaHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      <div className='bg-[url("https://dekra-arbeit.hr/wp-content/themes/dekra/static/images/decor-dark.webp")]  bg-center bg-no-repeat bg-cover text-white pt-20'>
        <div className="container mx-auto py-5 px-5 lg:px-0">
          <h2 className="tracking-widest font-semibold" data-aos="fade-up">
            ABOUT DEKRA
          </h2>
          <h1
            className="text-3xl lg:text-5xl font-extrabold mt-5 pb-5 lg:w-[55%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Creating a world where employment means building trust and
            cooperation between employer and employee.
          </h1>
          <div
            className="border-b border-2 pl-5 lg:pl-0 border-primary w-[220px]"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </div>

      <div className="bg-[#007D40] py-32"></div>
      <div className="bg-[#eee]">
        <div className="relative mb-42 lg:mb-96 flex justify-center">
          <div className="w-[600px] lg:w-[1000px] mx-auto absolute -top-32 lg:-top-52 px-5 lg:px-0">
            <motion.img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover.webp"
              alt="image"
              className="w-full rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <div className="container mx-auto pb-20 px-5 lg:pb-0">
          <h1
            className="text-2xl lg:text-4xl font-extrabold text-primary mt-5 pb-5 lg:w-[75%]"
            data-aos="fade-up"
          >
            Maintaining the human side of work. We nurture
            <span className="text-secondary">
              {" "}
              a personal, human approach in employment{" "}
            </span>
            and use it to connect people and business.
          </h1>
          <div
            className="border-b border-2 pl-5 lg:pl-0 border-primary w-[220px]"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DerkaHero;
