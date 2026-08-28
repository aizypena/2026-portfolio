"use client";

import { ReactNode } from "react";

interface MacWindowProps {
  children: ReactNode;
  accent?: string;
  className?: string;
}

export function MacWindow({ children, accent, className = "" }: MacWindowProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-2xl shadow-black/30 ${className}`}
    >
      {/* Window title bar with traffic lights */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/90 hover:bg-red-400 transition-colors" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/90 hover:bg-yellow-400 transition-colors" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90 hover:bg-emerald-400 transition-colors" />
        </div>
        <div className="ml-3 h-5 flex-1 rounded-md border border-white/8 bg-white/5" />
      </div>

      {/* Window content */}
      <div className="relative">{children}</div>

      {/* Accent glow */}
      {accent && (
        <div
          className={`absolute inset-0 pointer-events-none bg-linear-to-br ${accent} opacity-30`}
        />
      )}
    </div>
  );
}
