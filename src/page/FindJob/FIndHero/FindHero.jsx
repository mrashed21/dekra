import React from "react";

const FindHero = () => {
  return (
    <div className='bg-[url("https://dekra-arbeit.hr/wp-content/themes/dekra/static/images/decor-light.webp")]  bg-center bg-no-repeat bg-cover py-20 '>
      <div className="container mx-auto flex justify-between gap-10 mt-5">
        {/* left-side */}
        <div className="w-full lg:w-1/2">
          <h2 className="tracking-widest font-semibold text-primary">
            Find a job
          </h2>
          <h1 className="text-5xl font-extrabold mt-5  text-primary">
            Find the right job for you — quick, easy and hassle-free.
          </h1>
          <p className="mt-12">
            We will find the right opportunity for you, whether you are looking
            for temporary work such as a student job, or a higher, managerial
            position.
          </p>
          <button className="px-8 py-4 rounded-4xl text-lg bg-primary text-secondary font-semibold hover:bg-[#65b6a9ef] transition-all ease-in-out mt-16">
            Browse open positions
          </button>
        </div>

        {/* right-side */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://dekra-arbeit.hr/wp-content/uploads/2022/05/Cover-slika-4.webp"
            alt="image"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FindHero;
