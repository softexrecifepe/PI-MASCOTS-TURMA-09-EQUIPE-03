import { HeaderPage } from "../components/HeaderPage";
import { RecursosContent } from "./RecursosContent";

export default function Recursos() {
  return (
    <>
      <HeaderPage recursos={true} />
      <RecursosContent />
    </>
  );
}
