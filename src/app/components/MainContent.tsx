import type { ReactNode } from "react";

interface mainContentProps {
  children: ReactNode;
  visualize: boolean;
  zIndex: string;
}

export function MainContent({ children, visualize, zIndex }: mainContentProps) {
  return (
    <>
      <main
        className={`${visualize ? `bg-mascots-secundary-50 transition-all shadow-custom rounded-md w-full ${zIndex} p-8 h-full absolute` : "opacity-0"}`}
      >
        {children}
      </main>
    </>
  );
}
