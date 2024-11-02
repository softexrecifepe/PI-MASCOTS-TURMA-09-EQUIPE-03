"use client";
import { Children, useState, type ReactNode } from "react";

interface asideContentProps {
  children: ReactNode;
}

export function AsideContent({ children }: asideContentProps) {
  return (
    <>
      <aside
        className={`bg-mascots-primary-600 p-4 font-sans rounded-xl h-fit shadow-custom sticky w-24 top-5 hover:w-64 transition-all`}
      >
        <nav className="flex gap-2 h-full items-center">
          <div className="flex flex-col gap-5 h-full justify-around w-full items-start">
            {children}
          </div>
        </nav>
      </aside>
    </>
  );
}
