"use client";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ContributorItem({ name, link }) {
  const [hover, setHover] = useState(false);
  const { dark } = useTheme();

  const openLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={openLink}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        backgroundColor: hover
          ? dark ? "#1e3a5f" : "#dbeafe"
          : dark ? "#1e293b" : "#e8f1fb",
        borderRadius: "10px",
        margin: "10px auto",
        padding: "12px 16px",
        textAlign: "center",
        transition: "all 0.2s ease-in-out",
        maxWidth: "1200px",
        width: "90%",
        transform: hover ? "scale(1.02)" : "scale(1)",
        boxShadow: hover
          ? "0 6px 14px rgba(30,64,175,0.18)"
          : dark
          ? "0 2px 6px rgba(0,0,0,0.4)"
          : "0 2px 6px rgba(107,114,128,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {/* Spacer to keep name centered */}
      <span style={{ width: "36px", flexShrink: 0 }} />

      <span
        style={{
          color: hover
            ? dark ? "#93c5fd" : "#1e40af"
            : dark ? "#bfdbfe" : "#1e3a8a",
          fontSize: "20px",
          fontWeight: "700",
          transition: "color 0.2s ease-in-out",
          flex: 1,
        }}
      >
        {name}
      </span>

      {/* LinkedIn icon */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        title="LinkedIn Profile"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
          flexShrink: 0,
          borderRadius: "6px",
          transition: "transform 0.15s ease, background 0.15s ease",
          color: "#0a66c2",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.2)";
          e.currentTarget.style.background = dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "none";
        }}
      >
        {/* LinkedIn SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}
