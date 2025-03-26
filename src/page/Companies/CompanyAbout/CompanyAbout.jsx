import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
const CompanyAbout = () => {
  return (
    <div className="bg-primary ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 py-20">
        {/* left-side */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-start gap-4 px-5 lg:px-0">
            <div>
              <h2 className="tracking-widest ml-10 text-xl font-semibold mb-10">
                ABOUT US
              </h2>
              <h1 className="text-3xl font-bold text-secondary flex items-start gap-4 group">
                <span className="text-secondary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                  <BiSolidRightArrow />
                </span>
                Consultancy services and solutions from the field of human
                resources
              </h1>
              <p className="text-secondary mt-2 ml-10">
                From finding and evaluating candidates to researching the
                organizational climate and salaries — our HR services cover
                everything you need in the field of human resources.
              </p>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="cursor-pointer overflow-hidden  px-5 lg:px-0 rounded-3xl w-full lg:w-1/2">
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/O-nama.webp"
            alt="image"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-115 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
