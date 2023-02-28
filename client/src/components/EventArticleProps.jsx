import React from "react";
import CustomButton from "./CustomButton";

const EventArticleProps = ({
  container,
  dateStart,
  dateEnd,
  year,
  title,
  desc,
  btnType,
  btnTitle,
  handleClick,
  styles,
}) => {
  return (
    <article className={container}>
      <div className="flex justify-end">
        <hr className="text-alt-white w-10 " />
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-1">
          <p className="whitespace-nowrap uppercase font-btn text-white text-base font-extralight xl:text-xl">
            {dateStart} {dateEnd} {year}
          </p>
        </div>
        <div className=" mb-2">
          <h2 className="font-main text-xl font-semibold text-alt-white uppercase leading-snug md:text-2xl  ">
            {title}
          </h2>
        </div>
        <div className="pr-4">
          <p className="font-mainCond text-md font-extralight text-alt-white md:text-xl  ">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button type={btnType} className={`${styles}`} onClick={handleClick}>
          {btnTitle}
        </button>
      </div>
    </article>
  );
};

export default EventArticleProps;
