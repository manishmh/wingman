import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
        <div>
            <Sidebar />
        </div>
        {children}
    </div>
  )
};

export default DashboardLayout;
