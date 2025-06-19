import * as React from "react";
import { Switch } from "./switch";

export function ThemeSwitch() {
  const [isDark, setIsDark] = React.useState(false);
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    // Detecta el tema inicial
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    console.log("ThemeSwitch mounted, initial isDark:", isDark);
  }, []);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("ThemeSwitch toggled, isDark:", isDark);
  }, [isDark]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 12 }}>{isDark ? "🌙" : "☀️"}</span>
      <Switch checked={isDark} onCheckedChange={setIsDark} />
    </div>
  );
}
