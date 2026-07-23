"use client";

import { useEffect, useRef } from "react";


export default function CursorGlow() {


  const glowRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {


    const move = (e: MouseEvent) => {

      if (!glowRef.current) return;


      glowRef.current.style.transform =
        `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;

    };



    window.addEventListener(
      "mousemove",
      move
    );



    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

    };


  }, []);





  return (

    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[384px]
        w-[384px]
        rounded-full
        bg-blue-500/10
        blur-[120px]
        transition-transform
        duration-150
      "
    />

  );

}