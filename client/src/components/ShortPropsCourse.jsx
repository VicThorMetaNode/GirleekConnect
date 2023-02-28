import React from "react";

const ShortPropsCourse = ({ courseType, courseName }) => {
  return (
    <article className="flex whitespace-nowrap gap-1 ">
      <h3 className="font-mainCond text-base font-normal text-alt-white uppercase md:text-xl ">
        {courseType}
      </h3>
      <h4 className="font-mainCond text-base font-normal text-alt-pink uppercase md:text-xl ">
        {courseName}
      </h4>
    </article>
  );
};

export default ShortPropsCourse;
