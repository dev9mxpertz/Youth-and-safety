"use client";

import React from "react";
import {SideBarDetails} from "../data/sidebarData"
import Image from "next/image";
import reload from "../../public/icons/refresh.png";
import { useState } from "react";
import arrowUp from "../../public/icons/Arrow-up.png";
import arrowDown from "../../public/icons/Arrow-down.png";

type SideBarProps = {
  showIconsOnly: boolean;
};

function SideBar(props: SideBarProps) {
  const { showIconsOnly } = props;

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    General: true,
    Management: true,
    Productivity: true,
    Other: true,
  });


  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div>
      <div className=" flex flex-col gap-2 py-2">
        <div >
          <div className="flex bg-white rounded-xl items-center justify-center py-3 px-3 shadow-md">
            {showIconsOnly ? (
              <Image src={reload} width={20} height={20} alt="refresh" />
            ) : (
              <>
                <Image src={reload} width={20} height={20} alt="refresh" />
                <p className="text-[#757575] text-sm ">Updated 6 minutes ago</p>
              </>
            )}
          </div>
        </div>

        {SideBarDetails.map((section, index) => (
          <div key={index} className=" bg-white rounded-xl py-1 shadow-md">
            <div
              className={`flex ${
                showIconsOnly ? " justify-center " : " justify-between "
              } items-center cursor-pointer py-2 px-3 `}
              onClick={() => toggleSection(section.type)}
            >
              {showIconsOnly ? (
                <Image
                  src={expandedSections[section.type] ? arrowUp : arrowDown}
                  alt="toggle"
                  width={20}
                  height={20}
                />
              ) : (
                <>
                  <h3 className="font-semibold text-[#757575] text-[12px]">
                    {section.type}
                  </h3>
                  <Image
                    src={expandedSections[section.type] ? arrowUp : arrowDown}
                    alt="toggle"
                    width={20}
                    height={20}
                  />
                </>
              )}
            </div>

            <ul
              className={`overflow-hidden transition-all duration-300 ease-in-out `}
              style={{
                maxHeight: expandedSections[section.type]
                  ? `${section.data.length * 80}px`
                  : "0",
              }}
            >
              {section.data.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center ${
                    showIconsOnly ? "justify-center" : " justify-start"
                  } gap-4 py-5 px-3  hover:bg-gray-100  transition`}
                >
                  {showIconsOnly ? (
                    <div>
                      <Image src={item.icon} alt="All" width={20} height={20} />
                    </div>
                  ) : (
                    <>
                      <Image src={item.icon} alt="All" width={20} height={20} />
                      <p className="text-[#404040] text-sm font-normal">
                        {item.item}
                      </p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

