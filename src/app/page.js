import Link from "next/link";
import "./style.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-container" style={{ paddingBottom: '64px' }}>
      <header className="header">
        <h1 className="title">AcadAssist</h1>
        <p className="subtitle">Explore academic resources and contribute to the learning community.</p>
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