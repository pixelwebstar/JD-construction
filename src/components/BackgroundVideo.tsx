"use client";

import { usePathname } from "next/navigation";

export default function BackgroundVideo() {
  const pathname = usePathname();

  // ONLY render and decode the video on the Home page (/) to guarantee lag-free 120 FPS subpage browsing
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-viewport overflow-hidden pointer-events-none z-0 bg-slate-950">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transform-gpu will-change-transform opacity-60"
      >
        <source src="/hero-bg.webm" type="video/webm" />
      </video>
    </div>
  );
}
