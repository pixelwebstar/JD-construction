"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    // Stage 1: Trigger snappy fade-out
    setTransitionStage("fadeOut");
    
    const timer = setTimeout(() => {
      // Stage 2: Swap the page content and smoothly scroll up to the top
      setDisplayChildren(children);
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Stage 3: Smoothly fade in new page content
      setTransitionStage("fadeIn");
    }, 250); // Snappy, premium transition time

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        transitionStage === "fadeIn"
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
      }`}
    >
      {displayChildren}
    </div>
  );
}
