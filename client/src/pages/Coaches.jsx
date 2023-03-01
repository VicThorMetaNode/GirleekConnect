import React from "react";
import { girleek11, girleek8, jfoulon, jnegaret } from "../assets";
import {
  CoachBubble,
  CustomButton,
  DiscoverBtn,
  TheLatestList,
  TopBanner,
} from "../components";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ImPencil } from "react-icons/im";

const Coaches = () => {
  return (
    //
    <article className="flex justify-center 2xl:items-center">
      <div className=" flex flex-col justify-center md:items-center ">
        <div className="w-[80%] xl:w-[60%] ">
          <TopBanner
            title={"coach side"}
            subtitle={"meet the team"}
            container={
              "flex flex-row items-end gap-2 mb-[0.2rem] ml-[-2rem] md:ml-[-4rem]"
            }
            iconTrue={"hidden"}
            src={girleek11}
            alt={"woman nerd image"}
            imgClassName={"w-full"}
          />
        </div>
        <div className="md:pl-[8rem] lg:pl-[15rem] xl:pl-[20rem] 2xl:pl-[20rem] ">
          <article className="flex flex-col justify-start w-[80%]  md:flex md:justify-center md:w-[80%] lg:w-[82%] xl:w-[80%]">
            <div className="ml-4">
              <CoachBubble
                name={"Julie"}
                job={"ceo"}
                mainProject={"writing a book"}
                src={jfoulon}
              />
              <CoachBubble
                name={"Julie"}
                job={"ceo"}
                mainProject={"writing a book"}
                src={jnegaret}
              />
            </div>
          </article>
          <article>
            <div className=" flex flex-col justify-start gap-2 mt-5 md:mt-10">
              <CustomButton
                title={"the latest projects"}
                btnType="button"
                styles={
                  "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4 ml-6 border border-pink w-[20rem] md:text-lg md:w-[30rem]"
                }
              />
            </div>
            <article className="flex flex-col mt-4 ml-2">
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
                  "btn-passive text-md text-pink bg-gray font-semibold py-1 px-4 ml-6 border border-pink w-[20rem] md:text-lg md:w-[30rem]"
                }
              />
            </div>
            <article className="flex flex-col mt-4 ml-2">
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
          </article>

          <article className="my-2 p-4">
            <div className="flex flex-row items-baseline">
              <div>
                <FaAngleDoubleRight className="text-8xl text-pink " />
              </div>
              <div className="w-[50%]  md:w-[40%]">
                <img src={girleek8} alt="woman nerd image" className="w-full" />
              </div>
            </div>
            <div className="m-auto ml-4">
              <DiscoverBtn btnTitle={"discover projects"} />
            </div>
          </article>
        </div>
      </div>
    </article>
  );
};

export default Coaches;
