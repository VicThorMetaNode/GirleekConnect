import React from "react";
import {
  CustomButton,
  DiscoverBtn,
  EventArticleProps,
  HeroBanner,
  NextUpgrade,
  ShortPropsCourse,
} from "../components";
import { girleek6, girlekk11 } from "../assets";
import { ImPlay2 } from "react-icons/im";

const Profile = () => {
  return (
    <div>
      <article>
        <HeroBanner
          title={"welcome to the coach side, "}
          colorTitle={
            <>
              <br /> Julie
            </>
          }
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
        <div className="flex justify-start md:justify-center md:w-[50%]">
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
                  "btn-passive text-sm py-1 px-4 md:text-lg  md:px-4 md:py-1.5"
                }
                handleClick={() => {
                  navigate("project-details");
                }}
              />
              <ImPlay2 className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem] text-lg md:text-2xl animate-pulse duration-500 ease-in-out md:mt-[0.5rem] " />
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-center md:w-[50%]">
          <div className="flex-row ml-8">
            <ShortPropsCourse courseType={"your "} courseName={"profile"} />
            <div className="flex gap-2">
              <CustomButton
                btnType="button"
                title={"update now"}
                styles={
                  "btn-passive text-sm py-1 px-4 md:text-lg  md:px-4 md:py-1.5"
                }
                handleClick={() => {
                  navigate("profile-details");
                }}
              />
              <ImPlay2 className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem] text-lg md:text-2xl animate-pulse duration-500 ease-in-out md:mt-[0.5rem]  " />
            </div>
          </div>
        </div>
      </article>
      <article className="mt-7 px-8 flex justify-center ">
        <EventArticleProps
          container={"border border-alt-white py-5 px-3 md:w-[50%]"}
          title="create your next project"
          desc="Id labore recusandae non ipsam dolorum qui voluptate tempore ea quaerat delectus? Sit voluptas sunt et illo consequatur et ratione ratione ut distinctio officia et aliquam nesciunt. Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum. Et omnis accusamus qui repellendus sint et animi voluptate aut debitis labore."
          btnType="button"
          btnTitle={"create now"}
          styles={"btn-action text-base py-1 px-6 md:text-lg md:px-4 md:py-1.5"}
          handleClick={() => {
            navigate("connect");
          }}
        />
      </article>
      <article className=" mt-4 mb-8 px-8 flex justify-center ">
        <DiscoverBtn btnTitle={"discover all projects"} />
      </article>
      <article>
        <div className="md:hidden">
          <NextUpgrade
            title={"coming upgrade"}
            btnText={"create event"}
            src={girleek6}
            alt={"photo nerd woman"}
            imgContainer={"flex justify-end "}
          />
        </div>
      </article>
    </div>
  );
};

export default Profile;
