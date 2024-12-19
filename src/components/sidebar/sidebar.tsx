import Image from "next/image";
import { IoIosSettings } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { PiChatTeardropFill } from "react-icons/pi";
import SidebarMenu from "./sidebar-menu";

const Sidebar = () => {
  return (
    <div className="px-2 sm:w-16 bg-dark-green h-screen fixed flex items-center py-6 flex-col justify-between">
      <div className="flex flex-col gap-8 items-center">
        <SidebarMenu
          title="home"
          link="/dashboard"
          className="bg-gradient-to-tr from-[#09544D] to-[#3FDCCD]"
          logo={
            <Image
              src="/logo.svg"
              alt="wingman-dashboard-logo"
              width={18}
              height={18}
            />
          }
        />
        <div className="w-1/2  h-0.5 bg-[#134E48]"></div>
        <SidebarMenu title="home" link="/dashboard" logo={<GoHomeFill />} />
        <SidebarMenu
          title="chat"
          link="/dashboard/home/chats"
          logo={<PiChatTeardropFill />}
        />
        <SidebarMenu
          title="teams"
          link="/dashboard/teams"
          logo={<PiChatTeardropFill />}
        />
      </div>
      <div>
        <SidebarMenu
          title="teams"
          link="/dashboard/settings"
          logo={<IoIosSettings />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
