"use client";
import { MainContent } from "../components/MainContent";
import { FaHeart } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { ConsultaForms } from "./ConsultForms";
import { ConsultaInfo } from "./ConsultaInfo";
import { AsideConsulta } from "./AsideConsulta";
import { ConsultaCard } from "./ConsultaCard";
import { InputComponent } from "../components/InputComponent";
import estetoscopioConsulta from "../assets/images/estetoscopioConsulta.jpg"
import Image from "next/image";
import { FaClipboardList, FaSearch, FaTable } from "react-icons/fa";



interface Pet{
  id:string;
  name:string;
  age:string;
  gender: string;
  species:string;
  breed:string;
  condition:string;
 /*  tutor:Tutor; */
}

interface Veterinario{
  id:string;
  name:string;
  crv:string;
}

interface Consulta{
  id:string
  veterinario:Veterinario;
  tipoConsulta:string;
  detalhe: string;
  tutorCpf:string;
  petName:string |undefined;
  petId:string;
  data:string;

}


export function ConsultaContent() {
  const [visualizarConsulta, setVisualizarConsulta] = useState(true);
  const [marcarConsulta, setMarcarConsulta] = useState(false);

  const [searchConsulta, setSearchConsulta] = useState("");

  function handleSearchConsulta(e: ChangeEvent<HTMLInputElement>) {
    setSearchConsulta(e.target.value);
  }

  const [arrayFilter, setArrayFilter] = useState<Consulta[]>([]);
  const [activeSearch, setActiveSearch] = useState("");

  function onClickSearchConsulta(value: string) {
    setActiveSearch(value);

    const arrayFilterTemp = consultaArray.filter(
      (tutorCpf) => tutorCpf.tutorCpf === value
    );

    setArrayFilter(arrayFilterTemp);
  }

  const [consultaArray, setConsultaArray] = useState<Consulta[]>(() => {
    const saveConsulta = localStorage.getItem("consultaArray");
    return saveConsulta ? JSON.parse(saveConsulta) : []; 
  });

  useEffect(() => {
    
    if (consultaArray.length > 0) {
      localStorage.setItem("consultaArray", JSON.stringify(consultaArray));
    }
  }, [consultaArray]); 

  useEffect(() => {
    // 
    const saveConsulta = localStorage.getItem("consultaArray");
    if (saveConsulta) {
      setConsultaArray(JSON.parse(saveConsulta));
    }
  }, []); // Só executa na montagem inicial do componente

  function onClickCleanSearchConsulta() {
    setSearchConsulta("");
    setActiveSearch("");
  }

  const bottomDivRef = useRef<HTMLDivElement>(null);
  const [consultaSelect, setConsultaSelect] = useState<Consulta | null>(null);

  function handlePetCardClick(consulta: Consulta) {
    setConsultaSelect(consulta);
    if (bottomDivRef.current) {
      bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleVisualizarConsulta() {
    setVisualizarConsulta(true);
    setMarcarConsulta(false);
  }

  function handleCriarConsulta() {
    setMarcarConsulta(true);
    setVisualizarConsulta(false);
  }

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <AsideConsulta
        icon1={<FaHeart size={24} />}
        text1="Visualizar Consulta"
        onClick1={handleVisualizarConsulta}
        isAces1={visualizarConsulta}
        icon2={<FaHeartCirclePlus size={24} />}
        text2="Criar Consulta"
        onClick2={handleCriarConsulta}
        isAces2={marcarConsulta}
        width="w-64"
      />
      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarConsulta}>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4">                              {/* mudar a cor */}
              <div className="flex items-center gap-1 border-b-2 pb-1 w-fit border-b-mascots-primary-600">
                <Image
                  alt="estetoscopioConsulta"
                  unoptimized
                  src={estetoscopioConsulta}
                  width={90}
                  height={90}
                />
                <h1 className="text-2xl font-jetbrains">Consulta</h1>
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
                    onchange={handleSearchConsulta}
                    value={searchConsulta}
                    maxLenght={11}
                    label="Buscar Consulta"
                    placeholder="Digite o CPF do Tutor"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => onClickSearchConsulta(searchConsulta)}
                    className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font- bg-mascots-primary-600 rounded-xl text-white hover:bg-mascots-primary-700 active: bg-mascots-primary-600 transition-all"
                  >
                    <FaSearch height={20} width={20} className="text-white" />
                    <span className="text-nowrap">Pesquisar Consulta</span>
                  </button>
                  <button
                    onClick={onClickCleanSearchConsulta}
                    className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font-roboto  bg-mascots-primary-600 rounded-xl text-white hover:bg-mascots-primary-700 active: bg-mascots-primary-600 transition-all"
                  >
                    <FaTable height={20} width={20} className="text-white" />
                    <span className="text-nowrap">Mostrar Todas as Consulta </span>
                  </button>
                </div>
              </div>
              <div className="flex  bg-mascots-primary-600 rounded-md overflow-y-scroll p-4 gap-6 w-full flex-wrap max-h-96">
                {activeSearch.trim() === ""
                  ? [...consultaArray]
                      .reverse()
                      .map((consulta) => (
                        <ConsultaCard
                          onclick={() => handlePetCardClick(consulta)}
                          key={consulta.id}
                          petName={consulta.petName}
                          dataConsulta={consulta.data}
                          tutorName={consulta.tutorCpf}
                          typeConsulta={consulta.tipoConsulta}
                          veterinarianName={consulta.veterinario.name}
                        />
                      ))
                  : [...arrayFilter]
                      .reverse()
                      .map((consulta) => (
                        <ConsultaCard
                          onclick={() => handlePetCardClick(consulta)}
                          key={consulta.id}
                          petName={consulta.petName}
                          dataConsulta={consulta.data}
                          tutorName={consulta.tutorCpf}
                          typeConsulta={consulta.tipoConsulta}
                          veterinarianName={consulta.veterinario.name}
                        />
                      ))}
              </div>
              <ConsultaInfo
                bottomDivRef={bottomDivRef}
                consultaSelect={consultaSelect}
              />
            </div>
          </div>
        </MainContent>
        <MainContent zIndex="z-10" visualize={marcarConsulta}>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-jetbrains w-fit border-b-2 pb-1 border-b-mascots-primary-600">
              Prescrever Consulta
            </h1>
            <ConsultaForms
              consultaArray={consultaArray}
              setConsultaArray={setConsultaArray}
            />
          </div>
        </MainContent>
      </div>
    </main>
  );
}
