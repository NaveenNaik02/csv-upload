import React from "react";
import Button from "./Button";

const SignInForm = () => {
  return (
    <div className="h-[315px] rounded-2xl bg-white p-5 flex flex-col justify-around">
      <div>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          name="full_name"
          className="h-10 border mt-1 rounded px-4 w-full bg-[#F5F5F5]"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="h-10 border mt-1 rounded px-4 w-full bg-[#f5f5f5]"
        />
      </div>
      <p className="text-blue-600 text-base font-normal cursor-pointer">
        Forgot password?
      </p>
      <Button text="Sign In" />
    </div>
  );
};

export default SignInForm;
