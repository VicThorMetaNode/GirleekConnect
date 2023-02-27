import React from "react";

const CoachForm = () => {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-transparent border border-alt-white  px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="font-mainCond text-base font-extralight text-alt-white uppercase md:text-xl mb-2"
            for="name"
          >
            Your Name:
          </label>
          <input
            className="w-full py-1 px-3 font-mainCond  text-base leading-tight focus:outline-none focus:shadow-outline bg-blue"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            className="font-mainCond text-base font-extralight text-alt-white uppercase md:text-xl mb-2"
            for="password"
          >
            Password:
          </label>
          <input
            className="w-full py-1 px-3 font-mainCond  text-base leading-tight focus:outline-none focus:shadow-outline bg-blue"
            id="password"
            type="password"
            placeholder=""
          />
        </div>{" "}
        <div className="mb-4">
          <label
            className="font-mainCond text-base font-extralight text-alt-white uppercase md:text-xl mb-2"
            for="password"
          >
            Confirm Password:
          </label>
          <input
            className="w-full py-1 px-3 font-mainCond  text-base leading-tight focus:outline-none focus:shadow-outline bg-blue"
            id="password"
            type="password"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            className="font-mainCond text-base font-extralight text-alt-white uppercase md:text-xl mb-2"
            for="name"
          >
            Bio:
          </label>
          <input
            className="w-full py-1 px-3 font-mainCond  text-base leading-tight focus:outline-none focus:shadow-outline bg-blue"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mb-4">
          <label
            className="font-mainCond text-base font-extralight text-alt-white uppercase md:text-xl mb-2"
            for="name"
          >
            Your Name:
          </label>
          <input
            className="w-full py-1 px-3 font-mainCond  text-base leading-tight focus:outline-none focus:shadow-outline bg-blue"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default CoachForm;
