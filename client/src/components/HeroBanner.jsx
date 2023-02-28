import React from "react";

const HeroBanner = ({
  title,
  colorTitle,
  src,
  alt,
  imgClassName,
  spanClassName,
  container,
  subContainer,
  titleContainer,
  h1ClassName,
  imgContainer,
}) => {
  return (
    <>
      <div className={container}>
        <div className={subContainer}>
          <div className={titleContainer}>
            <h1 className={h1ClassName}>
              {title} <span className={spanClassName}>{colorTitle}</span>
            </h1>
          </div>
          <div className={imgContainer}>
            <img src={src} alt={alt} className={imgClassName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
