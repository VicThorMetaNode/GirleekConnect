import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { navLinks } from "../constants";

// const Icon = ({
//   styles,
//   name,
//   icon,
//   isActive,
//   disabled,
//   handleClick,
// }) => (
//   <div
//     className={`w-[48px] h-[48px] rounded-[10px] ${
//       isActive && isActive === name && "bg-[#ACACE6]"
//     } flex justify-center items-center ${
//       !disabled && "cursor-pointer"
//     } ${styles}`}
//     onClick={handleClick}
//   >
//     {!isActive ? (
//       <div className="w-1/2 h-1/2">{icon}</div>
//     ) : (
//       <div className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}>
//         {icon}
//       </div>
//     )}
//   </div>
// );

const Sidebar = () => {
  return (
    <div>
      <p>Sidebar2</p>
    </div>
    // <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
    //   <div className="flex-1 flex flex-col justify-between items-center bg-[#CEC8EF] rounded-[20px] w-[76px] py-4 mt-12">
    //     <div className="flex flex-col justify-center items-center gap-3">
    //       {navLinks.map((link) => (
    //         <Icon
    //           key={link.name}
    //           {...link}
    //           isActive={isActive}
    //           handleClick={() => {
    //             if (!link.disabled) {
    //               setIsActive(link.name);
    //               navigate(link.link);
    //             }
    //           }}
    //         />
    //       ))}
    //     </div>
    //     <Icon styles="bg-[#A6E7FF] shadow-secondary" imgUrl={sun} />
    //   </div>
    // </div>
  );
};

export default Sidebar;
