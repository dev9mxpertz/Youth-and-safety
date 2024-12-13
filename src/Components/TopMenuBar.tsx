import React, { useState } from "react";
import { SideBarDetails } from "../data/sidebarData";
import arrowUp from "../../public/icons/Arrow-up.png";
import arrowDown from "../../public/icons/Arrow-down.png";
import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

function TopMenuBar() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    General: false,
    Management: false,
    Productivity: false,
    Other: false,
  });
  const isTopMenuVisible = useSelector(
    (state: RootState) => state.setting.isTopMenuVisible
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {isTopMenuVisible && (
        <div className="flex items-start justify-between pb-2  transition-all duration-300 ease-in-out ">
          {SideBarDetails.map((section, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl py-1 shadow-md w-[18%] relative"
            >
              <div
                className={`flex  " justify-between "
            items-center cursor-pointer py-2 px-3 `}
                onClick={() => toggleSection(section.type)}
              >
                <h3 className="font-semibold text-[#757575] text-[12px]">
                  {section.type}
                </h3>
                <Image
                  src={expandedSections[section.type] ? arrowUp : arrowDown}
                  alt="toggle"
                  width={20}
                  height={20}
                />
              </div>
              {expandedSections[section.type] ? (
                <ul
                  className={`overflow-hidden rounded-xl shadow-xl transition-all duration-300 ease-in-out absolute z-10 bg-white w-full `}
                >
                  {section.data.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center  justify-start
                gap-4 py-5 px-3  hover:bg-gray-100  transition`}
                    >
                      <Image src={item.icon} alt="All" width={20} height={20} />
                      <p className="text-[#404040] text-sm font-normal">
                        {item.item}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))}

          <div className=" bg-white rounded-xl py-1 shadow-md w-[18%] relative">
            <div
              className={`flex  " justify-between "
            items-center cursor-pointer py-2 px-3 `}
              // onClick={() => toggleSection(section.type)}
            >
              <h3 className="font-semibold text-[#757575] text-[12px]">
                Add own menu items
              </h3>
              <MdAdd className="text-[20px] text-[#0F67B1]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TopMenuBar;
