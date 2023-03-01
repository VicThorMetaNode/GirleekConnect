import React from "react";
import { girleek1, girleek2, girleek4 } from "../assets/index";
import {
  HeroBanner,
  ShortPropsCourse,
  CustomButton,
  EventArticleProps,
  AgendaProps,
  JoinProps,
  NextUpgrade,
} from "../components";
import { ImPlay2 } from "react-icons/im";
const LandingPage = () => {
  return (
    <>
      <section>
        <article className="md:justify-center md:content-center md:m-auto">
          <div>
            <HeroBanner
              container={" sm:w-[80%] md:w-[80%] lg:w-[50%] xl:w-[30%] "}
              subContainer={"mb-5 ml-2 flex"}
              titleContainer={"pt-[4rem] pr-8"}
              title={"leading women to"}
              colorTitle={"tech"}
              src={girleek1}
              alt={"woman picture"}
              imgClassName={"w-full "}
              spanClassName={"text-pink font-mainCond md:text-8xl"}
              h1ClassName={
                "font-main font-semibold text-5xl sm:text-6xl uppercase text-alt-white ml-4 leading-none md:text-8xl md:ml-4 lg:ml-20 xl:ml-60 2xl:ml-[30rem]"
              }
              imgContainer={
                "ml-[-16rem] mt-2 md:absolute md:ml-[-5rem] md:top-4 md:right-20 xl:right-60 2xl:right-[30rem]"
              }
            />
          </div>
        </article>
        <article className="md:w-[80%] md:flex md:flex-col md:justify-center md:content-center md:m-auto md:px-20 xl:w-[50%] ">
          <div className="flex justify-left">
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
                    "btn-passive text-sm py-1 px-4 md:text-lg lg:text-xl md:px-4 md:py-1.5"
                  }
                  handleClick={() => {
                    navigate("connect");
                  }}
                />
                <ImPlay2 className="text-alt-white bg-icon-gray rounded-xl mt-[0.1rem] text-lg md:text-2xl animate-pulse duration-500 ease-in-out md:mt-[0.5rem] text" />
              </div>
            </div>
          </div>
          <div className="mt-7 px-8">
            <EventArticleProps
              container={"border border-alt-white py-5 px-3 md:w-[100%]"}
              dateStart="mar.02"
              dateEnd=" to jun.14"
              year="// 2023"
              title="build your brand on tiktok"
              desc="Id labore recusandae non ipsam dolorum qui voluptate tempore ea quaerat delectus? Sit voluptas sunt et illo consequatur et ratione ratione ut distinctio officia et aliquam nesciunt. Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum. Et omnis accusamus qui repellendus sint et animi voluptate aut debitis labore."
              btnType="button"
              btnTitle={"register now"}
              styles={
                "btn-action text-base py-1 px-6 md:text-lg md:px-4 md:py-1.5"
              }
              handleClick={() => {
                navigate("connect");
              }}
            />
          </div>
          <div className="flex flex-col mt-6 mb-5 p-10 ">
            <p className="whitespace-nowrap uppercase font-title text-alt-white text-3xl">
              AGENDA:
            </p>
            <div>
              <AgendaProps
                eventName="masterclass"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="webinar"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="workshop"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="coaching"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="networking"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="talk"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="partner"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
              <AgendaProps
                eventName="other"
                desc="Ut eligendi porro eum iste consequatur cum aliquam recusandae ut sunt sapiente est autem illum est totam omnis aut mollitia earum."
              />
            </div>
          </div>
          <div className="mb-[10rem]">
            <JoinProps
              src={girleek4}
              alt={"image woman"}
              imgClassName={"w-full ml-5"}
              btnTitle={"see locations"}
              codeBar={"---------"}
              title={"join forces"}
              desc={
                "Build together. Community-driven co-working spaces for woman first."
              }
              location={
                <>
                  <span className="text-pink font-semibold uppercase">
                    Brussels //
                  </span>
                  - 44 rue d'Arenberg
                </>
              }
            />
          </div>
          <div className="md:hidden">
            <NextUpgrade
              title={"next upgrade"}
              btnText={"join event"}
              src={girleek2}
              alt={"photo nerd woman"}
              imgClassName={"w-full "}
              imgContainer={"z-1 mt-[-6.7rem] md:w-[180px] md:mt-[2rem]"}
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default LandingPage;
