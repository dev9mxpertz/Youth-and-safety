"use client";
import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import correctIcon from "../../../../../public/icons/mail-open.png";
import Image from "next/image";
// import { useRouter } from "next/navigation";

function SendOtp() {
  // const router = useRouter();
   const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
   const [message, setMessage] = useState<string>("");

   const handleChange = (index: number, value: string) => {
     if (isNaN(Number(value))) return; // Only allow numbers
     const newOtp = [...otp];
     newOtp[index] = value;
     setOtp(newOtp);

     // Automatically move to the next input if a digit is entered
     if (value && index < otp.length - 1) {
       const nextInput = document.getElementById(`otp-input-${index + 1}`);
       nextInput?.focus();
     }
   };

   const handleKeyDown = (
     index: number,
     event: React.KeyboardEvent<HTMLInputElement>
   ) => {
     if (event.key === "Backspace" && !otp[index] && index > 0) {
       const prevInput = document.getElementById(`otp-input-${index - 1}`);
       prevInput?.focus();
     }
   };

   const handleSubmit = (event: React.FormEvent) => {
     event.preventDefault();
     const enteredOtp = otp.join("");
     if (enteredOtp.length === otp.length) {
       // Verify OTP here (e.g., call an API)
      console.log(`OTP Entered: ${enteredOtp}`);
     } else {
       setMessage("Please fill all OTP fields");
     }
   };
  return (
    <div>
      <div className="flex">
        <LoginLeftPart />

        <div className="flex flex-col items-center justify-center w-[41%] ">
          <div className="max-w-[450px] flex flex-col items-center justify-center ap-3">
            <div>
              <Image src={correctIcon} alt="icon" width={100} height={100} />
            </div>
            <p className="text-[#404040] text-[32px] font-medium text-center max-w-[370px]">
              OTP Verification
            </p>
            <p className="text-[#757575] text-sm font-normal text-center">
              Enter 6 digit pin sent to you by mail address.
            </p>

            <div className="p-4">
              <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 border-b-[1px] rounded text-center text-lg bg-transparent border-[#B0B0B0] "
                  />
                ))}
              </form>

              <div className="py-5">
                <p className="text-[#0F67B1] text-sm font-medium text-center">
                  <span className="text-[#757575] font-normal">
                    Doesn&apos;t accept code?
                  </span>
                  Send again
                </p>
              </div>
              <button
                onClick={handleSubmit}
                className={`w-[315px] ${
                  otp.every((digit) => digit.trim() !== "")
                    ? "text-[#FFFFFF] border-[#141414] bg-[#0F67B1]"
                    : "text-[#B0B0B0] bg-[#EDEDED]  "
                }  text-center  rounded-[50px]  py-4 px-5 `}
              >
                Continue
              </button>
              {message? <p className="mt-4 text-[#CB3A31]  text-center">{message}</p>:""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtp;
