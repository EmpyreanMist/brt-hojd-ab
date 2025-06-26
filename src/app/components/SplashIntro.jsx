"use client";
import { useEffect, useState } from "react";
import "../SplashIntro.css";

export default function SplashIntro({ children }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div className={`splash ${fadeOut ? "fade-out" : ""}`}>
          <div className="typewriter">BRT Höjd AB</div>
          <img
            src="/workPictures/building.jpg"
            alt="Splash"
            className="splash-img splash-wrapper"
          />
        </div>
      )}
      <main className={`homepage ${showSplash ? "hidden" : "visible"}`}>
        {children}
      </main>
    </>
  );
}
