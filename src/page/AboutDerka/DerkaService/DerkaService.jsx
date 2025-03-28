import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
const DerkaService = () => {
  return (
    <div className="bg-[#eee]">
      <div className="container mx-auto flex justify-between gap-10 py-20">
        {/* left-side */}
        <div className="w-full lg:w-1/3">
          <h3 className="tracking-widest font-semibold text-primary">
            DEKRA SERVICES
          </h3>
          {/* 01 */}
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
              <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                <BiSolidRightArrow />
              </span>
              Agency work
            </h1>
            <p className="text-secondary mt-2 ml-10">
              Different options of hiring-out workers under a fixed-term period.
            </p>
          </div>
          {/* 02 */}
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
              <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                <BiSolidRightArrow />
              </span>
              HR consulting
            </h1>
            <p className="text-secondary mt-2 ml-10">
              Consultancy services and solutions from the field of human
              resources.
            </p>
          </div>
          {/* 03 */}
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
              <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                <BiSolidRightArrow />
              </span>
              Event & Logistic Services
            </h1>
            <p className="text-secondary mt-2 ml-10">
              Event management, promotion and mystery shopping.
            </p>
          </div>
          {/* 04 */}
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary flex items-start gap-4 group">
              <span className="text-primary mt-1 text-xl transition-transform duration-300 transform group-hover:translate-x-5">
                <BiSolidRightArrow />
              </span>
              Find a job
            </h1>
            <p className="text-secondary mt-2 ml-10">
              Faster and easier way to find temporary or permanent employment.
            </p>
          </div>
        </div>
        {/* right-side */}
        <div className="w-full lg:w-2/3">
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Smile-AR.webp"
            alt="image"
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DerkaService;
