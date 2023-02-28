import React from "react";
import {
  CustomButton,
  DiscoverBtn,
  TopBanner,
  YourLatestList,
} from "../components";
import { girleek9, girlekk11, jfoulon } from "../assets";
import { ImPencil } from "react-icons/im";
import { FaAngleDoubleRight } from "react-icons/fa";

const ProfileDetails = () => {
  return (
    <article className="md:w-full md:flex md:flex-col md:">
      <div>
        <TopBanner
          title={"coach side"}
          subtitle={"your profile"}
          container={"flex flex-row items-end gap-2  mb-[0.2rem] "}
          iconTrue={"hidden"}
          src={girlekk11}
          alt={"woman nerd image"}
          imgClassName={"w-full"}
        />
      </div>
      <article className="md:w-[50%] md:flex md:justify-center ">
        <div className="border border-gray rounded-3xl mx-4 mt-1 py-2 px-2  ">
          <div className="flex justify-end mt-[-1rem] ">
            <div className="bg-blue-bio border border-alt-white rounded-full p-2">
              <ImPencil className="text-alt-white text-sm md:text-md" />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="ml-[-1rem]">
              <img
                src={jfoulon}
                alt="profile picture"
                className="rounded-full"
              />
            </div>
            <div>
              <div className="flex flex-col ">
                <div className="ml-2 md:mt-4">
                  <p className="font-btn text-alt-white font-semibold text-sm uppercase whitespace-nowrap md:text-lg">
                    julie//<span className="font-light">ceo</span>
                  </p>
                </div>
                <div className="bg-blue-bio rounded-xl py-2 px-3 m-1">
                  <p className="font-mainCond text-md font-extralight text-alt-white md:text-lg">
                    As the CEO of this organization, my mission is to bridge the
                    gender gap in technology and empower women to reach their
                    full potential in this industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-2 mr-4 mb-6">
                <div>
                  <ul className="text-right whitespace-nowrap capitalize font-mainCond text-md font-normal text-alt-pink md:text-lg">
                    <li>email:</li>
                    <li>phone:</li>
                    <li>industry cat.:</li>
                    <li>main project:</li>
                    <li>linkedin url:</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-left whitespace-nowrap capitalize font-mainCond text-md font-extralight text-alt-white md:text-lg">
                    <li>julie@dogecoinkingdom.fr</li>
                    <li>+32444-44-44 </li>
                    <li>Tech</li>
                    <li>Writing a book</li>
                    <li>https//julie.linkedin.be</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="flex flex-col justify-start gap-2 mt-10 md:mt-10">
        <CustomButton
          title={"create project >>"}
          btnType="button"
          styles={
            "btn-passive text-sm bg-pink font-semibold py-1 px-4 ml-6 border border-alt-white max-w-max md:text-md md:px-4 md:py-1.5  "
          }
          handleClick={() => {
            navigate("connect");
          }}
        />
        <CustomButton
          title={"your latest projects"}
          btnType="button"
          styles={
            "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4 ml-6 border border-pink w-[20rem] md:text-lg md:w-[30rem]"
          }
        />
      </div>
      <article className="flex flex-col justify-start m-4 ">
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
      </article>

      <div className="flex flex-col justify-start gap-2 mt-14 md:mt-10">
        <CustomButton
          title={"create event >>"}
          btnType="button"
          styles={
            "btn-passive text-sm bg-pink font-semibold py-1 px-4 ml-6 border border-alt-white max-w-max md:text-md md:px-4 md:py-1.5  "
          }
          handleClick={() => {
            navigate("connect");
          }}
        />
        <CustomButton
          title={"your latest events"}
          btnType="button"
          styles={
            "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4 ml-6 border border-pink w-[20rem] md:text-lg md:w-[30rem]"
          }
        />
      </div>
      <article className="flex flex-col justify-start m-4 ">
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
        <YourLatestList
          date={"dec.02"}
          year={"2022"}
          title={"build marketing campaign"}
        />
      </article>
      <article className="my-2 p-4">
        <div className="flex flex-row items-baseline">
          <div className="w-[50%] md:w-[20%]">
            <img src={girleek9} alt="woman nerd image" className="w-full" />
          </div>
          <div className="ml-[-4rem]">
            <FaAngleDoubleRight className="text-8xl text-pink " />
          </div>
        </div>
        <div className="w-[80%] md:w-[60%] ml-4">
          <DiscoverBtn btnTitle={"discover teammates"} />
        </div>
      </article>
    </article>
  );
};

export default ProfileDetails;
