import React from "react";

const InfoHero = () => {
  return (
    <div className='bg-[url("https://dekra-arbeit.hr/wp-content/themes/dekra/static/images/decor-light.webp")] bg-center bg-no-repeat bg-cover py-20'>
      <div className="container mx-auto mt-10">
        <div className="w-full lg:w-2/3">
          <h3 className="tracking-widest font-semibold text-primary">
            INFO CORNER - BLOG
          </h3>
          <h1 className="text-5xl text-primary font-bold my-8 ">
            Sharing our knowledge and expertise
          </h1>
          <p className=" text-secondary mt-10">
            Naši stručnjaci u blogovima dijele savjete i informacije iz područja
            ljudskih resursa, planiranja događaja i istraživanja tržišta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
