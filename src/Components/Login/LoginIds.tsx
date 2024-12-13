"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilePic from "../../../public/image 1.png";
import { StaticImageData } from "next/image";
import cross from "../../../public/icons/x.png";
import profileIcon from "../../../public/icons/profile.png";
import { useRouter } from "next/navigation";

type LoginItem = {
  name: string;
  email: string;
  pic: StaticImageData;
};

function LoginIds() {
  const router = useRouter();
   const [loginData, setLoginData] = useState<LoginItem[]>([
     {
       name: "John Doe",
       email: "johndoe@gmail.com",
       pic: profilePic,
     },
     {
       name: "Jane Doe",
       email: "janedoe@gmail.com",
       pic: profilePic,
     },
   ]);

  const handleProfileData = (index:number) => {
    const updatedLoginData = loginData.filter((_, i) => i !== index);
    setLoginData(updatedLoginData); 
  };

  return (
    <div className="flex flex-col items-center justify-center w-[41%] gap-3">
      <p className="text-[#404040] text-[32px] font-medium">Login</p>
      <p className="text-[#757575] text-sm font-normal">
        Welcome back! Choose an account.
      </p>
      <div className="w-full max-w-xs flex flex-col gap-2">
        {loginData.map((item, index) => (
          <div
            className="w-[315px] bg-[#EDEDED] rounded-[50px] flex items-center justify-between py-3 px-5 hover:border-[#0F67B1] hover:border-[1px] hover:bg-[#F0F3FF] "
            key={index}
          >
            <div className=" flex items-center gap-3">
              <div>
                <Image
                  src={item.pic}
                  alt="profile"
                  width={25}
                  height={25}
                  className=" rounded-full"
                />
              </div>
              <div>
                <p className="text-[#404040]">{item.name}</p>
                <p className="text-[#757575] text-[12px]">{item.email}</p>
              </div>
            </div>

            <div>
              <button onClick={() => handleProfileData(index)}>
                <Image src={cross} alt="cross" width={16} height={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[315px] bg-[#EDEDED] rounded-[50px] flex items-center justify-between py-4 px-5 hover:border-[#0F67B1] hover:border-[1px] hover:bg-[#F0F3FF] ">
        <button
          type="button"
          onClick={() => router.push("/LoginPage")}
          className=" flex items-center gap-3"
        >
          <div>
            <Image
              src={profileIcon}
              alt="profile"
              width={25}
              height={25}
              className=" rounded-full"
            />
          </div>
          <div>
            <p className="text-[#404040] ">Use another account</p>
          </div>
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-[#757575] text-sm font-normal">
          Don&apos;t you have an account?
        </p>
        <button
          onClick={() => router.push("/SignInPage/CreatePassword")}
          className="text-[#0F67B1] text-sm font-medium"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginIds;
