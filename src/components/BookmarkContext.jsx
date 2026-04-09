"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
  isBookmarked: () => false,
});

export function useBookmarks() {
  return useContext(BookmarkContext);
}

export default function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("acadassist_bookmarks");
      if (stored) setBookmarks(JSON.parse(stored));
    } catch {
      // Ignore parse errors
    }
    setMounted(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("acadassist_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks, mounted]);

  const addBookmark = (item) => {
    setBookmarks((prev) => {
      if (prev.some((b) => b.link === item.link)) return prev;
      return [...prev, item];
    });
  };

  const removeBookmark = (link) => {
    setBookmarks((prev) => prev.filter((b) => b.link !== link));
  };

  const isBookmarked = (link) => bookmarks.some((b) => b.link === link);

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}
