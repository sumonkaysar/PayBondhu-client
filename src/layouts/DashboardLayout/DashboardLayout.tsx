import GuidedTour from "@/components/modules/Dashboard/GuidedTour";
import { ModeToggle } from "@/components/shared/modeToggle";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "@/layouts/DashboardLayout/DashbordSidebar";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Outlet } from "react-router";
import { toast } from "sonner";

const DashboardLayout = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      const res = await logout(null).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId });
        dispatch(authApi.util.resetApiState());
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
      console.log(error);
    }
  };

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b pr-5">
          <div className="flex justify-between items-center gap-2 px-3">
            <SidebarTrigger
              variant="outline"
              className="p-[17px]"
              style={{ cursor: "pointer" }}
              id="sidebar-toggle"
            />
            <ModeToggle />
          </div>
          <Button onClick={handleLogout} variant="destructive" id="logout-btn">
            Logout
          </Button>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
      <GuidedTour />
    </SidebarProvider>
  );
};

export default DashboardLayout;
