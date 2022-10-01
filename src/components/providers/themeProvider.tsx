import { type } from "@testing-library/user-event/dist/type";
import React, { ReactNode, useState, useContext } from "react";
import { ReactComponent as LightThemeButton } from "./light.svg";
import { ReactComponent as DarkThemeButton } from "./moon.svg";

const ThemeVariants = {
  Dark: {
    backgroundColor: "black",
    textColor: "white",
    headerBackground: "#242426",
  },
  Light: {
    backgroundColor: "white",
    textColor: "black",
    headerBackground: "#000033",
  },
};

/// типизация контекста темы:
interface ThemeType {
  themeVariant: typeof ThemeVariants.Dark | typeof ThemeVariants.Light;
  setThemeVariant: (
    themeVariant: typeof ThemeVariants.Dark | typeof ThemeVariants.Light
  ) => void;
}

/// создание контекста темы:
export const ThemeContext = React.createContext<ThemeType>({
  themeVariant: ThemeVariants.Dark,
  setThemeVariant: () => {},
});

/// создание провайдера темы:
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeVariant, setThemeVariant] = useState(ThemeVariants.Dark);

  return (
    <ThemeContext.Provider value={{ themeVariant, setThemeVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};

// компонент с кнопкой переключения темы:
export function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { themeVariant, setThemeVariant } = context;

  return (
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
      }}
      onClick={() => {
        setThemeVariant(
          themeVariant === ThemeVariants.Dark
            ? ThemeVariants.Light
            : ThemeVariants.Dark
        );
      }}
    >
      {themeVariant === ThemeVariants.Dark ? (
        <DarkThemeButton />
      ) : (
        <LightThemeButton />
      )}
    </button>
  );
}
