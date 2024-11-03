"use client";

import { HeaderPage } from "../components/HeaderPage";
import { InternatoContent } from "./InternatoContent";

export default function Internato() {
  return (
    <>
      <HeaderPage internato={true} />
      <InternatoContent />
    </>
  );
}
