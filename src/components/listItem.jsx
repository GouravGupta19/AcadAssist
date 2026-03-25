"use client";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useBookmarks } from "./BookmarkContext";

export default function ListItem({ name, link }) {
  const [hover, setHover] = useState(false);
  const { dark } = useTheme();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(link);

  const openLink = () => {
    window.open(link, "_blank");
  };

  const toggleBookmark = (e) => {
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(link);
    } else {
      addBookmark({ name, link });
    }
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

      {/* Bookmark toggle button */}
      <button
        onClick={toggleBookmark}
        title={bookmarked ? "Remove bookmark" : "Add bookmark"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          lineHeight: 1,
          padding: "4px 6px",
          borderRadius: "6px",
          flexShrink: 0,
          width: "36px",
          transition: "transform 0.15s ease, background 0.15s ease",
          color: bookmarked
            ? "#f59e0b"
            : dark ? "#475569" : "#94a3b8",
          filter: bookmarked ? "drop-shadow(0 0 4px rgba(245,158,11,0.5))" : "none",
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
        {bookmarked ? "🔖" : "🏷️"}
      </button>
    </div>
  );
}