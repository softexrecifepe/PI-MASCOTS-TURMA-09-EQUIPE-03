"use client";

import { useState, type MouseEventHandler } from "react";

interface AsideNavItemProps {
  icon: JSX.Element;
  text: string;
  hover: boolean;
  onClick: MouseEventHandler;
}

export function AsideNavItem({
  icon,
  text,
  hover,
  onClick,
}: AsideNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="bg-mascots-primary-50 p-4 rounded-full flex items-center gap-2 hover:bg-mascots-primary-500 transition-all"
    >
      {icon}
      <div
        className={`${!hover ? "hidden" : "text-base text-nowrap font-semibold"}`}
      >
        {text}
      </div>
    </button>
  );
}
