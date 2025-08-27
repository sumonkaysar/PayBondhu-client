export const Role = {
  ADMIN: "ADMIN",
  AGENT: "AGENT",
  USER: "USER",
};

export const UserStatus = {
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
  SUSPENDED: "SUSPENDED",
  DELETED: "DELETED",
};

export const UserTabs = [
  {
    label: "All Users",
    value: "all",
  },
  {
    label: "Agents",
    value: Role.AGENT,
  },
  {
    label: "Users",
    value: Role.USER,
  },
];
