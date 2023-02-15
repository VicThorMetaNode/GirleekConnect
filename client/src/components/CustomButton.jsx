import React from "react";

// example: <CustomButton
//           btnType="button"
//           title={address ? "Start a Campaign" : "Connect"}
//           styles={address ? "bg-[#FC5A8D] text-[#A6E7FF]" : "bg-[#00468C]"}
//           handleClick={() => {
//             if (address) navigate("create-campaign");
//             else connect();
//           }}
//         />

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button type={btnType} className={`${styles}`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
