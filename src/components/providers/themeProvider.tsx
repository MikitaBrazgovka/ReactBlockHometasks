import { type } from "@testing-library/user-event/dist/type";
import React, { ReactNode, useState, useContext, Dispatch } from "react";

enum ThemeVariants {
  Dark = "dark",
  Light = "light",
}

/// типизация контекста темы:
interface ThemeType {
  themeVariant: ThemeVariants.Dark | ThemeVariants.Light;
  setThemeVariant: (
    themeVariant: ThemeVariants.Dark | ThemeVariants.Light
  ) => void;
}

/// создание контекста темы:
const ThemeContext = React.createContext<ThemeType | null>(null);

/// создание провайдера темы:
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeVariant, setThemeVariant] = useState(ThemeVariants.Dark);

  return (
    <ThemeContext.Provider value={{ themeVariant, setThemeVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};
