"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("stage-active");
  const [prevPath, setPrevPath] = useState(pathname);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (pathname !== prevPath) {
      // Symmetrical Left-to-Right circular page layout representing the structural wheel
      const PATH_ORDER = ["/about", "/services", "/", "/projects", "/contact"];
      const prevIdx = PATH_ORDER.indexOf(prevPath);
      const currIdx = PATH_ORDER.indexOf(pathname);
      
      const validPrevIdx = prevIdx !== -1 ? prevIdx : 2;
      const validCurrIdx = currIdx !== -1 ? currIdx : 2;
      
      // Calculate index step difference to determine exact number and direction of spins
      const diff = validCurrIdx - validPrevIdx;
      const spinDegrees = diff * 360;
      
      setRotation(spinDegrees);
      setTransitionStage("stage-slide-out");

      const timer = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        
        // Prepare the incoming page with reversed rotation to spin back to active state
        setRotation(-spinDegrees);
        setTransitionStage("stage-slide-in");
        
        const nextTimer = setTimeout(() => {
          setRotation(0);
          setTransitionStage("stage-active");
        }, 50);
        
        setPrevPath(pathname);
        return () => clearTimeout(nextTimer);
      }, 550); // Comfortable duration for premium multi-spin transitions

      return () => clearTimeout(timer);
    }
  }, [pathname, children, prevPath]);

  // Dynamic inline styling for performance-optimized GPU-accelerated 2D rotating wheel transition
  let style: React.CSSProperties = {
    transform: "rotate(0deg) scale(1)",
    opacity: 1,
    transformOrigin: "center center",
  };
  
  if (transitionStage === "stage-slide-out") {
    style = {
      transform: `rotate(${rotation}deg) scale(0.85)`,
      opacity: 0,
      transformOrigin: "center center",
      transition: "transform 0.55s cubic-bezier(0.34, 1.45, 0.64, 1), opacity 0.4s ease-in-out",
    };
  } else if (transitionStage === "stage-slide-in") {
    style = {
      transform: `rotate(${rotation}deg) scale(0.85)`,
      opacity: 0,
      transformOrigin: "center center",
      transition: "none",
    };
  } else if (transitionStage === "stage-active") {
    style = {
      transform: "rotate(0deg) scale(1)",
      opacity: 1,
      transformOrigin: "center center",
      transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s ease-out",
    };
  }

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div 
        className="w-full will-change-transform transform-gpu"
        style={style}
      >
        {displayChildren}
      </div>
    </div>
  );
}
