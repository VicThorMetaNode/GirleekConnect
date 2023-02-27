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
      <div className="md:w-[80%] lg:w-[50%] xl:w-[30%]">
        <div className="mb-5 ml-2 flex  ">
          <div>
            <h1 className="font-main font-semibold text-5xl pt-[4rem]  pr-8  uppercase text-alt-white  leading-none md:text-8xl md:ml-4 lg:ml-20 xl:ml-60">
              {title} <span className={spanClassName}>{colorTitle}</span>
            </h1>
          </div>
          <div className="ml-[-16rem] mt-2 md:absolute md:top-4 md:right-20 xl:right-60 ">
            <img src={src} alt={alt} className={imgClassName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
