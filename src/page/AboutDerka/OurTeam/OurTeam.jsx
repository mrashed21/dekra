/* eslint-disable no-unused-vars */

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-10 my-10 px-5 lg:px-0">
        {/* left-side */}
        <div className="w-full lg:w-1/4">
          <h3
            className="tracking-widest font-semibold text-primary sticky top-10"
            data-aos="fade-up"
          >
            OUR TEAM
          </h3>
        </div>
        {/* right-side */}
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          {/* 01 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            data-aos="fade-up"
          >
            <motion.img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Daniele-Divjanovic.webp"
              alt="image"
              className="rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div>
              <h2 className="text-3xl text-primary font-bold">
                Daniele Divjanović
              </h2>
              <p className="mt-5 text-lg tracking-widest text-primary">
                President of the Management Board
              </p>
              <div className="border-b border-2 pl-5 lg:pl-0 border-primary my-5 w-[220px]"></div>
              <FaQuoteLeft className="text-primary text-2xl mb-3" />
              <p className="text-lg text-primary leading-5">
                We started our business in Croatia as the first international
                subsidiary of DEKRA Arbeit in 2003. We can rightly say that we
                have built a strong brand locally and regionally in the area of
                agency work, recruitment and selection service, event
                management, promotion and market research. We are proud of our
                entire regional internal team, long-standing customer
                relationships and the trust of the workers who work with us.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            data-aos="fade-up"
          >
            <motion.img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Ivan-Talian.webp"
              alt="image"
              className="rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div>
              <h2 className="text-3xl text-primary font-bold">Ivan Talian</h2>
              <p className="mt-5 text-lg tracking-widest text-primary">
                Executive director of agency work in Croatia and SEE region
              </p>
              <div className="border-b border-2 pl-5 lg:pl-0 border-primary my-5 w-[220px]"></div>
              <FaQuoteLeft className="text-primary text-2xl mb-3" />
              <p className="text-lg text-primary leading-5">
                The key of our business is continuously adapting to new
                challenges, but our goal at DEKRA stays the same — provide our
                clients with tailor-made services! Our agency team monitors all
                innovations and legal provisions throughout the SEE region in
                order to provide your business with the best possible support.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            data-aos="fade-up"
          >
            <motion.img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/IMG_1435-FINAL-copy-1.webp"
              alt="image"
              className="rounded-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div>
              <h2 className="text-3xl text-primary font-bold">
                Darija Jakovljević
              </h2>
              <p className="mt-5 text-lg tracking-widest text-primary">
                Executive director of human resources and market research
              </p>
              <div className="border-b border-2 pl-5 lg:pl-0 border-primary my-5 w-[220px]"></div>
              <FaQuoteLeft className="text-primary text-2xl mb-3" />
              <p className="text-lg text-primary leading-5">
                At DEKRA, we place great emphasis on expertise and education,
                and therefore our team consists of professional psychologists
                and certified experts. With the accumulated experience in
                working with numerous companies in Croatia and the region, we
                can offer you advice and know-how and guide your team towards
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b-[1px] border-secondary mt-20 mb-10" />
    </div>
  );
};

export default OurTeam;
