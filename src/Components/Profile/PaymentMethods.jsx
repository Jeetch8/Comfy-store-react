import React from "react";
import { RiVisaFill } from "react-icons/ri";

const PaymentMethods = () => {
  return (
    <div className=" w-1/2 flex gap-y-4 flex-col">
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium">
          <RiVisaFill className=" inline text-xl mr-2" /> VISA
          0000-0000-0000-0000
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-md font-medium">
          <RiVisaFill className=" inline text-xl mr-2" /> VISA
          0000-0000-0000-0000
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
