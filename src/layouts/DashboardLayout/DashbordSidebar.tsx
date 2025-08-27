import Logo from "@/assets/images/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types/user.type";
import { getSidebarItems } from "@/utils/getSidebarItems";
import * as React from "react";
import { Link, useLocation } from "react-router";

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { data } = useUserInfoQuery(null);
  const location = useLocation();

  const userData = data?.data;

  const sidebarData = {
    navMain: getSidebarItems(userData?.role as TRole),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu id="nav-menu">
            {sidebarData.navMain.map((section) => (
              <SidebarMenuItem key={section.title}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-transparent active:bg-transparent"
                  isActive={section.items.some(
                    (item) => location.pathname === item.url
                  )}
                >
                  <span className="font-medium">{section.title}</span>
                </SidebarMenuButton>
                {section.items?.length ? (
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={location.pathname === item.url}
                        >
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
