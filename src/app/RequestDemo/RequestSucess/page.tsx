"use client";
import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React from "react";
import correctIcon from "../../../../public/icons/mail-open.png";
import Image from "next/image";
//import { useRouter } from "next/navigation";

function RequestSucess() {
  //const router = useRouter();
  return (
    <div>
      <div className="flex">
        <LoginLeftPart />

        <div className="flex flex-col items-center justify-center w-[41%] ">
          <div className="max-w-[370px] flex flex-col items-center justify-center ap-3">
            <div>
              <Image src={correctIcon} alt="icon" width={100} height={100} />
            </div>
            <p className="text-[#404040] text-[32px] font-medium text-center max-w-[370px]">
              Your request has been sent to us
            </p>
            <p className="text-[#757575] text-sm font-normal text-center">
              We&apos;ll contact you as soon as possible to arrange an
              appointment for the demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestSucess;
