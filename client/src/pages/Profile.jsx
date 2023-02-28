import React from "react";
import { CustomButton, HeroBanner, ShortPropsCourse } from "../components";
import { girlekk11 } from "../assets";
import { ImPlay2 } from "react-icons/im";

const Profile = () => {
  return (
    <div>
      <article>
        <HeroBanner
          title={"welcome to the coach side, "}
          colorTitle={"Julie"}
          src={girlekk11}
          alt={"img nerd woman"}
          imgClassName={"w-full"}
          spanClassName={"text-pink font-mainCond md:text-6xl"}
          container={" md:w-[80%] lg:w-[50%] xl:w-[30%] "}
          subContainer={"mb-5 ml-2 flex "}
          titleContainer={
            "pt-[4rem] w-[60%] md:w-[80%] md:ml-4 lg:ml-20 xl:ml-60 "
          }
          h1ClassName={
            "font-main font-semibold text-5xl uppercase text-alt-white  leading-none md:text-6xl  "
          }
          imgContainer={
            "ml-[-8rem] mt-[-1rem] md:absolute md:top-4 md:right-20 xl:right-60 "
          }
        />
      </article>
      <article>
        <div className="flex justify-left">
          <div className="flex-row ml-8">
            <ShortPropsCourse
              courseType={"your latest"}
              courseName={"projects"}
            />
            <div className="flex gap-2">
              <CustomButton
                btnType="button"
                title={"update now"}
                styles={
                  "btn-passive text-sm py-1 px-4 md:text-lg lg:text-2xl md:px-4 md:py-1.5"
                }
                handleClick={() => {
                  navigate("project-details");
                }}
              />
              <ImPlay2
                size="1.5rem"
                className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem] animate-pulse duration-500 ease-in-out md:mt-[0.5rem] "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-left">
          <div className="flex-row ml-8">
            <ShortPropsCourse courseType={"your "} courseName={"profile"} />
            <div className="flex gap-2">
              <CustomButton
                btnType="button"
                title={"update now"}
                styles={
                  "btn-passive text-sm py-1 px-4 md:text-lg lg:text-2xl md:px-4 md:py-1.5"
                }
                handleClick={() => {
                  navigate("profile-details");
                }}
              />
              <ImPlay2
                size="1.5rem"
                className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem] animate-pulse duration-500 ease-in-out md:mt-[0.5rem] "
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Profile;
