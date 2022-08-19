import React, { useContext } from "react";
import { ThemeContext } from "./components/providers/themeProvider";

export function Layout({ children }: { children: React.ReactNode }) {
  const context = useContext(ThemeContext);

  if (!context) return null;

  return (
    <div
      style={{
        backgroundColor: `${context.themeVariant["backgroundColor"]}`,
        width: "100%",
        height: "100%",
        minHeight: "1200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
