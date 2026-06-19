import React from "react";
import { twMerge } from "tailwind-merge";

/** Solid gradient section with optional shadow wrapper  */
export function GradientSection1({
  children,
  className = "",
  pad = "py-16 md:py-20",
  variant = "blue", // "blue" | "emerald"
  withShadow = false,
}) {
  const skins = {
    blue:    "bg-gradient-to-b from-blue-50 via-cyan-50/70 to-white",
    emerald: "bg-gradient-to-b from-emerald-50 via-cyan-50/70 to-white",
  };
  return (
    <section className={twMerge("relative", pad, className)}>
      <div className={twMerge("absolute inset-0 -z-10", skins[variant])} />
      <div className={twMerge(withShadow && "shadow-[0_40px_120px_-20px_rgba(2,132,199,0.25)] rounded-3xl")}>
        {children}
      </div>
    </section>
  );
}

/** Glassmorphism section: translucent panel over a bright gradient bg */
export function GradientSection2({
  children,
  className = "",
  pad = "py-16 md:py-20",
  bgVariant = "emerald", // "emerald" | "blue"
}) {
  const bgs = {
    emerald: "bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-600",
    blue:    "bg-gradient-to-b from-blue-600 via-cyan-600 to-emerald-500",
  };
  return (
    <section className={twMerge("relative", pad, className)}>
      <div className={twMerge("absolute inset-0 -z-10", bgs[bgVariant])} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/30 bg-white/25 backdrop-blur-md
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          {children}
        </div>
      </div>
    </section>
  );
}

/* Helpers for emerald→cyan accents */
export const emeraldCyanBg = "bg-gradient-to-r from-emerald-500 to-cyan-500";
export const emeraldCyanText = "bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent";
export const emeraldCyanRing = "ring-2 ring-emerald-400/50";
