import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("theme-dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(dark ? "theme-dark" : "theme-light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="px-4 py-2 text-xl transition-colors rounded-full border bg-theme text-theme border-gray-300"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}