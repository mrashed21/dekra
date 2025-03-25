import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 bg-[#EEEEEE]">
      <div className="container mx-auto flex justify-between items-center gap-10">
        {/* Left Side */}
        <div className="space-y-8">
          <h2
            className="font-semibold ml-7 text-primary mb-10"
            data-aos="fade-up"
          >
            FEATURED SERVICES
          </h2>

          <div className="" data-aos="fade-up">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>
                Recruitment and Selection
              </h1>
              <p className="text-secondary mt-2 ml-10">
                Certified psychologists take over the entire recruitment and
                selection process.
              </p>
            </div>
          </div>

          <div className="" data-aos="fade-up">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>{" "}
                Try & Hire
              </h1>
              <p className="text-secondary mt-2 ml-10">
                We provide clients with employees for a temporary period, but
                with long-term employment as a goal.
              </p>
            </div>
          </div>

          <div className="" data-aos="fade-up">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>{" "}
                Organizational Diagnostics
              </h1>
              <p className="text-secondary mt-2 ml-10">
                Determining employee satisfaction, engagement, and motivation,
                and researching your organization's culture.
              </p>
            </div>
          </div>

          <div className="" data-aos="fade-up">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
                <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>
                Mystery Shopping
              </h1>
              <p className="text-secondary ml-10 mt-2">
                Mystery Shopping, Mystery Calling, After Calling, Mystery
                Candidate, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Meeting.webp"
            alt="image"
            className="rounded-4xl"
            data-aos="zoom-in"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
