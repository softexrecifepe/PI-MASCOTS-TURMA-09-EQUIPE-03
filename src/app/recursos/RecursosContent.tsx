"use client";
import { BsClipboardPlusFill } from "react-icons/bs";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState } from "react";

export function RecursosContent() {
  const [visualizarRecursos, setVisualizarRecursos] = useState(true);
  const [registarRecursos, setRegistarRecursos] = useState(false);

  function handleVisualizarRecursos() {
    setVisualizarRecursos(true);
    setRegistarRecursos(false);
  }

  function handleRegistrarRecurso() {
    setRegistarRecursos(true);
    setVisualizarRecursos(false);
    // console.log(marcarConsulta);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<BsClipboardPlusFill />}
        text1="Visualizar Recurso"
        onClick1={handleVisualizarRecursos}
        icon2={<IoMdAddCircle />}
        text2="Registrar Recurso"
        onClick2={handleRegistrarRecurso}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarRecursos}>
          <h1>Visualizar Recursos</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={registarRecursos}>
          <h1>Registrar Recurso</h1>
        </MainContent>
      </div>
    </main>
  );
}
