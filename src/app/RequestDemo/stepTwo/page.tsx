"use client";

import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import currentPg from "../../../../public/icons/currentstep.png";
import nextPg from "../../../../public/icons/nextstep.png";
import Image from "next/image";
import correctIcon from "../../../../public/icons/check-circle.png";
import { useRouter } from "next/navigation";
import completedPg from "../../../../public/icons/completedPg.png";
import arrowDown from "../../../../public/icons/Arrow-down.png";

interface FormData {
  PhoneCode: number | null;
  PhoneNum: number | null;
  Email: string;
  Country: string;
}

function StepTwo() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    PhoneCode: null,
    PhoneNum: null,
    Email: "",
    Country: "",
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]:
        name === "PhoneCode" || name === "PhoneNum"
          ? Number(value) || null
          : value,
    };

    setFormData(updatedFormData)

    if (
      updatedFormData.PhoneNum !== null &&
      updatedFormData.Email &&
      updatedFormData.Country &&
      validateEmail(updatedFormData.Email)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    router.push("/RequestDemo/stepThree");
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/RequestDemo/stepOne");
  };

  console.log(isFormValid);
  return (
    <div className="flex">
      <LoginLeftPart />
      <div className="flex flex-col items-center justify-center w-[41%] ">
        <div className="flex flex-col items-center justify-center gap-3 w-[343px]">
          <p className="text-[#404040] text-[32px] font-medium">
            Plan my Free Demo
          </p>
          <p className="text-[#757575] text-sm font-normal text-center">
            Answer 9 quick questions, and we’ll set you up with your free demo!
          </p>
          <div className="pt-4">
            <div className="relative">
              <div className=" w-[168px] h-[1px] bg-[#C9C6C3]"></div>
              <div className=" absolute w-[206px] flex items-start justify-between top-[-10px] left-[-17px]">
                <div className=" flex flex-col gap-1 items-center  ">
                  <Image src={completedPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step1</p>
                </div>
                <div className=" flex flex-col gap-1 items-center  ">
                  <Image src={currentPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step2</p>
                </div>
                <div className=" flex flex-col gap-1 items-center  ">
                  <Image src={nextPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step3</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs pt-11">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#404040] text-sm font-medium mb-2">
                  Phone Numbe
                </label>
                <div className=" relative bg-white">
                  <div
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline
                 ${formData.PhoneNum && "bg-[#EDFAF0]"}
                     border-[#D0D0D0] text-[#9E9E9E] text-sm`}
                  >
                    <select
                      name="PhoneCode"
                      value={formData.PhoneCode ?? ""}
                      onChange={handleChange}
                      className="border-r border-[#9E9E9E] focus:outline-none  bg-transparent text-[#404040] text-sm font-normal"
                    >
                      <option value="+31">+31</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Enter phone number"
                      name="PhoneNum"
                      value={formData.PhoneNum ?? ""}
                      onChange={handleChange}
                      className="pl-2  focus:outline-none focus:shadow-outline  bg-transparent text-[#404040] text-sm font-normal"
                    />
                  </div>

                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.PhoneNum && (
                      <Image
                        src={correctIcon}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[#404040] text-sm font-medium mb-2">
                  Email
                </label>
                <div className=" relative">
                  <input
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.Email &&
                      validateEmail(formData.Email) &&
                      "bg-[#EDFAF0]"
                    } border-[#D0D0D0]`}
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.Email && validateEmail(formData.Email) && (
                      <Image
                        src={correctIcon}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[#404040] text-sm font-medium mb-2">
                  Country/Region
                </label>
                <div className=" relative">
                  <select
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    className={`shadow text-[#404040] text-sm font-normal appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.Country && "bg-[#EDFAF0]"
                    } border-[#D0D0D0] `}
                  >
                    <option value="" disabled>
                      Select your Country/Region
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.Country ? (
                      <Image
                        src={correctIcon}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src={arrowDown}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleBackClick}
                  className="text-[#0F67B1] border-[#0F67B1] border  border-solid rounded-[50px] py-4 px-9 "
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={` text-center rounded-[50px] py-4 px-5 flex-1 ${
                    isFormValid
                      ? "bg-[#0F67B1] text-white"
                      : "bg-[#EDEDED] text-[#B0B0B0]"
                  }`}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
