"use client";

import { useSidebar } from "@/context/sidebar-context";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

const ToggleMenu = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center  text-2xl cursor-pointer md:hidden" onClick={toggleSidebar}>
      {sidebarOpen ? <IoCloseSharp /> : <RiMenu3Line />}
    </div>
  );
};

export default ToggleMenu;
