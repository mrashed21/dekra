import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const OpenPositions = () => {
  return (
    <div className="relative">
      {/* top section */}
      <div className="container mx-auto flex justify-between gap-10 mt-60 relative">
        <img
          src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Student.webp"
          alt="image"
          className="w-60 h-72 rounded-3xl absolute -top-44"
        />
        <img
          src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Posredovanje.webp"
          alt="image"
          className="w-72 h-96 rounded-3xl -top-32 left-[calc(50%-160px)] absolute"
        />
        <img
          src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Agencijski-rad.webp"
          alt="image"
          className="w-72 h-96 rounded-3xl absolute -top-48 right-0"
        />
      </div>
      {/* Bottom section */}
      <div className="bg-primary py-20 ">
        <div className=" container mx-auto mt-64">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/4">
            <h2 className="tracking-widest font-semibold text-secondary">
              OPEN POSITIONS
            </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-3/4">
              {/* 01 */}
              <div className="">
                <h2 className="text-2xl font-bold text-secondary">
                  Recruitment and selection
                </h2>
                <p className="text-secondary font-medium my-5">
                  DEKRA is the middle man between you and your employer during
                  the selection process.
                </p>
                <button className="flex items-center  px-6 py-2 rounded-4xl text-lg bg-lime-300 text-secondary font-medium hover:bg-lime-400 group">
                  146 positions open{" "}
                  <span className="ml-3 group-hover:translate-x-2 transition-transform text-primary">
                    <FaArrowRightLong />
                  </span>{" "}
                </button>
              </div>

              {/* 02 */}
              <div className="">
                <h2 className="text-2xl font-bold text-secondary">
                  Temporary staffing
                </h2>
                <p className="text-secondary font-medium my-5">
                  DEKRA hires you and then places you to work for an adequate
                  employer for a definite period.
                </p>
                <button className="flex items-center  px-6 py-2 rounded-4xl text-lg bg-lime-300 text-secondary font-medium hover:bg-lime-400 group">
                  146 positions open{" "}
                  <span className="ml-3 group-hover:translate-x-2 transition-transform text-primary">
                    <FaArrowRightLong />
                  </span>{" "}
                </button>
              </div>

              {/* 03 */}
              <div className="">
                <h2 className="text-2xl font-bold text-secondary">
                  Student jobs
                </h2>
                <p className="text-secondary font-medium my-5">
                  Temporary jobs for improving a student budget during higher
                  education.
                </p>
                <button className="flex items-center  px-6 py-2 rounded-4xl text-lg bg-lime-300 text-secondary font-medium hover:bg-lime-400 group">
                  146 positions open{" "}
                  <span className="ml-3 group-hover:translate-x-2 transition-transform text-primary">
                    <FaArrowRightLong />
                  </span>{" "}
                </button>
              </div>

              {/* -4 */}
              <div className="">
                <h2 className="text-2xl font-bold text-secondary">
                  Freelance jobs
                </h2>
                <p className="text-secondary font-medium my-5">
                  A flexible work arrangement for some extra income, available
                  to both students and already employed individuals.
                </p>
                <button className="flex items-center  px-6 py-2 rounded-4xl text-lg bg-lime-300 text-secondary font-medium hover:bg-lime-400 group">
                  146 positions open{" "}
                  <span className="ml-3 group-hover:translate-x-2 transition-transform text-primary">
                    <FaArrowRightLong />
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
