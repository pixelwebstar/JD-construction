"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("stage-active");
  const [prevPath, setPrevPath] = useState(pathname);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (pathname !== prevPath) {
      const PATH_ORDER = ["/about", "/services", "/", "/projects", "/contact"];
      const prevIdx = PATH_ORDER.indexOf(prevPath);
      const currIdx = PATH_ORDER.indexOf(pathname);
      
      const validPrevIdx = prevIdx !== -1 ? prevIdx : 2;
      const validCurrIdx = currIdx !== -1 ? currIdx : 2;
      
      // Symmetrical scroll direction: forward goes down (content slides up), backward goes up (content slides down)
      const isForward = validCurrIdx >= validPrevIdx;
      setDirection(isForward ? "forward" : "backward");
      setTransitionStage("stage-slide-out");

      const timer = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        
        setTransitionStage("stage-slide-in");
        
        const nextTimer = setTimeout(() => {
          setTransitionStage("stage-active");
        }, 30);
        
        setPrevPath(pathname);
        return () => clearTimeout(nextTimer);
      }, 120); // Snappy exit transition buffer (120ms)

      return () => clearTimeout(timer);
    }
  }, [pathname, children, prevPath]);

  // Dynamic inline styling for a frictionless, ultra-fast vertical scroll transition
  let style: React.CSSProperties = {
    transform: "translateY(0px)",
    opacity: 1,
  };
  
  if (transitionStage === "stage-slide-out") {
    // Exit page slides out of view snappily (forward = slides up, backward = slides down)
    const translateVal = direction === "forward" ? "-15vh" : "15vh";
    style = {
      transform: `translateY(${translateVal})`,
      opacity: 0,
      transition: "transform 0.15s cubic-bezier(0.3, 0.0, 0.2, 1), opacity 0.12s ease-in-out",
    };
  } else if (transitionStage === "stage-slide-in") {
    // Incoming page starts off-screen (forward = starts at bottom, backward = starts at top)
    const translateVal = direction === "forward" ? "15vh" : "-15vh";
    style = {
      transform: `translateY(${translateVal})`,
      opacity: 0,
      transition: "none",
    };
  } else if (transitionStage === "stage-active") {
    // Incoming page settles perfectly to 0
    style = {
      transform: "translateY(0px)",
      opacity: 1,
      transition: "transform 0.22s cubic-bezier(0.0, 0.0, 0.2, 1), opacity 0.18s ease-out",
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
