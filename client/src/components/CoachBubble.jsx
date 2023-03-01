import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const CoachBubble = ({ name, job, mainProject, src }) => {
  return (
    <article className="border border-alt-white bg-blue-bio rounded-2xl m-2 ">
      <div className="flex flex-row justify-between px-4 py-1 items-center ">
        <div>
          <img
            src={src}
            alt="miniature profile picture"
            className="rounded-full w-10 sm:w-[3rem] md:w-[4rem] xl:w-[5rem]"
          />
        </div>
        <div className="flex flex-col leading-none">
          <div>
            <p className="font-btn text-alt-white font-semibold text-sm uppercase whitespace-nowrap md:text-lg">
              {name}//<span className="font-light">{job}</span>
            </p>
          </div>
          <div>
            <p className="text-alt-pink whitespace-nowrap capitalize font-mainCond text-md font-normal md:text-lg">
              main project:
              <span className="text-alt-white font-light"> {mainProject}</span>
            </p>
          </div>
        </div>
        <div>
          <FaAngleDoubleDown className="text-md text-alt-white lg:text-xl " />
        </div>
      </div>
    </article>
  );
};

export default CoachBubble;
