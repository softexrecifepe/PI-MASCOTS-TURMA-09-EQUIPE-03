"use client";

import { useState } from "react";
import { AsideNavItem } from "./AsideNavItem";

interface Aside2Nav {
  icon1: JSX.Element;
  text1: string;
  icon2: JSX.Element;
  text2: string;
  icon3: JSX.Element;
  text3: string;
}

export function Aside2Nav({
  icon1,
  text1,
  icon2,
  text2,
  icon3,
  text3,
}: Aside2Nav) {
  const [isHover, setIsHover] = useState(false);

  function handleHoverIn() {
    console.log("handleHoverIn");
    setIsHover(true);
  }

  function handleHoverOut() {
    console.log("handleHoverOut");
    setIsHover(false);
  }
  return (
    <aside
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      className={`bg-mascots-primary-600 p-4 font-sans rounded-xl h-fit shadow-custom sticky w-20 top-5 hover:w-40 transition-all`}
    >
      <nav className="flex gap-2 h-full items-center">
        <div className="transition-all flex flex-col gap-5 h-full justify-around w-full items-start">
          <AsideNavItem icon={icon1} text={text1} hover={isHover} />
          <AsideNavItem icon={icon2} text={text2} hover={isHover} />
          <AsideNavItem icon={icon3} text={text3} hover={isHover} />
        </div>
      </nav>
    </aside>
  );
}
