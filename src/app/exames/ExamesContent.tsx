"use client";
import { BsClipboardPlusFill, BsMenuButton } from "react-icons/bs";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState } from "react";

export function ExamesContent() {
  const [visualizarExames, setVisualizarExames] = useState(true);
  const [marcarExame, setMarcarExame] = useState(false);

  function handleVisualizarExames() {
    setVisualizarExames(true);
    setMarcarExame(false);
  }

  function handleCriarExames() {
    setMarcarExame(true);
    setVisualizarExames(false);
    // console.log(marcarConsulta);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<BsClipboardPlusFill />}
        text1="Visualizar Exames"
        onClick1={handleVisualizarExames}
        icon2={<IoMdAddCircle />}
        text2="Criar Exame"
        onClick2={handleCriarExames}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarExames}>
          <h1>Visualizar Exames</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarExame}>
          <h1>Marcar Exames</h1>
        </MainContent>
      </div>
    </main>
  );
}
