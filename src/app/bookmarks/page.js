"use client";

import { useBookmarks } from "@/components/BookmarkContext";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import BookmarkNavButton from "@/components/BookmarkNavButton";

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();
  const { dark } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: dark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e293b 0%, #1e3a5f 100%)",
          padding: "0 2rem",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        {/* Bookmark nav button — top-left */}
        <div style={{ position: "absolute", top: "18px", left: "16px" }}>
          <BookmarkNavButton />
        </div>

        {/* Centered title */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "28px" }}>🔖</span>
          <h1
            style={{
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            My Bookmarks
          </h1>
        </div>

        {/* Right side: back link + dark mode toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", position: "absolute", top: "18px", right: "16px" }}>
          <Link
            href="/dashboard"
            style={{
              color: "#93c5fd",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: "rgba(255,255,255,0.08)",
              padding: "8px 18px",
              borderRadius: "8px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "background 0.2s",
            }}
          >
            ← Back to Dashboard
          </Link>
          <DarkModeToggle />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        {bookmarks.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "5rem",
              color: dark ? "#64748b" : "#94a3b8",
            }}
          >
            <div style={{ fontSize: "64px", marginBottom: "1rem" }}>🔖</div>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: dark ? "#475569" : "#94a3b8",
                margin: 0,
              }}
            >
              No bookmarks yet
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: dark ? "#334155" : "#cbd5e1",
                marginTop: "0.5rem",
              }}
            >
              Click the 🔖 icon next to any resource to save it here.
            </p>
          </div>
        ) : (
          <>
            <p
              style={{
                color: dark ? "#64748b" : "#94a3b8",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {bookmarks.length} saved resource{bookmarks.length !== 1 ? "s" : ""}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {bookmarks.map((bm) => (
                <div
                  key={bm.link}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: dark
                      ? "rgba(30,41,59,0.85)"
                      : "rgba(255,255,255,0.85)",
                    border: dark
                      ? "1px solid rgba(99,179,237,0.12)"
                      : "1px solid rgba(203,213,225,0.7)",
                    borderRadius: "12px",
                    padding: "14px 20px",
                    backdropFilter: "blur(10px)",
                    boxShadow: dark
                      ? "0 2px 12px rgba(0,0,0,0.3)"
                      : "0 2px 12px rgba(0,0,0,0.06)",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = dark
                      ? "0 6px 20px rgba(0,0,0,0.45)"
                      : "0 6px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = dark
                      ? "0 2px 12px rgba(0,0,0,0.3)"
                      : "0 2px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Link text */}
                  <button
                    onClick={() => window.open(bm.link, "_blank")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      flex: 1,
                      padding: 0,
                      color: dark ? "#bfdbfe" : "#1e40af",
                      fontSize: "1rem",
                      fontWeight: 700,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = dark ? "#93c5fd" : "#1d4ed8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = dark ? "#bfdbfe" : "#1e40af";
                    }}
                  >
                    <span style={{ marginRight: "0.5rem", opacity: 0.6 }}>🔗</span>
                    {bm.name}
                  </button>

                  {/* Remove button */}
                  <button
                    onClick={() => removeBookmark(bm.link)}
                    title="Remove bookmark"
                    style={{
                      marginLeft: "1rem",
                      background: "none",
                      border: "1px solid transparent",
                      cursor: "pointer",
                      color: dark ? "#ef4444" : "#dc2626",
                      fontSize: "1rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      padding: "4px 10px",
                      transition: "background 0.2s, border-color 0.2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(239,68,68,0.12)";
                      e.currentTarget.style.borderColor = "rgba(239,68,68,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
