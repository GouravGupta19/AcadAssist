import Link from "next/link";
import "./style.css";

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="title">AcadAssist</h1>
        <p className="subtitle">Access notes and contribute resources</p>
      </header>

      <div className="grid-container">
        <Link href="/contri" className="link-card contributor-card">
          <span className="link-text">Contributor</span>
        </Link>

        <Link href="/dashboard" className="link-card dashboard-card">
          <span className="link-text">Dashboard</span>
        </Link>
      </div>
    </main>
  );
}