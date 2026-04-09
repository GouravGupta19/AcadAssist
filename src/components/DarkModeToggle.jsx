"use client";

import { useTheme } from "./ThemeProvider";

export default function DarkModeToggle() {
  const { dark, toggleDark } = useTheme();

  return (
    <button
      onClick={toggleDark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        background: dark
          ? "rgba(255,255,255,0.12)"
          : "rgba(0,0,0,0.08)",
        backdropFilter: "blur(8px)",
        boxShadow: dark
          ? "0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 2px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease",
        color: dark ? "#fbbf24" : "#1e293b",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
