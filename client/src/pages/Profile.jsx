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
          container={"sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[70%] "}
          subContainer={"mb-5 ml-2 flex"}
          title={"welcome to the coach side, "}
          colorTitle={
            <>
              <br /> Julie
            </>
          }
          src={girlekk11}
          alt={"img nerd woman"}
          imgClassName={"w-full"}
          spanClassName={"text-pink font-mainCond md:text-6xl 2xl:text-7xl"}
          titleContainer={
            "pt-[4rem] w-[60%] sm:pl-6 md:w-[80%] md:pt-[5rem] md:ml-20 lg:ml-80 lg:pt-[6rem] xl:ml-80 xl:pt-[6rem] 2xl:pt-[3rem]"
          }
          h1ClassName={
            "font-main font-semibold text-5xl uppercase text-alt-white leading-none md:text-6xl  2xl:ml-[15rem] 2xl:text-7xl "
          }
          imgContainer={
            "ml-[-8rem] mt-[-1rem] md:absolute md:top-0 md:right-20 lg:mt-2 lg:right-20 xl:right-60 2xl:right-[25rem]"
          }
        />
      </article>
      {/* className="flex justify-start md:justify-center md:w-[50%] " */}
      <article className="flex flex-col justify-center w-[50%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%]">
        <div className=" m-auto ">
          <div>
            <div className="flex-row ">
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
          <div>
            <div className="flex-row ">
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
        </div>
      </article>
      <article className="mt-7 px-8 md:px-0 flex justify-center ">
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
      <article className="mt-4 mb-8 flex justify-center ">
        <DiscoverBtn btnTitle={"discover all projects"} />
      </article>
      <article>
        <div className="md:hidden px-8">
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
