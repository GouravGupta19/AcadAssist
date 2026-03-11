"use client";
import { useState } from "react";

export default function ListItem({ name, link }) {
  const [hover, setHover] = useState(false);

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
        backgroundColor: hover ? "#dbeafe" : "#e8f1fb",
        borderRadius: "10px",
        margin: "10px auto",
        padding: "12px",
        textAlign: "center",
        transition: "all 0.2s ease-in-out",
        maxWidth: "1200px",
        width: "90%",
        transform: hover ? "scale(1.02)" : "scale(1)",
        boxShadow: hover
          ? "0 6px 14px rgba(30,64,175,0.18)"
          : "0 2px 6px rgba(107,114,128,0.18)",
      }}
    >
      <span
        style={{
          color: hover ? "#1e40af" : "#1e3a8a",
          fontSize: "20px",
          fontWeight: "700",
          transition: "color 0.2s ease-in-out",
        }}
      >
        {name}
      </span>
    </div>
  );
}