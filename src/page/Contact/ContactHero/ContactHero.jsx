// import React from 'react';

// const ContactHero = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default ContactHero;

import React from "react";

const ContactHero = () => {
  return (
    <div className='bg-[url("https://dekra-arbeit.hr/wp-content/themes/dekra/static/images/decor-light.webp")] bg-center bg-no-repeat bg-cover py-20'>
      <div className="container mx-auto mt-10 px-5 lg:px-0">
        <div className="w-full lg:w-2/3">
          <h3 className="tracking-widest font-semibold text-primary">
            CONTACT
          </h3>
          <h1 className="text-5xl text-primary font-bold my-8 ">
            DEKRA is here for you and all your questions — both for companies
            and job seekers.
          </h1>
          <button className="px-16 py-3 rounded-4xl text-lg bg-primary text-secondary font-semibold hover:bg-[#65b6a9ef] transition-all ease-in-out mt-16">
          Offices
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
