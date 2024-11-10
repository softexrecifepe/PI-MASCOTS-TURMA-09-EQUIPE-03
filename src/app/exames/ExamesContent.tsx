"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { FaClipboardList, FaSearch, FaTable } from "react-icons/fa";
import { MainContent } from "../components/MainContent";
import { useEffect, useState, type ChangeEvent } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { ExamesForms } from "./ExamesForms";

import prancheta from "../assets/images/prancheta.png";
import Image from "next/image";
import { InputComponent } from "../components/InputComponent";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface Pet {
  id: string;
  name: string;
  age: string;
  gender: string;
  species: string;
  breed: string;
  condition: string;
  tutor: Tutor;
}

interface Exame {
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
}

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

export function ExamesContent() {
  const [visualizarExames, setVisualizarExames] = useState(true);
  const [marcarExame, setMarcarExame] = useState(false);

  const [searchExame, setSearchExame] = useState("");

  function handleSearchExame(e: ChangeEvent<HTMLInputElement>) {
    setSearchExame(e.target.value);
  }

  const [arrayFilter, setArrayFilter] = useState<Exame[]>([]);
  const [activeSearch, setActiveSearch] = useState("");

  function onClickSearchExame(value: string) {
    setActiveSearch(value);

    const arrayFilterTemp = examesArray.filter(
      (tutorCpf) => tutorCpf.tutorCpf === value
    );

    setArrayFilter(arrayFilterTemp);

    console.log(arrayFilterTemp);
  }

  const [examesArray, setExamesArray] = useState<Exame[]>(() => {
    const saveExames = localStorage.getItem("examesArray");
    return saveExames ? JSON.parse(saveExames) : [];
  });

  useEffect(() => {
    localStorage.setItem("examesArray", JSON.stringify(examesArray));
  }, [examesArray]);

  function onClickCleanSearchExame() {
    setSearchExame("");
    setActiveSearch("");
  }

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
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 border-b-2 pb-1  w-fit  border-b-mascots-primary-700">
                <Image alt="prancheta" src={prancheta} width={32} height={32} />
                <h1 className="text-2xl">Exames</h1>
              </div>
              <p className="text-gray-700 font-jetbrains">
                Clique nos cartões para mais informações
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="w-2/3 flex items-center justify-center gap-5">
                <InputComponent
                  id="search"
                  type="text"
                  onchange={handleSearchExame}
                  value={searchExame}
                  maxLenght={11}
                  label="Buscar Exames"
                  placeholder="Digite o CPF do Tutor"
                />
                <button
                  onClick={() => onClickSearchExame(searchExame)}
                  className="py-2 px-4 flex items-center  shadow-sm gap-2  mt-auto font-roboto bg-mascots-primary-500 rounded-xl text-white hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all"
                >
                  <FaSearch
                    height={20}
                    width={20}
                    className="text-mascots-primary-700"
                  />
                  <span className="text-nowrap">Pesquisar Exame</span>
                </button>
                <button
                  onClick={onClickCleanSearchExame}
                  className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font-roboto bg-mascots-primary-500 rounded-xl text-white hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all"
                >
                  <FaTable
                    height={20}
                    width={20}
                    className="text-mascots-primary-700"
                  />
                  <span className="text-nowrap">Mostrar Todos os Exames</span>
                </button>
              </div>
            </div>
          </div>
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
