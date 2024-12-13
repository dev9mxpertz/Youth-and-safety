"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon from "../../public/icons/user-group.png";
import arrow from "../../public/icons/Arrow-down.png";
import pinIcon from "../../public/icons/pin.png";
import eye from "../../public/icons/eye.png";
import DropDown from "./DropDown";
import filter from "../../public/icons/filter.png";
import chartIcon from "../../public/icons/chart-pie.png";
import settingicon from "../../public/icons/cog.png";


const EyeIcon = () => <Image src={eye} alt="icon" width={20} height={20} />;

const FilterIcon = () => (
  <Image src={filter} alt="icon" width={20} height={20} />
);
const ChartIcon = () => (
  <Image src={chartIcon} alt="icon" width={20} height={20} />
);
const SettingIcon = () => (
  <Image src={settingicon} alt="icon" width={20} height={20} />
);

function TableHead() {
  const AllDropDown = [
    {
      heading: "Show/Hide Columns",
      Iconprop: EyeIcon,
      DataArray: [
        {
          item: "Show Group Name",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Group Status",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Group Fase",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Director",
          icon: EyeIcon,
          link: "",
        },
      ],
    },
    {
      heading: "Filter",
      Iconprop: FilterIcon,
      DataArray: [
        {
          item: "Show Group Name",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Group Status",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Group Fase",
          icon: EyeIcon,
          link: "",
        },
        {
          item: "Show Director",
          icon: EyeIcon,
          link: "",
        },
      ],
    },
    {
      heading: "Diagram",
      Iconprop: ChartIcon,
      DataArray: [
        {
          item: "Show Group Name",
          icon: EyeIcon,
          link: "",
        },
      ],
    },
    {
      heading: "Setting",
      Iconprop: SettingIcon,
      DataArray: [
        {
          item: "Show Group Name",
          icon: EyeIcon,
          link: "",
        },
      ],
    },
  ];

  const [dropDownVisibility, setDropDownVisibility] = useState<boolean[]>(
    AllDropDown.map(() => false)
  );

  

  const handleToggleDropDown = (index: number) => {
    setDropDownVisibility((prev) => {
      const newVisibility = [...prev];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={20} height={20} />
        <p className="text-[#404040]"> Groups </p>
      </div>
      <div className="flex justify-between items-center">
        <div className=" flex items-center gap-4">
          <p className=" text-[32px] font-medium text-[#404040] ">All Groups</p>
          <Image src={arrow} alt="dropDown" width={20} height={20} />
          <div className="border-[#EDEDED]  border-[1px] rounded-[50%] p-2">
            <Image src={pinIcon} alt="dropDown" width={20} height={20} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {AllDropDown.map((item, index) => (
            <div key={index}>
              <DropDown
                heading={item.heading}
                Iconprop={item.Iconprop}
                DataArray={item.DataArray}
                showDropDown={dropDownVisibility[index]}
                setShowDropDown={() => handleToggleDropDown(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableHead;
