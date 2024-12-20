import Sidebar from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/context/sidebar-context";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex overflow-hidden w-full">
        <Sidebar />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
