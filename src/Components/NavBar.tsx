"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import chat from "../../public/icons/chat.png";
import bell from "../../public/icons/bell.png";
import star from "../../public/icons/star.png";
import profile from "../../public/image 1.png";
import { FaPlus } from "react-icons/fa6";
import dashboard from "../../public/icons/view-grid.png";
import Groups from "../../public/icons/user-group.png";
import Individuals from "../../public/icons/user.png";
import Hotspots from "../../public/icons/status-online.png";
import AdvancedSearch from "../../public/icons/document-search.svg";
import menu from "../../public/icons/menu.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/store";
import { toggleSidebar } from "../Store/Reducers/sidebarSlice";
import ProfileDetailDropDownComponent from "./ProfileDetailDropDown";

type DropDownItem = {
  icon: React.ReactNode;
  item: string;
  link: string;
};

function NavBar() {
  const [allDropDown, setAllDropDown] = useState(false);
  const sidebarState = useSelector(
    (state: RootState) => state.sidebar.sidebarState
  );
  const dispatch = useDispatch();

  const AllDropDown: DropDownItem[] = [
    {
      item: "All",
      icon: <Image src={dashboard} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Groups",
      icon: <Image src={Groups} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Individuals",
      icon: <Image src={Individuals} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Hotspots",
      icon: <Image src={Hotspots} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Advanced Search",
      icon: <Image src={AdvancedSearch} alt="All" width={20} height={20} />,
      link: "",
    },
  ];

  const menuIcon =
    sidebarState === "full" ? (
      <Image src={menu} alt="logo" width={28} height={28} />
    ) : sidebarState === "icons" ? (
      "Hide Sidebar"
    ) : (
      "Show Full Sidebar"
    );

  const handleAllDropDown = () => {
    setAllDropDown(!allDropDown);
  };

  return (
    <div>
      <div className="flex justify-between bg-white rounded-lg p-4 shadow-md">
        <div className="flex gap-4 items-center">
          <button onClick={() => dispatch(toggleSidebar())}>{menuIcon}</button>

          <Image src={logo} alt="logo" width={40} height={40} />
          <p className="text-[#0F67B1] font-medium  text-base ">
            Youth & Safty
          </p>

          <IoIosArrowBack className="text-[#0F67B1] text-[20]" />
        </div>

        <div className="flex">
          <div className="relative inline-block text-left">
            <div className="flex border-[#E0E0E0] border-[1px] rounded-[50px]">
              <button
                className="inline-flex w-full justify-center gap-x-1.5 rounded-l-[50px] bg-[#E0E0E0] px-3 py-2 text-sm font-semibold text-[#404040] shadow-sm  hover:bg-gray-50"
                id="menu-button"
                onClick={handleAllDropDown}
              >
                All
                <IoIosArrowDown />
              </button>
              <div className=" relative  rounded-r-[50px] px-2  ">
                <input
                  placeholder="Search Here .."
                  className="h-full rounded-r-[50px] "
                />
                <div className=" absolute bottom-[10px] right-[12px] text-[#404040] text-sm">
                  <RiSearchLine />
                </div>
              </div>
            </div>
            {allDropDown ? (
              <ul className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {AllDropDown.map((item, index) => (
                  <li
                    className="flex px-4 py-3 text-sm text-gray-700 gap-3"
                    key={index}
                  >
                    <div>{item.icon}</div>

                    <p>{item.item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex  items-center gap-2 text-[#0F67B1] border-[#0F67B1] border-[1px]  rounded-[50px] py-[10px]  px-[18px]">
            <FaPlus />
            <p> Add</p>
          </div>
          <div className=" bg-[#C2C2C2] py-4 w-[1px] h-[24px]"> </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={chat} alt="chat" width={20} />
          </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={bell} alt="bell" width={20} />
          </div>
          <div className=" border-[#E0E0E0] border-[1px]  rounded-[50%] w-[48px] h-[48px] flex items-center justify-center">
            <Image src={star} alt="star" width={20} />
          </div>

          <div className=" bg-[#C2C2C2] py-4 w-[1px] h-[24px]"> </div>
          <div className="flex border-[1px] border-[#E0E0E0]  rounded-[50px] p-[6px]">
            <div>
              <Image
                src={profile}
                width={35}
                height={35}
                alt="profile"
                className=" rounded-[50%]  "
              />
            </div>

            <div>
              <ProfileDetailDropDownComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
