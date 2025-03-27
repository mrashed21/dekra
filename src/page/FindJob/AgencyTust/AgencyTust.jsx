import React from "react";

const AgencyTust = () => {
  return (
    <div className="container mx-auto">
      <h1 className=" text-3xl lg:text-6xl font-extrabold text-primary ml-5 ">
        An agency <br /> you can trust
      </h1>
      <div className="border-b border-2 border-primary mt-10 w-[220px] ml-5"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        <div className="mb-16">
          <h1 className="text-2xl font-bold text-primary">
            1. <br />
            No fictitious fees and extra charges
          </h1>
          <p>
            Your money is your money — we don’t take any percentage from the
            amount you earn, respecting all rules defined by the Labour Law.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-primary">
            2. <br />
            Reliable payment
          </h1>
          <p>
            We guarantee you will get paid in the mutually agreed timeframe.
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-primary">
            3. <br />
            Balance between flexibility and stability
          </h1>
          <p>
            Your money is your money — we don’t take any percentage from the
            amount you earn, respecting all rules defined by the Labour Law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyTust;
