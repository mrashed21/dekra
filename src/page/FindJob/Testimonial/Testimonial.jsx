/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    quote:
      "Being hired through DEKRA gave me very positive experiences; from good communication with their employees and their professionalism in handling workers, to the welcoming and pleasant atmosphere.",
    name: "Karlo",
    position: "electrician - temporary agency worker",
  },
  {
    quote:
      "I love working for DEKRA because their projects are always creative and innovative. Doing promoting jobs gave me the chance to grow my communication skills, and made me realize that even when I feel like I can’t succeed, I actually can.",
    name: "Valentina",
    position: "promoter - student",
  },
  {
    quote:
      "I have been working on mystery shopping projects since 2020. I have worked on many interesting and challenging projects and I really only have positive impressions and nice words. What I like most about the mystery shopper's job is that it is done on a part-time basis, i.e. that mystery shopping can be coordinated with my obligations at work and at the university.",
    name: "Gabriela",
    position: "mystery shopper",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto flex justify-between gap-32 my-20"
    >
      <h2
        className="tracking-widest font-semibold text-primary"
        data-aos="fade-right"
      >
        TESTIMONIAL
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <FaQuoteLeft className="text-3xl text-gray-500 mx-auto mb-4 absolute" />
              <div className="ml-12">
                <h2 className="text-3xl text-primary font-bold leading-[48px] mb-4">
                  {item.quote}
                </h2>
                <h4 className="text-3xl text-primary font-bold leading-[48px] mb-4">
                  {item.name}
                </h4>
                <p className="text-lg text-primary">{item.position}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination mt-10 flex justify-center space-x-2"></div>
      </Swiper>
    </motion.div>
  );
};

export default Testimonial;
