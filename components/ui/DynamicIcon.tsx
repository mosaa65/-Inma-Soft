"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = "", size = 24 }: DynamicIconProps) {
  // Safe lookup for the icon component
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Fallback icon if the requested icon name is invalid or missing
    const Fallback = LucideIcons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
