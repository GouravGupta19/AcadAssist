import Link from "next/link";
import "./style.css";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import BookmarkNavButton from "@/components/BookmarkNavButton";

export default function Home() {
  return (
    <main className="main-container" style={{ paddingBottom: '64px' }}>
      <header className="header" style={{ position: "relative", width: "100%", paddingTop: "3.5rem" }}>
        {/* Bookmark button — top-left */}
        <div style={{ position: "absolute", top: "0", left: "0" }}>
          <BookmarkNavButton />
        </div>

        <h1 className="title">AcadAssist</h1>
        <p className="subtitle">Explore academic resources and contribute to the learning community.</p>

        {/* Dark mode toggle — top-right */}
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <DarkModeToggle />
        </div>
      </header>

      <div className="grid-container">
        <Link href="/contri" className="link-card contributor-card">
          <span className="link-text">Contributors</span>
        </Link>

        <Link href="/dashboard" className="link-card dashboard-card">
          <span className="link-text">Start Learning</span>
        </Link>
      </div>
      <Footer />
    </main>
  );
}