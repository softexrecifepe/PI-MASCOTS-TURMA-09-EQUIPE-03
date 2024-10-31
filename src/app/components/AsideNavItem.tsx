"use client";

import type { ReactNode } from "react";

interface AsideNavItemProps {
  icon: JSX.Element;
  text: string;
}

export function AsideNavItem({ icon, text }: AsideNavItemProps) {
  return (
    <button className="bg-mascots-primary-50 p-5 rounded-full flex items-center gap-2 text-xl hover:bg-mascots-primary-500 transition-all">
      {icon}
      <div className="hidden">{text}</div>
    </button>
  );
}
