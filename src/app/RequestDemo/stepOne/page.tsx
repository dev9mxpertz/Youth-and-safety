"use client";

import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import currentPg from "../../../../public/icons/currentstep.png";
import nextPg from "../../../../public/icons/nextstep.png";
import Image from "next/image";
import correctIcon from "../../../../public/icons/check-circle.png";
import { useRouter } from "next/navigation";

function StepOne() {
    const router = useRouter();

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      jobTitle: "",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const updatedFormData = { ...formData, [name]: value };
      setFormData(updatedFormData);

      // Check if all fields are filled
      const allFieldsFilled = Object.values(updatedFormData).every(
        (field) => field.trim() !== ""
      );
      setIsFormValid(allFieldsFilled);
    };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
        router.push("/RequestDemo/stepTwo");
      };

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
                  <Image src={currentPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step1</p>
                </div>
                <div className=" flex flex-col gap-1 items-center  ">
                  <Image src={nextPg} alt="step1" width={20} height={20} />
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
                  First Name
                </label>
                <div className=" relative">
                  <input
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.firstName && "bg-[#EDFAF0]"
                    } border-[#D0D0D0]text-[#404040] text-sm font-normal`}
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.firstName && (
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
                  Last Name
                </label>
                <div className=" relative">
                  <input
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.lastName && "bg-[#EDFAF0]"
                    } border-[#D0D0D0] text-[#404040] text-sm font-normal `}
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.lastName && (
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
                  Job Title
                </label>
                <div className=" relative">
                  <input
                    className={`shadow text-[#404040] text-sm font-normal appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.jobTitle && "bg-[#EDFAF0] "
                    } border-[#D0D0D0] `}
                    type="text"
                    name="jobTitle"
                    placeholder="Enter your job title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.jobTitle && (
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

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-[315px] text-center rounded-[50px] py-4 px-5 ${
                  isFormValid
                    ? "bg-[#0F67B1] text-white"
                    : "bg-[#EDEDED] text-[#B0B0B0]"
                }`}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
