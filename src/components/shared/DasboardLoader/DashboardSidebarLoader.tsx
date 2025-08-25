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
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { motion, type Transition } from "framer-motion";
import * as React from "react";
import { Link } from "react-router";

const DashboardSidebarLoader = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const sidebarData = [4, 3, 5];

  const transition = {
    duration: 0.8,
    ease: "linear",
    repeat: Infinity,
  } as Transition<Record<string, string>>;

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
          <SidebarMenu>
            {sidebarData.map((length, i) => (
              <SidebarMenuItem key={i}>
                <motion.div
                  initial={{ backgroundPositionX: -10 }}
                  animate={{ backgroundPositionX: 120 }}
                  transition={transition}
                  className="lg:col-span-1 rounded-lg shadow-sm h-8 flex flex-col space-y-4 bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)] w-56"
                />
                <SidebarMenuSub>
                  {Array.from({ length: length }).map((_item, i2) => (
                    <SidebarMenuSubItem key={i2}>
                      <motion.div
                        initial={{ backgroundPositionX: -10 + i2 * 10 }}
                        animate={{ backgroundPositionX: 120 + i2 * 10 }}
                        transition={transition}
                        className="lg:col-span-1 rounded-lg shadow-sm h-8 flex flex-col space-y-4 bg-[linear-gradient(90deg,_#dddddd_0%,_#eeeeee_20%,_#dddddd_40%)] dark:bg-[linear-gradient(90deg,_#333333_0%,_#444444_20%,_#333333_40%)]"
                      />
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebarLoader;
