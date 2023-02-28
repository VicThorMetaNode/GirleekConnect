import React from "react";
import { ImPlay2 } from "react-icons/im";
const TopBanner = ({
  title,
  subtitle,
  container,
  src,
  alt,
  imgClassName,
  iconTrue,
}) => {
  return (
    <div className="flex flex-row ">
      <div className="w-[25%] md:w-[20%]">
        <img src={src} alt={alt} className={imgClassName} />
      </div>
      <div className={container}>
        <div className="flex flex-col leading-none ">
          <div>
            <h3 className="font-mainCond text-xl font-normal text-alt-white uppercase md:text-2xl lg:text-3xl">
              {title}
            </h3>
          </div>
          <div>
            <h4 className="font-mainCond text-xl font-normal text-alt-pink uppercase md:text-2xl lg:text-3xl animate-pulse duration-500 ease-in-out">
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
