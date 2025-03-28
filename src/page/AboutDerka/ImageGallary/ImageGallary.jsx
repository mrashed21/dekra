/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Ina_logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/GAVRILOVIC-LOGO38-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/fagron_logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Daikin_logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/chanel-logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/burger-king_logo-2.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/1200px-Vindija_Logo-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/philips-logo-1-2.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/pepco_logo-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Mazda-logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Mask-group4.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Mask-group3.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Mask-group1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Mask-group.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/Logitech_logo-1-1.png",
  "https://dekra-arbeit.hr/wp-content/uploads/2022/04/JTI-logo-1-1.png",
];

const ImageGallary = () => {
  const sliderRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollX(window.scrollY * -0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" py-16 bg-[#eee]">
      {/* image gellary */}
      <div className="overflow-hidden w-full relative py-10">
        <motion.div
          ref={sliderRef}
          className="flex gap-5 cursor-grab"
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          animate={{ x: scrollX }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt="slider"
              className="w-[220px] h-[60px] rounded-lg object-cover opacity-50 mr-10"
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>

        
      </div>
    </div>
  );
};

export default ImageGallary;
