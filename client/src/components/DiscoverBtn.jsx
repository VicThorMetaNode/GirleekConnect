import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const DiscoverBtn = ({ btnTitle }) => {
  return (
    <button
      onClick={() => {
        navigate("connect");
      }}
      className="border border-alt-white px-2 py-2 bg-gray max-w-[20rem] w-full "
    >
      <div className="flex flex-row justify-between ">
        <div>
          <p className="font-btn text-alt-white text-sm md:text-lg uppercase 2xl:whitespace-nowrap">
            {btnTitle}
          </p>
        </div>
        <div className="ml-auto  animate-pulse duration-500 ease-in-out">
          <div className="flex flex-row gap-0 ">
            <FaAngleDoubleRight className="text-pink text-lg md:text-2xl" />
            <FaAngleDoubleRight className="text-pink text-lg md:text-2xl" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default DiscoverBtn;
