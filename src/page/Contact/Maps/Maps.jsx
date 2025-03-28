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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
            <h2 className="text-3xl font-bold text-primary">Zagreb office</h2>
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
              className="text-primary font-semibold"
            >
              +385 1 6064 420
            </Link>{" "}
          </p>
          <div className="flex items-center justify-between">
            <p>
              M:{" "}
              <Link
                to="melto:info.hr@dekra.com"
                className="text-primary font-semibold"
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
      </div>
    </div>
  );
};

export default Maps;
