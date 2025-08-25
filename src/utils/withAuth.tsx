import DashboardLayoutLoader from "@/components/shared/DasboardLoader/DasboradLayoutLoader";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types/user.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return () => {
    const { data, isLoading } = useUserInfoQuery(null);

    if (isLoading) {
      return (
        <div className="h-screen">
          <DashboardLayoutLoader />
        </div>
      );
    }

    if (!data?.data?.phoneNumber) {
      return <Navigate to="/login" />;
    }

    if (requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
