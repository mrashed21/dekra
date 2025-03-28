/* eslint-disable no-unused-vars */
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuArrowDownRight } from "react-icons/lu";
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ["Show All"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };
  return (
    <div className="container mx-auto my-20">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-2 w-fit px-4 py-2 text-left bg-[#F2F4F1] text-primary rounded-3xl hover:bg-gray-50 "
      >
        <div className="flex items-center">
          <span>{selectedCategory || "Choose category"}</span>
        </div>
        <LuArrowDownRight
          className={`ml-1 transition-transform duration-300 ${
            isOpen ? "-rotate-90" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-[190px] bg-[#F2F4F1] text-primary py-0 px-4 rounded-xl max-h-60 overflow-auto">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => selectCategory(category)}
              className="px-4 py-2 hover:bg-green-50 cursor-pointer hover:text-green-700 transition-colors"
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      {/* blog post */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* 01 */}
        <div>
          <motion.div
            className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/04/DEKRA-news-header-MSPA.webp"
              alt="image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-115 rounded-2xl"
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group mt-5">
            <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
              <BiSolidRightArrow />
            </span>
            DEKRA renewed its MSPA membership/certificate in 2022
          </h1>
          <p className="text-secondary mt-2 ml-10">
            DEKRA prides itself on its longstanding membership in the MSPA and
            has also renewed its membership this year.
          </p>
        </div>

        {/* 02 */}
        <div>
          <motion.div
            className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/04/DEKRA-News-header-Boom-Box.webp"
              alt="image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-115 rounded-2xl"
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group mt-5">
            <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
              <BiSolidRightArrow />
            </span>
            Boom Box promotion at the WRC
          </h1>
          <p className="text-secondary mt-2 ml-10">
            Due to the size and importance of the event, the WRC stood out as an
            ideal location for the promotion of Boom Box biscuits, a new product
            on the market.
          </p>
        </div>

        {/* 03 */}
        <div>
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
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-115 rounded-2xl"
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group mt-5">
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

        {/* 04 */}
        <div>
          <motion.div
            className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://dekra-arbeit.hr/wp-content/uploads/2022/02/DEKRA-Blog-header-BOREOUT.webp"
              alt="image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-115 rounded-2xl"
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group mt-5">
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
      </div>
    </div>
  );
};

export default Blog;
