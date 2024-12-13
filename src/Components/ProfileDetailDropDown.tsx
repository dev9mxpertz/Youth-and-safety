"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import profile from "../../public/image 1.png";
import maximizer from "../../public/icons/maximize-4.png";
import Individuals from "../../public/icons/user.png";
import Language from "../../public/icons/globe-alt.png";
import Setting from "../../public/icons/cog.png";
import logOut from "../../public/icons/logout.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/store";
import { toggleTopMenu, toggleBothMenu } from "../Store/Reducers/settingSlice";
import { toggleSidebar } from "../Store/Reducers/sidebarSlice";
import ToggleSwitch from "./ToggleSwitch";

type DropDownItem = {
  icon: React.ReactNode;
  item: string;
  link: string;
};

function ProfileDetailDropDownComponent() {
  const [ProfileDropDown, setProfileDropDown] = useState(false);
  const isTopMenuVisible = useSelector(
    (state: RootState) => state.setting.isTopMenuVisible
  );
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sidebarState = useSelector(
    (state: RootState) => state.sidebar.sidebarState
  );
  const dispatch = useDispatch();

  const ProfileDetailDropDown: DropDownItem[] = [
    {
      item: "Account",
      icon: <Image src={Individuals} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Language: English",
      icon: <Image src={Language} alt="All" width={20} height={20} />,
      link: "",
    },
    {
      item: "Settings",
      icon: <Image src={Setting} alt="All" width={20} height={20} />,
      link: "",
    },
  ];

  const handleProfileDropDown = () => {
    setProfileDropDown(!ProfileDropDown);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.error(`Failed to enter fullscreen mode: ${err.message}`);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.error(`Failed to exit fullscreen mode: ${err.message}`);
        });
    }
  };
  return (
    <div>
      <div className="relative inline-block text-left  ">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-[50%] bg-white px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleProfileDropDown}
          >
            <IoIosArrowDown />
          </button>
        </div>
        {ProfileDropDown ? (
          <ul className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
              <Image
                src={profile}
                width={35}
                height={35}
                alt="profile"
                className=" rounded-[50%]  "
              />
              <div>
                <p className=" text-base font-medium">John Doe</p>
                <p className="text-[#757575] text-xs ">johndoe@gmail.com</p>
              </div>
            </li>

            <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
              <p>Dark / Light modus</p>
              <div>
                <ToggleSwitch/>
              </div>
            </li>

            <button onClick={toggleFullscreen} className="w-full">
              <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                <div>
                  <Image src={maximizer} alt="All" width={20} height={20} />
                </div>
                <p>{isFullscreen ? "Default screen" : "Full screen"}</p>
              </li>
            </button>

            {ProfileDetailDropDown.map((item, index) => (
              <li
                className="flex px-4 py-3 text-sm text-gray-700 gap-3"
                key={index}
              >
                <div>{item.icon}</div>
                <p>{item.item}</p>
              </li>
            ))}
            <button
              onClick={() => dispatch(toggleTopMenu())}
              className="w-full"
            >
              <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                <div>
                  <Image src={Setting} alt="All" width={20} height={20} />
                </div>

                <p>{isTopMenuVisible ? "Hide Top Menu" : "Show Top Menu"}</p>
              </li>
            </button>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="w-full"
            >
              <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                <div>
                  <Image src={Setting} alt="All" width={20} height={20} />
                </div>
                <p>
                  {sidebarState === "full"
                    ? "Hide Side Menu"
                    : sidebarState === "icons"
                    ? "Hide Side Menu"
                    : "Show  Sidebar"}
                </p>
              </li>
            </button>

            <button
              onClick={() => dispatch(toggleBothMenu())}
              className="w-full"
              disabled={
                sidebarState === "full" ||
                sidebarState === "icons" ||
                isTopMenuVisible
              }
            >
              <li className="flex px-4 py-3 text-sm text-gray-700 gap-3">
                <div>
                  <Image src={Setting} alt="All" width={20} height={20} />
                </div>
                <div>
                  <div>
                    {sidebarState === "full" ||
                    sidebarState === "icons" ||
                    isTopMenuVisible ? (
                      <p className="line-through">Hide Both Menu</p>
                    ) : (
                      <p>Show Both Menu</p>
                    )}
                  </div>
                </div>
              </li>
            </button>

            <li className="flex px-4 py-3 text-sm text-[#CB3A31] gap-3">
              <Image src={logOut} alt="logOut" width={20} height={20} />
              <p>Logout</p>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProfileDetailDropDownComponent;
