import React from "react";

const HeroBanner = ({
  title,
  colorTitle,
  src,
  alt,
  imgClassName,
  spanClassName,
}) => {
  return (
    <>
      <div className="md:flex md:justify-center md:w-[70%] lg:w-[70%] ">
        <div className="mb-5 ml-2 flex  ">
          <h1 className="font-main font-semibold text-5xl pt-[4rem]  pr-8  uppercase text-alt-white  leading-none md:text-7xl md:ml-0 ">
            {title} <span className={spanClassName}>{colorTitle}</span>
          </h1>
          <div className="ml-[-16rem] mt-2 md:absolute md:top-10 md:right-40 ">
            <img src={src} alt={alt} className={imgClassName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
