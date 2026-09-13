"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);

  // Precise mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth, responsive spring for trailing outer ring (zero-lag feel)
  const springConfig = { damping: 28, stiffness: 280, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad), never on touch screens
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setMounted(true);
    document.documentElement.classList.add("has-custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering interactive clickable elements
      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input[type='submit'], input[type='button'], select")
      );
      setIsHovered(isInteractive);

      // Check if hovering text inputs (preserve native text selection cursor)
      const isInput = Boolean(
        target.closest("input:not([type='submit']):not([type='button']), textarea, [contenteditable='true']")
      );
      setIsTextInput(isInput);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || isTextInput) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Precision Center Dot (Exact 0-latency tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? (isHovered ? 0.35 : 1) : 0,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Minimal Trailing Aesthetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 40 : 26,
          height: isHovered ? 40 : 26,
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.08)" : "rgba(37, 99, 235, 0)",
          borderColor: isHovered ? "rgba(37, 99, 235, 0.65)" : "rgba(37, 99, 235, 0.35)",
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          damping: 26,
          stiffness: 320,
        }}
      />
    </div>
  );
}
