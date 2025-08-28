import { useState, useEffect } from "react";
import {Sun,Moon} from "lucide-react"

export default function ThemeToggle() {
  // Load saved theme or default to light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // Apply theme to <html>
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(`theme-${theme}`);

    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-2 py-2 rounded-full border text-theme-1 cursor-pointer transition"
    >
      {theme === "light" ? <Sun size={20} /> :<Moon size={20} />}
    </button>
  );
}