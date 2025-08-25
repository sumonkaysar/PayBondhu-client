import { Role } from "@/consts/user.const";
import { adminSidebarItems } from "@/routes/admin.route";
import { agentSidebarItems } from "@/routes/agent.route";
import { userSidebarItems } from "@/routes/user.route";
import type { TRole } from "@/types/user.type";

export const getSidebarItems = (role: TRole) => {
  switch (role) {
    case Role.USER:
      return userSidebarItems;

    case Role.AGENT:
      return agentSidebarItems;

    case Role.ADMIN:
      return adminSidebarItems;

    default:
      return [];
  }
};
