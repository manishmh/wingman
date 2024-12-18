import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        {children}
    </div>
  )
};

export default DashboardLayout;
