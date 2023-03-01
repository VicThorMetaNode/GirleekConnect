import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const TheLatestList = ({ date, year, title }) => {
  return (
    <article className="mb-2 max-w-max ">
      <div className="flex flex-row items-center  ">
        <div className="p-2">
          <FaAngleDoubleRight className="text-md text-alt-white md:text-xl animate-float-horizontal-light bg-transparent" />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col leading-none">
            <p className="whitespace-nowrap uppercase font-btn text-alt-white text-md font-light md:text-xl">
              {date}//{year}
            </p>

            <p className="whitespace-nowrap uppercase font-mainCond text-alt-white text-md font-semibold md:text-xl">
              {title}//
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-10 ">
        <hr className="text-alt-white w-[70%]" />
      </div>
    </article>
  );
};

export default TheLatestList;
