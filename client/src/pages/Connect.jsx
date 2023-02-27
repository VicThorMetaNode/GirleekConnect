import React from "react";
import { CoachForm, TopBanner } from "../components";
import { girleek9 } from "../assets";

const Connect = () => {
  return (
    <div className="flex flex-col m-8 ">
      <div>
        <TopBanner
          title={"connexion"}
          subtitle={"sign up as coach"}
          src={girleek9}
          alt={"img nerd woman"}
          imgClassName={"w-full"}
        />
      </div>
      <div>
        <CoachForm />
      </div>
    </div>
  );
};

export default Connect;
