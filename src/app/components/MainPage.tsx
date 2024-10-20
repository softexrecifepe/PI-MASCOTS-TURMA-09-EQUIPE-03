import { AsideContent } from "./AsideContent";
import { MainContent } from "./MainContent";

export function MainPage() {
  return (
    <>
      <div className="grid grid-cols-grid-main w-full p-10 gap-8 h-height-main">
        <AsideContent />
        <MainContent />
      </div>
    </>
  );
}
