import type { ReactNode } from "react";

interface MainPageProps {
  children: ReactNode;
}

export function MainPage({ children }: MainPageProps) {
  return (
    <>
      <div className="flex w-full p-10 gap-8 h-height-main">{children}</div>
    </>
  );
}
