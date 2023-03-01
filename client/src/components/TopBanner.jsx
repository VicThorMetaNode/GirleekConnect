import React from "react";
import { ImPlay2 } from "react-icons/im";
const TopBanner = ({ title, subtitle, container, src, iconTrue }) => {
  return (
    <div className="flex flex-row ">
      <div>
        <img src={src} alt="profile picture" className="rounded-none" />
      </div>
      <div className={container}>
        <div className="flex flex-col leading-none">
          <div>
            <h3 className="font-mainCond text-xl font-normal text-alt-white uppercase whitespace-nowrap md:text-4xl  2xl:text-5xl">
              {title}
            </h3>
          </div>
          <div>
            <h4 className="font-mainCond text-xl font-normal text-alt-pink uppercase whitespace-nowrap md:text-4xl  2xl:text-5xl animate-pulse duration-500 ease-in-out">
              {subtitle}
            </h4>
          </div>
        </div>
        <div className="md:mb-3">
          <ImPlay2 size="1.5rem" className={iconTrue} />
          {/* "text-alt-white bg-icon-gray rounded-xl animate-pulse duration-500 ease-in-out " */}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
