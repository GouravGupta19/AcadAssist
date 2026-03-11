"use client";
import { useRouter } from "next/navigation";
import "./components.css"; // Plain import for global CSS

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="pageContainer">
      <div className="contentWrapper">
        
        <div className="headingContainer">
          <div className="glowEffect"></div>
          <h1 className="headingText">
            Coming Soon <span className="emoji">🚀</span>
          </h1>
        </div>

        <div className="glassCard">
          <div className="decorativeLine"></div>
          <p className="cardText">
            Due to the limited size of our team and the large number of courses, 
            the materials for this section are currently unavailable. We sincerely 
            appreciate your patience and are working diligently to make them 
            available as soon as possible.
          </p>
        </div>

        <div className="hintContainer">
          <svg 
            className="hintIcon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hintText">
            Click anywhere to go back
          </span>
        </div>

      </div>
    </div>
  );
}