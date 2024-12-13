import Image from "next/image";
import React from "react";
import logo from "../../../public/logo-white.png"
import LoginPic from "../../../public/loginPic.png"

function LoginLeftPart() {
  return (
    <div className="bg-[#0F67B1] w-[59%]  flex items-center justify-center py-4  h-[100vh] grow ">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center gap-3 text-[20px] text-[#F5F5F5] relative w-full max-w-xs">
          <Image
            src={logo}
            alt="logo"
            width={32}
            height={32}
            // layout="responsive"
          />
          <p>Youth and Safety</p>
        </div>
        <div>
          <p className="text-[#F5F5F5] text-[40px] font-medium w-[450px] text-center">
            Building Positive Character to Prevent Delinquency
          </p>
        </div>
        <div className="relative w-full max-w-xs">
          <Image
            src={LoginPic}
            alt="login"
            width={480}
            height={300}
            // layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginLeftPart;
