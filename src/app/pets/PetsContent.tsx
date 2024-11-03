"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState } from "react";
import { MdOutlinePets } from "react-icons/md";

export function PetsContent() {
  const [visualizarPets, setVisualizarPets] = useState(true);
  const [cadastrarPet, setCadastrarPet] = useState(false);

  function handleVisualizarPets() {
    setVisualizarPets(true);
    setCadastrarPet(false);
  }

  function handleCadastrarPet() {
    setCadastrarPet(true);
    setVisualizarPets(false);
    // console.log(marcarConsulta);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<MdOutlinePets size={24} />}
        text1="Visualizar Pets"
        onClick1={handleVisualizarPets}
        isAces1={visualizarPets}
        icon2={<IoMdAddCircle size={24} />}
        text2="Cadastrar Pet"
        onClick2={handleCadastrarPet}
        isAces2={cadastrarPet}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarPets}>
          <h1>Visualizar Pets</h1>
        </MainContent>
        <MainContent zIndex="z-10" visualize={cadastrarPet}>
          <h1>Cadastrar Pets</h1>
        </MainContent>
      </div>
    </main>
  );
}
