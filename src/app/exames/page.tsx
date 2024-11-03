"use client";

import { ExamesContent } from "./ExamesContent";
import { HeaderPage } from "../components/HeaderPage";

export default function Exames() {
  return (
    <>
      <HeaderPage exames={true} />
      <ExamesContent />
    </>
  );
}
