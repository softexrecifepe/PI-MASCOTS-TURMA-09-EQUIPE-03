"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { FaClipboardList } from "react-icons/fa";
import { MainContent } from "../components/MainContent";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { ExamesForms } from "./ExamesForms";

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
        icon1={<FaClipboardList size={24} />}
        text1="Visualizar Exames"
        onClick1={handleVisualizarExames}
        isAces1={visualizarExames}
        icon2={<MdAssignmentAdd size={24} />}
        text2="Criar Exame"
        onClick2={handleCriarExames}
        isAces2={marcarExame}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarExames}>
          <h1>Visualizar Exames</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarExame}>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl w-fit border-b-2 pb-1 border-b-mascots-primary-700">
              Prescrever Exame
            </h1>
            <ExamesForms />
          </div>
        </MainContent>
      </div>
    </main>
  );
}
