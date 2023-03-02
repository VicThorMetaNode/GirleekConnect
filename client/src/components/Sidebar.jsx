import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../constants";

const Icon = ({ styles, name, isActive, disabled, handleClick }) => {
  const icon = navLinks.find((link) => link.name === name)?.icon;
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-navy-light text-pink"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {icon && (
        <div
          className={`text-3xl ${isActive !== name && "text-[#ACACE6]"} ${
            disabled && "text-[#68627c]"
          }`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-20 h-[60vh]">
      <div className="flex-1 flex flex-col justify-between items-center bg-alt-gray rounded-[20px] w-[4.75rem] py-6 ">
        <div className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
