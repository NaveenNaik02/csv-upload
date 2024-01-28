"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAuth } from "@/app/provider";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  password: string;
};

const SignInForm = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ name: "", password: "" });
  const { user: ContextUser, setUser: setContextUser } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUserLogin = (e: React.MouseEvent) => {
    if (user.name && user.password) {
      setContextUser("user logged in");
      router.push("upload");
    }
  };
  return (
    <div className="h-[315px] rounded-2xl bg-white p-5 flex flex-col justify-around">
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          className="h-10 border mt-1 rounded px-4 w-full bg-[#F5F5F5]"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="h-10 border mt-1 rounded px-4 w-full bg-[#f5f5f5]"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <p className="text-blue-600 text-base font-normal cursor-pointer">
        Forgot password?
      </p>
      <Button text="Sign In" onClick={handleUserLogin} />
    </div>
  );
};

export default SignInForm;
