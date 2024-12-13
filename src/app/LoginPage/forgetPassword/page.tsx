"use client";
import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import Image from "next/image";
import React, { useState } from "react";
import errorIcon from "../../../../public/icons/exclamation-circle.png";
import correctIcon from "../../../../public/icons/check-circle.png";
import { useRouter } from "next/navigation";
import iconAl from "../../../../public/icons/exclamation-circle-grey.png"


function ForgetPassword() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Simple email format validation
    const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value);
    setError(isValid ? "" : "The email address you provided is invalid.");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error && email) {
      console.log("Form submitted:", email);

      router.push("/LoginPage/forgetPassword/verificationEmail");

      // Implement your form submission logic here
    }
  };
  return (
    <div className="flex">
      <LoginLeftPart />
      <div className="flex flex-col items-center justify-center w-[41%] gap-3">
        <p className="text-[#404040] text-[32px] font-medium">
          Forgot password?
        </p>
        <p className="text-[#757575] text-sm font-normal">
          Enter your email address.
        </p>

        <div className="w-full max-w-xs ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#404040] text-sm font-medium mb-2">
                Email
              </label>
              <div className=" relative">
                <input
                  className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                    error
                      ? "border-red-500"
                      : !error && email
                      ? "bg-[#EDFAF0] "
                      : "border-[#D0D0D0] "
                  }`}
                  type="text"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                  {error ? (
                    <>
                      <Image
                        src={errorIcon}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </>
                  ) : !error && email ? (
                    <Image
                      src={correctIcon}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm py-4">{error}</p>}

            <div className="flex gap-2 pb-5">
              <div>
                {" "}
                <Image src={iconAl} width={20} height={20} alt="icon" />
              </div>

              <p className="text-[#757575] text-[12px] font-normal">
                If you have an account you’ll receive an email to change your
                password.
              </p>
            </div>
            <button
              className={`w-[315px] ${
                !error && email
                  ? "text-[#FFFFFF] border-[#141414] bg-[#0F67B1]"
                  : "text-[#B0B0B0] bg-[#EDEDED]  "
              }  text-center  rounded-[50px]  py-4 px-5 `}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
