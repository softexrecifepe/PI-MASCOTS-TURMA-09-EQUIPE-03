import type { ReactNode } from "react";

interface mainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: mainContentProps) {
  return (
    <>
      <main className="bg-mascots-secundary-50 shadow-custom rounded-md p-8">
        {children}
      </main>
    </>
  );
}
