"use client";
import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React from "react";
import correctIcon from "../../../../public/icons/check-circle.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SuccessNewPw() {
  const router = useRouter();
  return (
    <div>
      <div className="flex">
        <LoginLeftPart />

        <div className="flex flex-col items-center justify-center w-[41%] gap-3">
          <div>
            <Image src={correctIcon} alt="icon" width={100} height={100} />
          </div>
          <p className="text-[#404040] text-[32px] font-medium text-center max-w-[370px]">
            Password successfully updated!
          </p>
          <p className="text-[#757575] text-sm font-normal">
            Please login with this password.
          </p>
          <div className="pt-6">
            <button
              type="submit"
              className={`w-[315px] text-[#FFFFFF] bg-[#0F67B1] text-center rounded-[50px] py-4 px-5`}
              onClick={() => router.push("/LoginPage")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessNewPw;
