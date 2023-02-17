import React, { useState } from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const JoinProps = ({
  src,
  alt,
  imgClassName,
  btnTitle,
  codeBar,
  title,
  desc,
}) => {
  const [showLocation, setShowLocation] = useState(false);
  return (
    <div>
      <div>
        <img src={src} alt={alt} className={imgClassName} />
      </div>
      <div className="container">
        <div>
          <div>
            <p>{codeBar}</p>
          </div>
          <div>
            <p>{title}</p>
            <p>{desc}</p>
          </div>
          <div>
            <button onClick={() => setShowLocation(!showLocation)}>
              {showLocation ? (
                <FaAngleDoubleUp size="1.5rem" className="text-gray" />
              ) : (
                <div className="flex">
                  <p>{btnTitle}</p>
                  <FaAngleDoubleDown size="1.5rem" className="text-pink" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProps;
