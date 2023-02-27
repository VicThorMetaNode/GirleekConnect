import React, { useState } from "react";

import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
const AgendaProps = ({ eventName, desc }) => {
  const [showEvent, setShowEvent] = useState(false);
  return (
    <div className="mb-5">
      <div className="flex justify-between w-full ">
        <p className="whitespace-nowrap uppercase font-btn text-alt-white text-base font-light md:text-xl">
          {eventName}
        </p>
        <button onClick={() => setShowEvent(!showEvent)}>
          {showEvent ? (
            <FaAngleDoubleUp
              size="1.5rem"
              className="text-gray animate-pulse duration-500 ease-in-out w-full h-full"
            />
          ) : (
            <FaAngleDoubleDown
              size="1.5rem"
              className="text-pink animate-pulse duration-500 ease-in-out w-full h-full "
            />
          )}
        </button>
      </div>
      <div className="w-[80%] mt-1 ">
        {showEvent && (
          <p className="font-mainCond text-md font-extralight text-alt-white md:text-lg">
            {desc}
          </p>
        )}
      </div>
      <div className="flex justify-left mt-3">
        <hr className="text-alt-white w-full " />
      </div>
    </div>
  );
};

export default AgendaProps;
