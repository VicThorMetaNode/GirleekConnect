import React from "react";
import HeroBanner from "../components/HeroBanner";
import { girleek1 } from "../assets/index";
import {
  ShortPropsCourse,
  CustomButton,
  EventArticleProps,
} from "../components";
import { ImPlay2 } from "react-icons/im";
const LandingPage = () => {
  return (
    <>
      <section>
        <HeroBanner
          title={"leading women to"}
          colorTitle={"tech"}
          src={girleek1}
          alt={"woman picture"}
          imgClassName={"w-full md:w-700px"}
          spanClassName={"text-pink font-mainCond md:text-7xl"}
        />
        <div className="flex justify-left md:mt-[8rem] xl:mt-[9.5rem]">
          <div className="flex-row ml-8">
            <ShortPropsCourse
              courseType={"online"}
              courseName={"masterclass"}
            />
            <div className="flex gap-2">
              <CustomButton
                btnType="button"
                title={"register now"}
                styles={
                  "btn-passive text-sm py-1 px-4 md:text-lg md:px-4 md:py-1.5"
                }
                handleClick={() => {
                  navigate("connect");
                }}
              />
              <ImPlay2
                size="1.5rem"
                className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem]"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 px-8">
          <EventArticleProps
            dateStart="mar.02"
            dateEnd="jun.14"
            year="2023"
            title="build your brand on tiktok"
            desc="Id labore recusandae non ipsam dolorum qui voluptate tempore ea quaerat delectus? Sit voluptas sunt et illo consequatur et ratione ratione ut distinctio officia et aliquam nesciunt. Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum. Et omnis accusamus qui repellendus sint et animi voluptate aut debitis labore."
          />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
