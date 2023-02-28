import React from "react";
import { girleek8, girlekk11 } from "../assets";
import {
  CustomButton,
  DiscoverBtn,
  TheLatestList,
  TopBanner,
} from "../components";
import { FaAngleDoubleRight } from "react-icons/fa";
const Coaches = () => {
  return (
    <article className="flex justify-center">
      <div className=" md:max-w-screen-md">
        <div>
          <TopBanner
            title={"coach side"}
            subtitle={"meet the team"}
            container={"flex flex-row items-end gap-2  mb-[0.2rem] "}
            iconTrue={"hidden"}
            src={girlekk11}
            alt={"woman nerd image"}
            imgClassName={"w-full md:w-[40rem]"}
          />
        </div>
        <div>
          <p className="mt-10 text-white ">coaches</p>
        </div>

        <div className="pl-4 mt-10 md:mt-10">
          <CustomButton
            title={"the latest projects"}
            btnType="button"
            styles={
              "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4  border border-pink w-[20rem] md:text-lg md:w-[30rem]"
            }
          />
        </div>
        <article className="flex flex-col mt-4">
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
        </article>

        <div className=" pl-4 mt-10 md:mt-10">
          <CustomButton
            title={"the latest events"}
            btnType="button"
            styles={
              "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4  border border-pink w-[20rem] md:text-lg md:w-[30rem]"
            }
          />
        </div>
        <article className="flex flex-col mt-4">
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
          <TheLatestList
            date={"dec.02"}
            year={"2022"}
            title={"build marketing campaign"}
          />
        </article>
        <article className="my-2 p-4">
          <div className="flex flex-row items-baseline">
            <div>
              <FaAngleDoubleRight className="text-8xl text-pink " />
            </div>
            <div className="w-[50%] md:w-[20%]">
              <img src={girleek8} alt="woman nerd image" className="w-full" />
            </div>
          </div>
          <div className="w-[80%] md:w-[60%] ml-4">
            <DiscoverBtn btnTitle={"discover projects"} />
          </div>
        </article>
      </div>
    </article>
  );
};

export default Coaches;
