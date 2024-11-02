"use client";
import { BsClipboardPlusFill } from "react-icons/bs";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState } from "react";

export function InternatoContent() {
  const [visualizarInternatos, setVisualizarInternatos] = useState(true);
  const [marcarInternato, setMarcarInternato] = useState(false);

  function handleVisualizarInternato() {
    setVisualizarInternatos(true);
    setMarcarInternato(false);
  }

  function handleMarcarInternato() {
    setMarcarInternato(true);
    setVisualizarInternatos(false);
    // console.log(marcarConsulta);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<BsClipboardPlusFill />}
        text1="Visualizar Internato"
        onClick1={handleVisualizarInternato}
        isAces1={visualizarInternatos}
        icon2={<IoMdAddCircle />}
        text2="Marcar Internação"
        onClick2={handleMarcarInternato}
        isAces2={marcarInternato}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarInternatos}>
          <h1>Visualizar Inernatos</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarInternato}>
          <h1>Criar Internação</h1>
        </MainContent>
      </div>
    </main>
  );
}
