import React from "react";
import { ImPlay2 } from "react-icons/im";
const TopBanner = ({ title, subtitle, src, alt, imgClassName }) => {
  return (
    <div className="flex flex-row ">
      <div className="w-[25%] md:w-[12%]">
        <img src={src} alt={alt} className={imgClassName} />
      </div>
      <div className="flex flex-row items-end gap-2 ml-[-2rem] mb-[0.2rem] ">
        <div className="flex flex-col ">
          <div>
            <h3 className="font-mainCond text-base font-normal text-alt-white uppercase md:text-2xl lg:text-3xl">
              {title}
            </h3>
          </div>
          <div>
            <h4 className="font-mainCond text-base font-normal text-alt-pink uppercase md:text-2xl lg:text-3xl animate-pulse duration-500 ease-in-out">
              {subtitle}
            </h4>
          </div>
        </div>
        <div className="md:mb-3">
          <ImPlay2
            size="1.5rem"
            className="text-alt-white bg-icon-gray rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
