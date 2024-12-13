"use client";

import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import currentPg from "../../../../public/icons/currentstep.png";

import Image from "next/image";
import correctIcon from "../../../../public/icons/check-circle.png";
import { useRouter } from "next/navigation";
import completedPg from "../../../../public/icons/completedPg.png";
import arrowDown from "../../../../public/icons/Arrow-down.png";

interface FormData {
  Company: string;
  Employees: string;
  Companylanguage: string;
}

function StepThree() {
  const router = useRouter();
  const [serviceAgrmnt, setServiceAgrmnt] = useState<boolean>(false);
  const [marketingCheck , setMarketingCheck]= useState<boolean>(false)

  const [formData, setFormData] = useState<FormData>({
    Company: "",
    Employees: "",
    Companylanguage: "",
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled and email is valid

    if (
      updatedFormData.Company &&
      updatedFormData.Employees &&
      updatedFormData.Companylanguage &&
      serviceAgrmnt && marketingCheck
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    router.push("/RequestDemo/RequestSucess");
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/RequestDemo/stepTwo");
  };

  console.log(isFormValid);
  return (
    <div className="flex ">
      <LoginLeftPart />
      <div className="flex flex-col items-center justify-center w-[41%] py-7 ">
        <div className="flex flex-col items-center justify-center gap-3 w-[343px]">
          <p className="text-[#404040] text-[32px] font-medium">
            Plan my Free Demo
          </p>
          <p className="text-[#757575] text-sm font-normal text-center">
            Answer 9 quick questions, and we&apos;ll set you up with your free
            demo!
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
                  <Image src={completedPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step2</p>
                </div>
                <div className=" flex flex-col gap-1 items-center  ">
                  <Image src={currentPg} alt="step1" width={20} height={20} />
                  <p className="text-[#0F67B1] font-normal text-sm">step3</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs pt-11">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#404040] text-sm font-medium mb-2">
                  Company
                </label>
                <div className=" relative bg-white">
                  <input
                    type="text"
                    placeholder="Enter Company name"
                    name="Company"
                    value={formData.Company}
                    onChange={handleChange}
                    className={`shadow appearance-none text-[#404040] text-sm font-normal border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline
                 ${formData.Company && "bg-[#EDFAF0]"}
                     border-[#D0D0D0] `}
                  />

                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.Company && (
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
                  Employees
                </label>
                <div className=" relative">
                  <select
                    name="Employees"
                    value={formData.Employees}
                    onChange={handleChange}
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.Employees && "bg-[#EDFAF0]"
                    } border-[#D0D0D0]`}
                  >
                    <option value="" disabled>
                      Select the amount of employees
                    </option>
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="10-50 employees">10-50 employees</option>
                    <option value="50-100 employees">50-100 employees</option>
                    <option value="More">More</option>
                  </select>
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.Employees ? (
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
              <div className="mb-4">
                <label className="block text-[#404040] text-sm font-medium mb-2">
                  Employees
                </label>
                <div className=" relative">
                  <select
                    name="Companylanguage"
                    value={formData.Companylanguage}
                    onChange={handleChange}
                    className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                      formData.Companylanguage && "bg-[#EDFAF0]"
                    } border-[#D0D0D0]`}
                  >
                    <option value="" disabled>
                      Company language
                    </option>
                    <option value="1-10 employees">English</option>
                    <option value="10-50 employees">Dutch</option>
                  </select>
                  <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
                    {formData.Companylanguage ? (
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
              <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    onClick={() => setServiceAgrmnt(true)}
                  />
                  <p className="text-[#404040] text-sm font-normal">
                    I agree to the{" "}
                    <span className="text-[#0F67B1] cursor-pointer">
                      Main Services Agreement.
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    onClick={() => setMarketingCheck(true)}
                  />
                  <p className="text-[#404040] text-sm font-normal ">
                    Yes, I want to receive marketing communications about
                    [organization]&apos;s products, services, and events. I can
                    unsubscribe at any time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-[#616161] text-[12px] font-normal">
                    Your free demo may be provisioned on or migrated to
                    Hyperforce, [company name] public cloud infrastructure.
                  </p>
                  <p className="text-[#616161] text-[12px] font-normal">
                    By registering, you agree to the processing of your personal
                    data by [company name] as described in the
                    <span className="text-[#0F67B1] cursor-pointer">
                      Privacy Statement.
                    </span>
                     
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-5">
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

export default StepThree;
