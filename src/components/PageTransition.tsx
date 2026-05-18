"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("stage-active");

  useEffect(() => {
    // Stage 1: Snappy slide-out to the left
    setTransitionStage("stage-slide-out");
    
    const timer = setTimeout(() => {
      // Stage 2: Swap content and instantly scroll viewport back to top
      setDisplayChildren(children);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      
      // Stage 3: Instantly position the new page off-screen to the right
      setTransitionStage("stage-slide-in");
      
      // Stage 4: Smoothly slide the page in from the right to the center
      const nextTimer = setTimeout(() => {
        setTransitionStage("stage-active");
      }, 50); // Small render buffer
      
      return () => clearTimeout(nextTimer);
    }, 300); // PowerPoint slide duration

    return () => clearTimeout(timer);
  }, [pathname, children]);

  // Map state to performance-optimized transform & opacity classes
  let transitionClass = "translate-x-0 opacity-100 scale-100 duration-300";
  if (transitionStage === "stage-slide-out") {
    transitionClass = "-translate-x-full opacity-0 scale-95 pointer-events-none duration-300";
  } else if (transitionStage === "stage-slide-in") {
    transitionClass = "translate-x-full opacity-0 scale-95 pointer-events-none duration-0";
  } else if (transitionStage === "stage-active") {
    transitionClass = "translate-x-0 opacity-100 scale-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";
  }

  return (
    <div className="w-full overflow-hidden">
      <div className={`w-full transition-all ${transitionClass}`}>
        {displayChildren}
      </div>
    </div>
  );
}
