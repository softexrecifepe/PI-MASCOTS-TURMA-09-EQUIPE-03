import { Children, type ReactNode } from "react";

interface asideContentProps {
  children: ReactNode;
}

export function AsideContent({ children }: asideContentProps) {
  return (
    <>
      <aside className="bg-mascots-primary-600 p-4 font-sans rounded-xl h-fit shadow-custom sticky top-5">
        <nav className="flex gap-2 justify-center h-full items-center">
          <div className="flex flex-col p-4 gap-10 h-full justify-around w-full items-center">
            {children}
          </div>
        </nav>
      </aside>
    </>
  );
}
