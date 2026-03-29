"use client";

import Link from "next/link";
import { useBookmarks } from "./BookmarkContext";
import { useTheme } from "./ThemeProvider";

export default function BookmarkNavButton() {
  const { bookmarks } = useBookmarks();
  const { dark } = useTheme();
  const count = bookmarks.length;

  return (
    <Link href="/bookmarks" aria-label="View bookmarks">
      <button
        title="My Bookmarks"
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
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        🔖
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              background: "#f59e0b",
              color: "#1c1917",
              borderRadius: "99px",
              fontSize: "11px",
              fontWeight: 800,
              minWidth: "18px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 4px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
              lineHeight: 1,
            }}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>
    </Link>
  );
}
