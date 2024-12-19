import HomeMenu from "@/components/home/menu";
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
        <div className="flex gap-4 px-4 md:px-10 py-4 md:py-6">
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
        </div>
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;