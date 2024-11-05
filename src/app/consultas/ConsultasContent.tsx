"use client";

import { Aside2Nav } from "../components/Aside2Nav";

import { MainContent } from "../components/MainContent";
import { FaHeart } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";

import { useState } from "react";

export function ConsultasContent() {
  const [visualizarConsultas, setVisualizarConsultas] = useState(true);
  const [marcarConsulta, setMarcarConsulta] = useState(false);

  function handleVisualizarConsultas() {
    setVisualizarConsultas(true);
    setMarcarConsulta(false);
  }

  function handleMarcarConsulta() {
    setMarcarConsulta(true);
    setVisualizarConsultas(false);
    console.log(marcarConsulta);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<FaHeart size={24} />}
        text1="Visualizar Consultas"
        onClick1={handleVisualizarConsultas}
        isAces1={visualizarConsultas}
        icon2={<FaHeartCirclePlus size={24} />}
        text2="Criar Consulta"
        onClick2={handleMarcarConsulta}
        isAces2={marcarConsulta}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarConsultas}>
          <h1>Visualizar Consulta</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarConsulta}>
          <h1>Criar consulta</h1>
        </MainContent>
      </div>
    </main>
  );
}
