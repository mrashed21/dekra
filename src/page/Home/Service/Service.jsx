import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
const Service = () => {
  return (
    <div className="py-16 bg-[#EEEEEE]">
      <div className="container mx-auto flex justify-between items-center gap-10">
        {/* left side */}
        {/* <div className="">
          <h2>FEATURED SERVICES</h2>
          <div className="">
            <h1 className="flex items-start text-3xl font-bold text-primary">
              {" "}
              <span>
                <BiSolidRightArrow className="mr-5 group-hover:translate-1.5" />
              </span>
              Recruitment and selection
            </h1>
            <p>
              Certified psychologists take over the entire recruitment and
              selection process.
            </p>
          </div>
          <div className="">
            <h1>
              {" "}
              <span>
                <BiSolidRightArrow />
              </span>{" "}
              TTry & Hire
            </h1>
            <p>
              We provide clients with employees for a temporary period, but with
              long-term employment as a goal.
            </p>
          </div>
          <div className="">
            <h1>
              {" "}
              <span>
                <BiSolidRightArrow />
              </span>{" "}
              Organizational diagnostics
            </h1>
            <p>
              Determining employee satisfaction, engagement and motivation, and
              researching your organization's culture.
            </p>
          </div>
          <div className="">
            <h1>
              {" "}
              <span>
                <BiSolidRightArrow />
              </span>{" "}
              Mystery Shopping
            </h1>
            <p>
              Mystery Shopping, Mystery Calling, After Calling, Mystery
              Candidate, etc.
            </p>
          </div>
        </div> */}

        <div className="space-y-8">
          <h2 className=" font-semibold ml-7 text-primary mb-10">
            FEATURED SERVICES
          </h2>
          <div className="flex items-start gap-4">
            <BiSolidRightArrow className="text-primary mt-1 text-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Recruitment and Selection
              </h1>
              <p className="text-secondary mt-2">
                Certified psychologists take over the entire recruitment and
                selection process.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <BiSolidRightArrow className="text-primary mt-1  text-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Try & Hire</h1>
              <p className="text-secondary mt-2">
                We provide clients with employees for a temporary period, but
                with long-term employment as a goal.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <BiSolidRightArrow className="text-primary mt-1  text-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary ">
                Organizational Diagnostics
              </h1>
              <p className="text-secondary mt-2">
                Determining employee satisfaction, engagement, and motivation,
                and researching your organization's culture.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <BiSolidRightArrow className="text-primary mt-1 text-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Mystery Shopping
              </h1>
              <p className="text-secondary mt-2">
                Mystery Shopping, Mystery Calling, After Calling, Mystery
                Candidate, etc.
              </p>
            </div>
          </div>
        </div>
        {/* right-side */}
        <div className="">
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Meeting.webp"
            alt="image"
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
