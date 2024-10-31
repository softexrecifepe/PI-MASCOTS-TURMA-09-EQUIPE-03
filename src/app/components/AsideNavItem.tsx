"use client";

import type { ReactNode } from "react";

interface AsideNavItemProps {
  icon: JSX.Element;
  text: string;
  hover: boolean;
}

export function AsideNavItem({ icon, text, hover }: AsideNavItemProps) {
  return (
    <button className="bg-mascots-primary-50 p-4 rounded-full flex items-center gap-2 hover:bg-mascots-primary-500 transition-all">
      {icon}
      <div className={`${!hover ? "hidden" : "text-base font-semibold"}`}>
        {text}
      </div>
    </button>
  );
}
