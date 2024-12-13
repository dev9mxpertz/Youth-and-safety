"use client";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import TopMenuBar from "./TopMenuBar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const dispatch = useDispatch();
  const sidebarState = useSelector(
    (state: RootState) => state.sidebar.sidebarState
  );

  return (
    <div>
      <NavBar />
      <div className="flex">
        {sidebarState !== "hidden" && (
          <div
            className={` transition-width  ${
              sidebarState === "full"
                ? "w-[15%] duration-300"
                : "w-[5%] duration-700 "
            }`}
          >
            <SideBar showIconsOnly={sidebarState === "icons"} />
          </div>
        )}
        <div
          className={`flex-1 ${
            sidebarState === "full"
              ? "w-[85%] py-2 pl-2   transition-all duration-700 ease-out"
              : sidebarState === "icons"
              ? "w-[95%] py-2 pl-2 transition-all duration-700 ease-out"
              : "w-full py-2 transition-all duration-700 ease-out"
          }`}
        >
          <TopMenuBar />

          {children}
        </div>
      </div>
    </div>
  );
}
