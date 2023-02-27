import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const NextUpgrade = ({ title, btnText, src, alt, imgClassName }) => {
  return (
    <div className=" mb-5 ml-8 w-[80%] bg-gray ">
      <div className="border border-white flex flex-row z-0 h-[7rem] md:gap-[15rem] ">
        <div className="flex flex-col  ml-2 mt-2 ">
          <div>
            <p className="font-main text-xl font-semibold text-alt-white uppercase">
              {" "}
              {title}
            </p>
          </div>
          <button
            onClick={() => {
              navigate("connect");
            }}
            className=" border border-alt-white w-[97%]  mb-1 p-1 bg-pink"
          >
            <div className="flex flex-row ">
              <div className="mr-">
                <p className="font-btn text-alt-white text-sm whitespace-nowrap uppercase">
                  {" "}
                  {btnText}
                </p>
              </div>
              <div className="ml-auto ">
                <FaAngleDoubleRight
                  size={"1.2rem"}
                  className="text-alt-white"
                />
              </div>
            </div>
          </button>
        </div>
        <div className="z-1 mt-[-6.7rem] md:w-[180px] md:mt-[2rem]">
          <img src={src} alt={alt} className={imgClassName} />
        </div>
      </div>
    </div>
  );
};

export default NextUpgrade;
