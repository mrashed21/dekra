import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-router-dom";
const Maps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const countries = [
    "Show all offices",
    "Croatia",
    "Slovenia",
    "Bosnia and Herzegovina",
    "Serbia",
    "Montenegro",
    "Kosovo",
    "North Macedonia",
    "Bulgaria",
  ];
  return (
    <div className="container mx-auto py-16">
      <div className="w-full  lg:w-1/3">
        <h1
          className="text-3xl font-extrabold text-primary ml-5 sticky top-10"
          data-aos="fade-left"
        >
          Look for a DEKRA office near you.
        </h1>
        <div
          className="border-b border-2 border-primary mt-10 w-[220px] ml-5"
          data-aos="fade-left"
        ></div>
      </div>
      <div className="w-fit mt-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-full text-green-700 font-medium"
        >
          Choose country{" "}
          <LuArrowDownRight
            className={`ml-1 transition-transform duration-300 ${
              isOpen ? "-rotate-90" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute w-[200px] h-60 mt-2 bg-white border border-gray-200 shadow-md rounded-md overflow-y-scroll">
            {countries.map((country, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer text-green-700 hover:bg-gray-100 ${
                  index === 0 ? "font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* maps */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 px-5 lg:px-0">
        {/* 01 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.331036989935!2d15.9801416!3d45.7645556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5c3247ac111%3A0x93d49bd871ebdd01!2sHorvatova%20ul.%2082%2F6%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743150141701!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Zagreb office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.331036989935!2d15.9801416!3d45.7645556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5c3247ac111%3A0x93d49bd871ebdd01!2sHorvatova%20ul.%2082%2F6%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743150141701!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Horvatova ulica 82/6</p>
          <p className="mt-1 font-medium">10000 Zagreb, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                info.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 02 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.6559460546628!2d18.679533499999998!3d45.557246299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a8c6fb8def%3A0x28bbd595958bfcc6!2sUl.%20Hrvatske%20Republike%2019D%2C%2031000%2C%20Osijek%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743152425522!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Osijek office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.6559460546628!2d18.679533499999998!3d45.557246299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a8c6fb8def%3A0x28bbd595958bfcc6!2sUl.%20Hrvatske%20Republike%2019D%2C%2031000%2C%20Osijek%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743152425522!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Hrvatske Republike 19d</p>
          <p className="mt-1 font-medium">31000 Osijek, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +385 31 283 083
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="osijek.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                info.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>
        {/* 03 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.6464262040918!2d18.015837899999998!3d45.15375830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475db9ff891f845b%3A0x76f8aae2cffe1da4!2sUl.%20Petra%20Preradovi%C4%87a%204%2C%2035000%2C%20Slavonski%20Brod%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743153987198!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Slavonski Brod office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.6464262040918!2d18.015837899999998!3d45.15375830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475db9ff891f845b%3A0x76f8aae2cffe1da4!2sUl.%20Petra%20Preradovi%C4%87a%204%2C%2035000%2C%20Slavonski%20Brod%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743153987198!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Petra Preradovića 4</p>
          <p className="mt-1 font-medium">35000 Slavonski Brod, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
             +385 35 408 475
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                slavonski.brod.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 04 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.331036989935!2d15.9801416!3d45.7645556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5c3247ac111%3A0x93d49bd871ebdd01!2sHorvatova%20ul.%2082%2F6%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743150141701!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Rijeka office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.331036989935!2d15.9801416!3d45.7645556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5c3247ac111%3A0x93d49bd871ebdd01!2sHorvatova%20ul.%2082%2F6%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743150141701!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Radmile Matejčić 10</p>
          <p className="mt-1 font-medium">51000 Rijeka, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +385 51 322 896
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                rijeka.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 05 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.762904520337!2d16.087921100000003!3d43.0464198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335bc3fdbe7d4df%3A0x61e94b0b367352c4!2zVWwuIEFuZHJpamUgS2HEjWnEh2EgTWlvxaFpxIdhIDEsIDIxNDg1LCBLb21pxb5hLCBDcm9hdGlh!5e0!3m2!1sen!2sbd!4v1743154387373!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Pula office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.762904520337!2d16.087921100000003!3d43.0464198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335bc3fdbe7d4df%3A0x61e94b0b367352c4!2zVWwuIEFuZHJpamUgS2HEjWnEh2EgTWlvxaFpxIdhIDEsIDIxNDg1LCBLb21pxb5hLCBDcm9hdGlh!5e0!3m2!1sen!2sbd!4v1743154387373!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Andrije Kačića Miošića 1</p>
          <p className="mt-1 font-medium">52100 Pula, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +385 52 224 223
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
               pula.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 06 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.83719740364!2d16.473639500000004!3d43.5057317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e25d03ddf85%3A0x2f1e97d6af6c79ce!2sUl.%20Dinka%20%C5%A0imunovi%C4%87a%2014%2C%2021000%2C%20Split%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743154487969!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Split office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.83719740364!2d16.473639500000004!3d43.5057317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e25d03ddf85%3A0x2f1e97d6af6c79ce!2sUl.%20Dinka%20%C5%A0imunovi%C4%87a%2014%2C%2021000%2C%20Split%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743154487969!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Dinka Šimunovića 14</p>
          <p className="mt-1 font-medium">10000 Zagreb, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +385 21 444 186
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
               split.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 07 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2864.8062147963797!2d15.2353656!3d44.1079904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa61acb10243%3A0x634ba4a1f010820e!2sUl.%20Katarine%20Zrinske%201d%2C%2023000%2C%20Zadar%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743154599592!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Zadar office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2864.8062147963797!2d15.2353656!3d44.1079904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa61acb10243%3A0x634ba4a1f010820e!2sUl.%20Katarine%20Zrinske%201d%2C%2023000%2C%20Zadar%2C%20Croatia!5e0!3m2!1sen!2sbd!4v1743154599592!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Ulica Katarine Zrinske 1/D</p>
          <p className="mt-1 font-medium">23000 Zadar, Croatia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
             +385 23 627 975
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                zadar.hr@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>

        {/* 08 */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.4180372390556!2d14.558859999999997!3d46.06270509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653214f52b7c07%3A0x9842dc8fb787d2e6!2sLesko%C5%A1kova%20cesta%2011%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2sbd!4v1743154715872!5m2!1sen!2sbd"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl hover:scale-105 transition-all ease-in-out "
          ></iframe>

          <div className="flex items-center justify-between mt-10">
            <h2 className="text-2xl font-bold text-primary">Ljubljana office</h2>
            <Link
              to={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.4180372390556!2d14.558859999999997!3d46.06270509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653214f52b7c07%3A0x9842dc8fb787d2e6!2sLesko%C5%A1kova%20cesta%2011%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2sbd!4v1743154715872!5m2!1sen!2sbd`}
              target="_blank"
              className=" text-primary flex items-start gap-4 group mt-5"
            >
              <p className="text-primary mt-1 transition-transform duration-300 transform group-hover:translate-x-5 ">
                <BiSolidRightArrow />
              </p>
              Look on the map
            </Link>
          </div>
          <p className="mt-5 font-medium">Leskoškova cesta 11</p>
          <p className="mt-1 font-medium">1000 Ljubljana, Slovenia</p>
          <hr className="border-b border-[#eee] my-5" />
          <p>
            T:{" "}
            <Link
              to="telto:+385 1 6064 420"
              className="text-primary font-semibold map-item"
            >
              +386 8 2050 451
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold map-item"
              >
                zaposlitev.si@dekra.com
              </Link>{" "}
            </p>
            <p>
              Working hours:{" "}
              <span className="font-semibold">Workdays 08:30 – 16:30</span>
            </p>
          </div>
          <hr className="border-b border-black mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Maps;
