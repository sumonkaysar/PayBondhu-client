import type { ThemeProviderState } from "@/types/theme.type";
import { createContext } from "react";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};
export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
