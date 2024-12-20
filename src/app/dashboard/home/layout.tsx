import HomeMenu from "@/components/home/menu";
import ToggleMenu from "@/components/sidebar/toggle-menu";
import { ReactNode } from "react";
import {
  PiChartPieSliceFill,
  PiChatCircleTextFill,
  PiTagFill,
} from "react-icons/pi";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sm:ml-16 w-full">
      <div className="border-b">
        <div className="flex gap px-4 md:px-10 py-3 md:py-5">
          <HomeMenu
            link="/dashboard/home/summary"
            title="Summary"
            logo={<PiChartPieSliceFill />}
          />
          <HomeMenu
            link="/dashboard/home/sales"
            title="Sales"
            logo={<PiTagFill />}
          />
          <HomeMenu
            link="/dashboard/home/chats"
            title="Chats"
            logo={<PiChatCircleTextFill />}
          />
          <ToggleMenu />
        </div>
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
