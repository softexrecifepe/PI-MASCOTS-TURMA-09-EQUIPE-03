"use client";
import { AsideExames } from "./AsideExames";
import { FaClipboardList, FaSearch, FaTable } from "react-icons/fa";
import { MainContent } from "../components/MainContent";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { ExamesForms } from "./ExamesForms";

import prancheta from "../assets/images/prancheta.png";
import Image from "next/image";
import { InputComponent } from "../components/InputComponent";
import { ExameCard } from "./ExameCards";
import { ExamesInfo } from "./ExamesInfo";

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
  petId: string; // Adiciona petId como string
  data: string;
  id: string; // Adiciona o id único para o exame
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
  }

  const [examesArray, setExamesArray] = useState<Exame[]>(() => {
    const saveExames = localStorage.getItem("examesArray");
    return saveExames ? JSON.parse(saveExames) : []; // Se não houver dados, retorna array vazio
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que examesArray mudar
    if (examesArray.length > 0) {
      localStorage.setItem("examesArray", JSON.stringify(examesArray));
    }
  }, [examesArray]); // Só atualiza quando examesArray muda

  useEffect(() => {
    // Quando a página carrega, recarrega examesArray do localStorage
    const saveExames = localStorage.getItem("examesArray");
    if (saveExames) {
      setExamesArray(JSON.parse(saveExames));
    }
  }, []); // Só executa na montagem inicial do componente

  function onClickCleanSearchExame() {
    setSearchExame("");
    setActiveSearch("");
  }

  const bottomDivRef = useRef<HTMLDivElement>(null);
  const [exameSelect, setExameSelect] = useState<Exame | null>(null);

  function handlePetCardClick(exame: Exame) {
    setExameSelect(exame);
    if (bottomDivRef.current) {
      bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleVisualizarExames() {
    setVisualizarExames(true);
    setMarcarExame(false);
  }

  function handleCriarExames() {
    setMarcarExame(true);
    setVisualizarExames(false);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <AsideExames
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
              <div className="flex items-center gap-1 border-b-2 pb-1 w-fit border-b-exames-color-700">
                <Image
                  alt="prancheta"
                  unoptimized
                  src={prancheta}
                  width={50}
                  height={50}
                />
                <h1 className="text-2xl font-jetbrains">Exames</h1>
              </div>
              <p className="text-gray-700 font-jetbrains">
                Clique nos cartões para mais informações
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="w-full flex items-end justify-start gap-5">
                <div className="w-1/3">
                  <InputComponent
                    id="search"
                    type="text"
                    onchange={handleSearchExame}
                    value={searchExame}
                    maxLenght={11}
                    label="Buscar Exames"
                    placeholder="Digite o CPF do Tutor"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => onClickSearchExame(searchExame)}
                    className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font-roboto bg-exames-color-600 rounded-xl text-white hover:bg-exames-color-800 active:bg-exames-color-500 transition-all"
                  >
                    <FaSearch height={20} width={20} className="text-white" />
                    <span className="text-nowrap">Pesquisar Exame</span>
                  </button>
                  <button
                    onClick={onClickCleanSearchExame}
                    className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font-roboto bg-exames-color-600 rounded-xl text-white hover:bg-exames-color-800 active:bg-exames-color-500 transition-all"
                  >
                    <FaTable height={20} width={20} className="text-white" />
                    <span className="text-nowrap">Mostrar Todos os Exames</span>
                  </button>
                </div>
              </div>
              <div className="flex bg-exames-color-600 rounded-md overflow-y-scroll p-4 gap-6 w-full flex-wrap max-h-96">
                {activeSearch.trim() === ""
                  ? [...examesArray]
                      .reverse()
                      .map((exames) => (
                        <ExameCard
                          onclick={() => handlePetCardClick(exames)}
                          key={exames.id}
                          petName={exames.petName}
                          dataExame={exames.data}
                          tutorName={exames.tutorCpf}
                          typeExame={exames.tipo}
                          veterinarianName={exames.veterinario.name}
                        />
                      ))
                  : [...arrayFilter]
                      .reverse()
                      .map((exames) => (
                        <ExameCard
                          onclick={() => handlePetCardClick(exames)}
                          key={exames.id}
                          petName={exames.petName}
                          dataExame={exames.data}
                          tutorName={exames.tutorCpf}
                          typeExame={exames.tipo}
                          veterinarianName={exames.veterinario.name}
                        />
                      ))}
              </div>
              <ExamesInfo
                bottomDivRef={bottomDivRef}
                exameSelect={exameSelect}
              />
            </div>
          </div>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarExame}>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-jetbrains w-fit border-b-2 pb-1 border-b-exames-color-700">
              Prescrever Exame
            </h1>
            <ExamesForms
              examesArray={examesArray}
              setExamesArray={setExamesArray}
            />
          </div>
        </MainContent>
      </div>
    </main>
  );
}
