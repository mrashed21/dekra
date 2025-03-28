import React from "react";

const DerkaHero = () => {
  return (
    <div className="">
      <div className='bg-[url("https://dekra-arbeit.hr/wp-content/themes/dekra/static/images/decor-dark.webp")]  bg-center bg-no-repeat bg-cover text-white pt-20 '>
        <div className="container mx-auto py-5">
          <h2 className="tracking-widest font-semibold">ABOUT DEKRA </h2>
          <h1 className="text-5xl font-extrabold mt-5 pb-5 w-[55%]">
            Creating a world where employment means building trust and
            cooperation between employer and employee.
          </h1>
          <div className="border-b border-2 pl-5 lg:pl-0 border-primary  w-[220px]"></div>
        </div>
      </div>

      <div className="bg-[#007D40] py-32"></div>
      <div className="bg-[#eee]">
      <div className="relative mb-96 flex  justify-center">
        <div className="w-[1000px] mx-auto absolute -top-52">
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover.webp"
            alt="image"
            className=" w-full rounded-3xl"
          />
        </div>
      </div>
      <div className="container mx-auto pb-20 ">
       
        <h1 className="text-4xl font-extrabold text-primary mt-5 pb-5 w-[75%]"> Maintaining the human side of work. We nurture <span className="text-secondary">a personal, human
        approach in employment</span> and use it to connect people and business.</h1>{" "}
        <div className="border-b border-2 pl-5 lg:pl-0 border-primary  w-[220px]"></div>
      </div>
      </div>
    </div>
  );
};

export default DerkaHero;
