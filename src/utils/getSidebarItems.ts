import { Role } from "@/consts/auth.const";
import { agentSidebarItems } from "@/routes/agent.route";
import { userSidebarItems } from "@/routes/user.route";
import type { TRole } from "@/types";

export const getSidebarItems = (role: TRole) => {
  switch (role) {
    case Role.USER:
      return userSidebarItems;

    case Role.AGENT:
      return agentSidebarItems;

    default:
      return [];
  }
};
