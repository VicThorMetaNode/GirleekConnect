import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT INTERNAL COMPONENTS
import { gk } from "../assets";
import CustomButton from "./CustomButton";
// import { navlinks } from "../constants";
// import { useStateContext } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative md:flex md:justify-between bg-pink w-[100%]">
      <div className="flex justify-center">
        <div className="max-w-[458px] bg-navy rounded-full w-[3rem] md:w-[7rem]">
          <img src={gk} alt="logo image" className="object-contain" />
        </div>
      </div>
      <div className="absolute top-0 right-0 md:top-5 sm:right-5 p-2">
        <CustomButton
          btnType="button"
          title={"Connect"}
          styles={"btn-connect text-sm py-1 px-4 md:text-xl md:px-8 md:py-2"}
          handleClick={() => {
            navigate("connect");
          }}
        />
      </div>
    </div>
    // <div className="flex md:flex-row justify-between bg-pink">
    //   <div className="self-center">
    //     <div className="max-w-[458px] bg-navy rounded-full w-[3rem] md:w-[7rem]">
    //       <img src={gk} alt="logo image" className="object-contain" />
    //     </div>
    //   </div>
    //   <div>
    //     <CustomButton
    //       btnType="button"
    //       title={"Connect"}
    //       styles={"btn-connect"}
    //       handleClick={() => {
    //         navigate("connect");
    //       }}
    //     />
    //   </div>
    // </div>

    /* <div className="relative bg-pink">
<div className="flex justify-center items-center   md:h-auto">
  <div className="max-w-[458px] bg-navy rounded-full w-[3rem] md:w-[7rem]">
    <img src={gk} alt="logo image" className="object-contain" />
  </div>
</div>
<div className="absolute top-0 right-0">
  <CustomButton
    btnType="button"
    title={"Connect"}
    styles={"btn-connect"}
    handleClick={() => {
      navigate("connect");
    }}
  />
</div>
</div> */

    // <div className="flex md:flex-row justify-between bg-pink">
    //   <div className="self-center">
    //     <div className="max-w-[458px] bg-navy rounded-full w-[3rem] md:w-[7rem]">
    //       <img src={gk} alt="logo image" className="object-contain" />
    //     </div>
    //   </div>
    //   <div>
    //     <CustomButton
    //       btnType="button"
    //       title={"Connect"}
    //       styles={"btn-connect"}
    //       handleClick={() => {
    //         navigate("connect");
    //       }}
    //     />
    //   </div>
    // </div>
  );
};

export default Navbar;
