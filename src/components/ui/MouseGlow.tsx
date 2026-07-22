"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[130px] transition-transform duration-150"
        style={{
          transform: `translate(${position.x - 210}px, ${position.y - 210}px)`,
        }}
      />
    </div>
  );
}