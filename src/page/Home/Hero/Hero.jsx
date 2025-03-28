/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("FOR COMPANIES");

  return (
    <div
      className={
        activeTab === "FOR COMPANIES"
          ? "bg-primary text-secondary"
          : "bg-[#eee] text-secondary"
      }
    >
      <div className="container mx-auto p-4 py-20">
        <div className="flex items-center gap-5 font-semibold">
          <h4
            className={
              activeTab === "FOR COMPANIES" ? "hero-active" : "nav-underline"
            }
            onClick={() => setActiveTab("FOR COMPANIES")}
          >
            FOR COMPANIES
          </h4>
          <h4
            className={
              activeTab === "FIND A JOB" ? "hero-active" : "nav-underline"
            }
            onClick={() => setActiveTab("FIND A JOB")}
          >
            FIND A JOB
          </h4>
        </div>
        {/* this container for "FOR COMPANIES" */}
        {activeTab === "FOR COMPANIES" && (
          <div className="flex flex-col lg:flex-row justify-between gap-10 ">
            {/* left side */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl font-extrabold mt-10">
                Simple solutions for challenges in the field of human resources,
                event management and market research.
              </h1>
              <p className="my-5">
                Your outsourced partner for any venture that directly benefits
                your business and people development.{" "}
              </p>
              <button className="  px-8 py-4 rounded-4xl text-lg bg-lime-300 text-secondary font-semibold hover:bg-lime-400">
                Explore services
              </button>
            </div>
            {/* right side */}
            <div className="relative w-full lg:w-1/3   flex items-center justify-center">
              {/* Main Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-slika.webp"
                alt="Main Image"
                className="w-[90%] object-cover mt-20"
              />

              {/* Top Right Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/ELS-Party.webp"
                alt="Top Right Image"
                className="absolute top-10 lg:top-20 right-7 lg:-right-10 w-36 h-36 object-cover "
              />

              {/* Center Top Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/HR-Usluge.webp"
                alt="Center Image"
                className="absolute top-0 left-36 w-36 h-40 object-cover "
              />
            </div>
          </div>
        )}
        {/* this container for "FIND A JOB" */}
        {activeTab === "FIND A JOB" && (
          <div className="flex flex-col lg:flex-row justify-between gap-10 text-primary">
            {/* left side */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl font-extrabold mt-10 ">
                A faster and easier path to short-term or long-term employment.
              </h1>
              <p className="my-5">
                We will find the right job for you ​​— quickly, transparently
                and without taking commission from your hard-earned money.
              </p>
              <button className="  px-8 py-4 rounded-4xl text-lg bg-lime-300 text-secondary font-semibold hover:bg-lime-400">
                Find a job
              </button>
            </div>
            {/* right side */}
            <div className="relative w-full lg:w-1/3   flex items-center justify-center">
              {/* Main Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-slika-4.webp"
                alt="Main Image"
                className="w-[90%] object-cover mt-20"
              />

              {/* Top Right Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Agencijski-rad.webp"
                alt="Top Right Image"
                className="absolute top-12 lg:top-20 right-10 lg:-right-16 w-40 h-40 object-cover "
              />

              {/* Center Top Image */}
              <img
                src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Student.webp"
                alt="Center Image"
                className="absolute top-0 left-36 w-32 h-34 object-cover "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

// import React, { useState } from "react";
// import Navbar from "../../../components/Navbar/Navbar";
// // Import Navbar

// const Hero = () => {
//   const [activeTab, setActiveTab] = useState("FOR COMPANIES");

//   // Define background colors for each section
//   const bgColors = {
//     "FOR COMPANIES": "bg-blue-600 text-white",
//     "FIND A JOB": "bg-green-600 text-white",
//   };

//   return (
//     <div className={`${bgColors[activeTab]} transition-all duration-500`}>
//       <Navbar activeTab={activeTab} /> {/* Pass activeTab to Navbar */}
//       <div className="container mx-auto p-4 pb-16">
//         <div className="flex items-center gap-5 font-semibold">
//           <h4
//             className={`cursor-pointer ${
//               activeTab === "FOR COMPANIES" ? "hero-active" : "nav-underline"
//             }`}
//             onClick={() => setActiveTab("FOR COMPANIES")}
//           >
//             FOR COMPANIES
//           </h4>
//           <h4
//             className={`cursor-pointer ${
//               activeTab === "FIND A JOB" ? "hero-active" : "nav-underline"
//             }`}
//             onClick={() => setActiveTab("FIND A JOB")}
//           >
//             FIND A JOB
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
