import DashboardLoader from "@/components/shared/DasboardLoader/DashboardLoader";
import DashboardSidebarLoader from "@/components/shared/DasboardLoader/DashboardSidebarLoader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayoutLoader = () => {
  return (
    <SidebarProvider>
      <DashboardSidebarLoader />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b pr-5" />
        <DashboardLoader />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayoutLoader;
