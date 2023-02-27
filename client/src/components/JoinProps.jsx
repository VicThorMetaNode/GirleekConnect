import React, { useState } from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const JoinProps = ({
  src,
  alt,
  imgClassName,
  btnTitle,
  codeBar,
  title,
  desc,
  location,
}) => {
  const [showLocation, setShowLocation] = useState(false);
  return (
    <div className="mb-5">
      <div className="md:w-[50%]">
        <img src={src} alt={alt} className={imgClassName} />
      </div>
      <div className="flex flex-col border border-pink w-[80%] ml-8">
        <div className="border-r border-b border-pink w-max px-4 bg-blue">
          <p className="font-barcode ">{codeBar}</p>
        </div>
        <div>
          <div className=" p-4">
            <p className="font-main text-xl font-semibold text-alt-white uppercase md:text-2xl">
              {title}
            </p>
            <div className="w-[90%] md:w-[80%]">
              <p className="font-mainCond text-md font-extralight text-alt-white leading-snug md:text-2xl">
                {desc}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setShowLocation(!showLocation)}
              className="border border-pink w-[97%] ml-1 mb-1 p-2 bg-blue  "
            >
              {showLocation ? (
                <div className="flex flex-row ">
                  <div>
                    <p className="font-btn text-alt-white text-sm whitespace-nowrap md:text-md">
                      {location}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <FaAngleDoubleUp
                      size="1.5rem"
                      className="text-icon-gray animate-pulse duration-500 ease-in-out w-full h-full"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-row ">
                  <div className="ml-10">
                    <p className="font-btn font-semibold text-pink uppercase md:text-xl">
                      {btnTitle}
                    </p>
                  </div>
                  <div className="ml-auto ">
                    <FaAngleDoubleDown
                      size="1.5rem"
                      className="text-pink animate-pulse duration-500 ease-in-out w-full h-full "
                    />
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProps;
