"use client";
import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdEyeOff } from "react-icons/io";
import eye from "../../../../public/icons/eye.png";
import RequestDemoComponent from "@/Components/RequestDemoComponent";
import { GiPlainCircle } from "react-icons/gi";
import { useRouter } from "next/navigation";

function CreatePassword() {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [agreeTnC, setAgreeTnC] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassowrd, setShowConfirmPassword] =
    useState<boolean>(false);
  //const [allconditionMet, setAllConsitionMet] = useState<boolean>(false);
  const [hasStartedTyping, setHasStartedTyping] = useState<boolean>(false);
  //const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const [hasStartedTypingConfirmpw, setHasStartedTypingConfirmpw] =
    useState<boolean>(false);
  const [conditions, setConditions] = useState({
    minChars: false,
    twoCaps: false,
    numOrSymbol: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    // Update typing state
    if (!hasStartedTyping) setHasStartedTyping(true);

    // Update conditions
    const isValid = {
      //minChars: enteredPassword.length >= 8,
      minChars: enteredPassword.length + 1 >= 8,
      twoCaps: (enteredPassword.match(/[A-Z]/g) || []).length >= 2,
      numOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(enteredPassword),
    };

    setConditions(isValid);

    if (conditions.minChars && conditions.twoCaps && conditions.numOrSymbol) {
     // setAllConsitionMet(true);
      setHasStartedTyping(false);
    }
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassowrd);
  };

  const getConditionTextColor = (conditionMet: boolean) => {
    if (conditionMet) return "text-[#4CAF50]";
    if (hasStartedTyping) return "text-[#CB3A31]";
    return "text-[#9E9E9E]";
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = e.target.value;
    //setConfirmPassword(enteredPassword);

    if (!hasStartedTypingConfirmpw) setHasStartedTypingConfirmpw(true);
    if (password === enteredPassword) {
      setHasStartedTypingConfirmpw(false);
      setPasswordMatch(true);
    }
  };

  const handleSubmitConfirmPassword = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault(); // Prevent the default behavior
    router.push("/SignInPage/SuccessNewPassword");
  };

  return (
    <div className="flex">
      <LoginLeftPart />
      <div className="flex flex-col items-center justify-center w-[41%] gap-3">
        <p className="text-[#404040] text-[32px] font-medium">New password</p>
        <p className="text-[#757575] text-sm font-normal">
          Welcome! Enter your details.
        </p>

        <div className="w-full max-w-xs pt-8">
          <form>
            <div className="mb-4">
              <label className="block text-[#404040] text-sm font-medium mb-2">
                New password
              </label>
              <div className="relative">
                <input
                  className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                    hasStartedTyping
                      ? "border-[#CB3A31]"
                      : conditions.minChars &&
                        conditions.numOrSymbol &&
                        conditions.twoCaps
                      ? "bg-[#EDFAF0]  border-[#43936C]"
                      : ""
                  } `}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                <div className="absolute top-0 right-0 h-full flex items-center pr-3">
                  <button type="button" onClick={handleIconClick}>
                    {showPassword ? (
                      <IoMdEyeOff className="text-[#404040] text-[20px]" />
                    ) : (
                      <Image src={eye} alt="icon" width={20} height={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-1 pb-5">
                <li className="flex items-center gap-2">
                  <GiPlainCircle
                    className={`text-[6px] font-medium ${getConditionTextColor(
                      conditions.minChars
                    )}`}
                  />
                  <p
                    className={`text-[12px] font-medium ${getConditionTextColor(
                      conditions.minChars
                    )}`}
                  >
                    Minimum 8 characters.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <GiPlainCircle
                    className={`text-[6px] font-medium ${getConditionTextColor(
                      conditions.twoCaps
                    )}`}
                  />
                  <p
                    className={`text-[12px] font-medium ${getConditionTextColor(
                      conditions.twoCaps
                    )}`}
                  >
                    Minimum 2 capital letters.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <GiPlainCircle
                    className={`text-[6px] font-medium ${getConditionTextColor(
                      conditions.numOrSymbol
                    )}`}
                  />
                  <p
                    className={`text-[12px] font-medium ${getConditionTextColor(
                      conditions.numOrSymbol
                    )}`}
                  >
                    Contains a number or a symbol.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <label className="block text-[#404040] text-sm font-medium mb-2">
                Confirm password
              </label>
              <div className=" relative">
                <input
                  className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                    hasStartedTypingConfirmpw
                      ? "border-[#CB3A31]"
                      : passwordMatch
                      ? "bg-[#EDFAF0]  border-[#43936C]"
                      : ""
                  }`}
                  type={`${showConfirmPassowrd ? "text" : "password"}`}
                  placeholder="Enter your password"
                  onChange={handleConfirmPassword}
                  disabled={passwordMatch}
                />
                <div className=" absolute top-0 right-0 h-full flex items-center pr-3">
                  <button onClick={handleConfirmPasswordIconClick}>
                    {showConfirmPassowrd ? (
                      <IoMdEyeOff className="text-[#404040] text-[20px]" />
                    ) : (
                      <Image src={eye} alt="icon" width={20} height={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pb-7">
              <div className="flex gap-2">
                <input type="checkbox" onClick={() => setAgreeTnC(!agreeTnC)} />
                <p className="text-[#404040] text-sm font-medium">
                  <span className="text-[#757575] font-normal">
                    I agree to the
                  </span>{" "}
                  Terms and Conditions
                </p>
              </div>
            </div>
            <button
              type="submit"
              className={`w-[315px] ${
                Object.values(conditions).every(Boolean) &&
                passwordMatch &&
                agreeTnC
                  ? "text-[#FFFFFF] bg-[#0F67B1]"
                  : "text-[#B0B0B0] bg-[#EDEDED]"
              } text-center rounded-[50px] py-4 px-5`}
              disabled={
                !Object.values(conditions).every(Boolean) &&
                !passwordMatch &&
                !agreeTnC
              }
              onClick={handleSubmitConfirmPassword}
            >
              Confirm password
            </button>
          </form>
        </div>
        <div>
          <RequestDemoComponent />
        </div>
      </div>
    </div>
  );
}
export default CreatePassword;
