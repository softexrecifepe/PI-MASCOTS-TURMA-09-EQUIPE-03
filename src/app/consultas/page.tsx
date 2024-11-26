"use client";

import { ConsultaContent } from "./ConsultasContent";
import { HeaderPage } from "../components/HeaderPage";

export default function Consulta() {
  return (
    <>
      <HeaderPage consutas={true} />
      <ConsultaContent />
    </>
  );
}
