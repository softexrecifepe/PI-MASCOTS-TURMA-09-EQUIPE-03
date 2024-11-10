"use client";

import { Aside2Nav } from "../components/Aside2Nav";
import { MainContent } from "../components/MainContent";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { MdAddBox, MdOutlinePets } from "react-icons/md";
import { PetCard } from "./PetCard";
import Image from "next/image";
import pata from "../assets/images/pata.png";
import { PetInfo } from "./PetInfo";
import { PetForms } from "./PetForms";
import { InputComponent } from "../components/InputComponent";
import { FaTable } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface Pet {
  id: string; // Adiciona o campo id
  name: string;
  age: string;
  gender: string;
  species: string;
  breed: string;
  condition: string;
  tutor: Tutor;
}

export function PetsContent() {
  const [visualizarPets, setVisualizarPets] = useState(true);
  const [cadastrarPet, setCadastrarPet] = useState(false);

  // const [petsArray, setPetsArray] = useState<Pet[]>([]);
  const [petsArray, setPetsArray] = useState<Pet[]>(() => {
    //pets array: pets cadastrados no sistema
    //localstorage só aceita string
    const savePets = localStorage.getItem("petsArray"); //salvando o array no local storage (dentro do navegador)
    return savePets ? JSON.parse(savePets) : []; // se existir savePets, gerar um json de savePets caso contrário, retorne array vazio
  });

  useEffect(() => {
    // Salva o petsArray no local storage sempre que ele é atualizado
    localStorage.setItem("petsArray", JSON.stringify(petsArray));
  }, [petsArray]);

  function handleVisualizarPets() {
    setVisualizarPets(true);
    setCadastrarPet(false);
  }

  function handleCadastrarPet() {
    setCadastrarPet(true);
    setVisualizarPets(false);
  }

  const bottomDivRef = useRef<HTMLDivElement>(null);

  const [petSelect, setPetSelect] = useState<Pet | null>(null);

  function handlePetCardClick(pet: Pet) {
    setPetSelect(pet);
    if (bottomDivRef.current) {
      bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [searchPet, setSearchPet] = useState("");

  function handleSearchPet(e: ChangeEvent<HTMLInputElement>) {
    setSearchPet(e.target.value);
  }

  const [arrayFilter, setArrayFilter] = useState<Pet[]>([]);

  const [activeSearch, setActiveSearch] = useState("");

  function onClickSearchPet(value: string) {
    setActiveSearch(value);

    const arrayFilterTemp = petsArray.filter((pet) => pet.tutor.cpf === value);

    setArrayFilter(arrayFilterTemp);

    console.log(arrayFilterTemp);
  }

  function onClickCleanSearchPet() {
    setSearchPet("");
    setActiveSearch("");
  }

  return (
    <main className="flex px-4 py-4 gap-2 min-h-screen">
      <Aside2Nav
        icon1={<MdOutlinePets size={24} />}
        text1="Visualizar Pets"
        onClick1={handleVisualizarPets}
        isAces1={visualizarPets}
        icon2={<MdAddBox size={24} />}
        text2="Cadastrar Pet"
        onClick2={handleCadastrarPet}
        isAces2={cadastrarPet}
        width="w-64"
      />

      <div className="flex w-full h-fit flex-col relative ">
        <MainContent zIndex="z-40" visualize={visualizarPets}>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 pb-1  w-fit  border-b-mascots-primary-700">
                <Image src={pata} alt="PetIcon" width={32} height={32} />
                <h1 className="text-2xl">Pets</h1>
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
                  onchange={handleSearchPet}
                  value={searchPet}
                  maxLenght={11}
                  label="Buscar Pets"
                  placeholder="Digite o CPF do Tutor"
                />
                <button
                  onClick={() => onClickSearchPet(searchPet)}
                  className="py-2 px-4 flex items-center  shadow-sm gap-2 w-fit mt-auto font-roboto bg-mascots-primary-500 rounded-xl text-white hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all"
                >
                  <FaSearch
                    height={20}
                    width={20}
                    className="text-mascots-primary-700"
                  />
                  <span>Pesquisar</span>
                </button>
                <button
                  onClick={onClickCleanSearchPet}
                  className="py-2 px-4 flex items-center shadow-sm gap-2 mt-auto font-roboto bg-mascots-primary-500 rounded-xl text-white hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all"
                >
                  <FaTable
                    height={20}
                    width={20}
                    className="text-mascots-primary-700"
                  />
                  <span className="text-nowrap">Mostrar Todos</span>
                </button>
              </div>

              <div className="flex bg-mascots-primary-600 rounded-md overflow-y-scroll p-4 gap-6 w-full flex-wrap max-h-96">
                {activeSearch.trim() === ""
                  ? [...petsArray]
                      .reverse()
                      .map((pets) => (
                        <PetCard
                          onclick={() => handlePetCardClick(pets)}
                          gender={pets.gender}
                          specie={pets.species}
                          tutorName={pets.tutor.name}
                          key={pets.id}
                          age={pets.age}
                          breed={pets.breed}
                          name={pets.name}
                        />
                      ))
                  : [...arrayFilter]
                      .reverse()
                      .map((pets) => (
                        <PetCard
                          onclick={() => handlePetCardClick(pets)}
                          gender={pets.gender}
                          specie={pets.species}
                          tutorName={pets.tutor.name}
                          key={pets.id}
                          age={pets.age}
                          breed={pets.breed}
                          name={pets.name}
                        />
                      ))}
              </div>
              <PetInfo bottomDivRef={bottomDivRef} petSelect={petSelect} />
            </div>
          </div>
        </MainContent>
        <MainContent zIndex="z-10" visualize={cadastrarPet}>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl w-fit border-b-2 pb-1 border-b-mascots-primary-700">
              Cadastrar Pet
            </h1>
            <PetForms setPetsArray={setPetsArray} />
          </div>
        </MainContent>
      </div>
    </main>
  );
}
