"use client";

import { useState, type MouseEventHandler } from "react";

interface AsideNavItemConsultaProps {
  icon: JSX.Element;
  text: string;
  hover: boolean;
  onClick: MouseEventHandler;
  isAcess: boolean;
}

export function AsideNavItemConsulta({
  icon,
  text,
  hover,
  onClick,
  isAcess,
}: AsideNavItemConsultaProps) {
  return (
    <button
      onClick={onClick}
      className={`${isAcess ? "p-4 rounded-full flex items-center gap-2 hover: bg-mascots-primary-600 hover:text-white transition-all bg-mascots-secundary-50" : "p-4 rounded-full flex items-center gap-2 hover: bg-mascots-primary-700 transition-all text-white active: bg-mascots-primary-600 active:text-black"} `}
    >
      {icon}
      <div
        className={`${!hover ? "hidden" : "text-base text-nowrap font-medium"}`}
      >
        {text}
      </div>
    </button>
  );
}
