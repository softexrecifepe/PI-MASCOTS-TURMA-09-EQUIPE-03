"use client";

import { useState, type MouseEventHandler } from "react";
import { AsideNavItem } from "./AsideNavItem";

interface Aside2Nav {
  icon1: JSX.Element;
  text1: string;
  onClick1: MouseEventHandler;
  onClick2: MouseEventHandler;
  icon2: JSX.Element;
  text2: string;
  width: string;
  isAces1: boolean;
  isAces2: boolean;
}

export function Aside2Nav({
  icon1,
  text1,
  icon2,
  text2,
  width,
  onClick1,
  onClick2,
  isAces1,
  isAces2,
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
      className={`bg-mascots-primary-600 inset-0 px-3 font-roboto py-4 rounded-xl h-fit shadow-custom sticky top-5 transition-all w-20 hover:${width}`}
    >
      <nav className="flex gap-2 h-full items-center">
        <div className="transition-all flex flex-col gap-5 h-full justify-around w-full items-start">
          <AsideNavItem
            onClick={onClick1}
            icon={icon1}
            text={text1}
            hover={isHover}
            isAcess={isAces1}
          />
          <AsideNavItem
            onClick={onClick2}
            icon={icon2}
            text={text2}
            hover={isHover}
            isAcess={isAces2}
          />
        </div>
      </nav>
    </aside>
  );
}
