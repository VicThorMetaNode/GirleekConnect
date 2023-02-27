import React from "react";
import CustomButton from "./CustomButton";

const EventArticleProps = ({ dateStart, dateEnd, year, title, desc }) => {
  return (
    <article className="border border-alt-white py-5 px-3">
      <div className="flex justify-end">
        <hr className="text-alt-white w-10 " />
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-1">
          <p className="whitespace-nowrap uppercase font-btn text-white text-base font-extralight xl:text-xl">
            {dateStart} to {dateEnd} //{year}
          </p>
        </div>
        <div className=" mb-2">
          <h2 className="font-main text-xl font-semibold text-alt-white uppercase leading-snug xl:text-2xl ">
            {title}
          </h2>
        </div>
        <div className="pr-4">
          <p className="font-mainCond text-md font-extralight text-alt-white xl:text-xl">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <CustomButton
          btnType="button"
          title={"register now"}
          styles={"btn-action text-base py-1 px-6 md:text-lg md:px-4 md:py-1.5"}
          handleClick={() => {
            navigate("connect");
          }}
        />
      </div>
    </article>
  );
};

export default EventArticleProps;
