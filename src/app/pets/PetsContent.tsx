"use client";

//TODO modularizar os componentes - código mais limpo
//TODO pesquisa para filtar pets cadastrados

import { Aside2Nav } from "../components/Aside2Nav";
import { MainContent } from "../components/MainContent";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { MdAddBox, MdOutlinePets } from "react-icons/md";
import { InputComponent } from "../components/InputComponent";
import { Selection } from "../components/Selection";
import { FormsButtom } from "../components/FormsButton";
import { PetCard } from "./PetCard";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import pata from "../assets/images/pata.png";
import pataBg from "../assets/images/pataBg.png";
import dogProfile from "../assets/images/dogProfile.png";
import catProfile from "../assets/images/gato.png";
import { LuCat } from "react-icons/lu";
import { LuDog } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

import lupaPet from "..//assets/images/lupaPet.png";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import Link from "next/link";

export function PetsContent() {
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

  const [visualizarPets, setVisualizarPets] = useState(true);
  const [cadastrarPet, setCadastrarPet] = useState(false);

  // const [petsArray, setPetsArray] = useState<Pet[]>([]);
  const [petsArray, setPetsArray] = useState<Pet[]>(() => {
    //localstorage só aceita string
    const savePets = localStorage.getItem("petsArray"); //salvando o array no local storage (dentro do navegador)
    return savePets ? JSON.parse(savePets) : []; // se existir savePets, gerar um json de savePets caso contrário, retorne array vazio
  });

  const [petSelect, setPetSelect] = useState<Pet | null>(null);

  const [pet, setPet] = useState<Omit<Pet, "id">>({
    // Remove o campo id ao definir o estado inicial de pet
    name: "Marley",
    age: "12",
    gender: "macho",
    species: "cachorro",
    breed: "labrador",
    condition: "nenhuma",
    tutor: {
      name: "arthur",
      phone: "981273812",
      cpf: "81729831",
      address: "6817263782",
    },
  });
  useEffect(() => {
    // Salva o petsArray no local storage sempre que ele é atualizado
    localStorage.setItem("petsArray", JSON.stringify(petsArray));
  }, [petsArray]);

  function handleAddPet() {
    const newPet = { ...pet, id: uuidv4() };
    setPetsArray((prevPetsArray) => [...prevPetsArray, newPet]);
    setPet({
      name: "",
      age: "",
      gender: "",
      species: "",
      breed: "",
      condition: "",
      tutor: {
        name: "",
        phone: "",
        cpf: "",
        address: "",
      },
    });
  }

  function handleTutorNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPet((prevPet) => ({
      ...prevPet,
      tutor: {
        ...prevPet.tutor,
        name: e.target.value,
      },
    }));
  }

  function handleTutorPhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPet((prevPet) => ({
      ...prevPet,
      tutor: {
        ...prevPet.tutor,
        phone: e.target.value,
      },
    }));
  }

  function handleTutorCpfChange(e: ChangeEvent<HTMLInputElement>) {
    setPet((prevPet) => ({
      ...prevPet,
      tutor: {
        ...prevPet.tutor,
        cpf: e.target.value,
      },
    }));
  }

  function handleTutorAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setPet((prevPet) => ({
      ...prevPet,
      tutor: {
        ...prevPet.tutor,
        address: e.target.value,
      },
    }));
  }

  function handlePetNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPet({ ...pet, name: e.target.value });
  }

  function handlePetAgeChange(e: ChangeEvent<HTMLInputElement>) {
    setPet({ ...pet, age: e.target.value });
  }

  function handlePetGenderChange(e: ChangeEvent<HTMLSelectElement>) {
    setPet({ ...pet, gender: e.target.value });
  }

  function handlePetSpeciesChange(e: ChangeEvent<HTMLSelectElement>) {
    setPet({ ...pet, species: e.target.value });
  }

  function handlePetBreedChange(e: ChangeEvent<HTMLInputElement>) {
    setPet({ ...pet, breed: e.target.value });
  }

  function handlePetConditionChange(e: ChangeEvent<HTMLInputElement>) {
    setPet({ ...pet, condition: e.target.value });
  }

  function handleVisualizarPets() {
    setVisualizarPets(true);
    setCadastrarPet(false);
  }

  function handleCadastrarPet() {
    setCadastrarPet(true);
    setVisualizarPets(false);
  }
  const bottomDivRef = useRef<HTMLDivElement>(null);

  function handlePetCardClick(pet: Pet) {
    setPetSelect(pet);
    console.log(pet);
    if (bottomDivRef.current) {
      bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    console.log("Pets Array atualizado:", petsArray);
  }, [petsArray]);

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
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

      <div className="flex w-full flex-col relative ">
        <MainContent zIndex="z-40" visualize={visualizarPets}>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b-2 pb-1  w-fit  border-b-mascots-primary-700">
              <Image src={pata} alt="PetIcon" width={32} height={32} />
              <h1 className="text-2xl">Pets</h1>
            </div>
            <p className="text-gray-700 font-jetbrains">
              Clique nos cartões para mais informações
            </p>
            <div className="flex bg-mascots-primary-600 rounded-md overflow-y-scroll p-4 gap-6 w-full flex-wrap max-h-80">
              {petsArray.map((pets) => (
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
            <div className="mt-10">
              {/* Caso nenhum pet esteja selecionado */}
              <div
                className={`${!petSelect ? "bg-gray-100 border border-gray-300 rounded-lg py-8 px-6 shadow-md" : "hidden"}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <Image src={lupaPet} alt="LupaPet" width={64} height={64} />
                  <span className="text-gray-500 font-semibold font-jetbrains text-center">
                    Selecione o Pet para obter informações
                  </span>
                </div>
              </div>

              {/* Caso um pet esteja selecionado */}
              <div
                ref={bottomDivRef}
                className={`${petSelect ? "bg-mascots-primary-600  p-6 rounded-lg shadow-lg" : "hidden"}`}
              >
                <div className="flex gap-6 items-start rounded-lg px-4 py-5 bg-gray-100">
                  <div
                    className={`${petSelect?.species === "Cachorro" ? "rounded-full mt-5 bg-mascots-primary-700 p-3" : "hidden"}`}
                  >
                    <Image
                      alt="DogProfile"
                      src={dogProfile}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div
                    className={`${petSelect?.species === "Gato" ? "rounded-full mt-5 bg-mascots-primary-700 p-3" : "hidden"}`}
                  >
                    <Image
                      alt="catProfile"
                      src={catProfile}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6 w-full text-lg font-jetbrains">
                    {/* Nome do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Nome</span>
                      <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                        {petSelect?.name}
                      </span>
                    </div>

                    {/* Raça do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Raça</span>
                      <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                        {petSelect?.breed}
                      </span>
                    </div>

                    {/* Idade do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Idade</span>
                      <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                        {petSelect?.age} Anos
                      </span>
                    </div>

                    {/* Gênero do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Gênero</span>
                      <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium flex items-center gap-1">
                        {petSelect?.gender === "Macho" ? (
                          <>
                            {petSelect?.gender}
                            <TbGenderMale size={20} color="blue" />
                          </>
                        ) : (
                          <>
                            {petSelect?.gender}
                            <CgGenderFemale size={20} color="red" />
                          </>
                        )}
                      </span>
                    </div>

                    {/* Espécie do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Espécie</span>
                      <span className="bg-gray-200 flex items-center gap-1 rounded-md px-3 py-1 text-gray-900 font-medium">
                        {petSelect?.species === "Cachorro" ? (
                          <>
                            {petSelect?.species}
                            <LuDog size={20} />
                          </>
                        ) : (
                          <>
                            {petSelect?.species}
                            <LuCat size={20} />
                          </>
                        )}
                      </span>
                    </div>

                    {/* Condição Especial do Pet */}
                    <div className="flex flex-col items-start">
                      <span className="text-gray-600">Condição Especial:</span>
                      <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                        {petSelect?.condition || "Nenhuma"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full">
                  <div className="flex  border-b-2 border-dashed border-mascots-primary-700 pb-2 mb-4 items-center gap-2">
                    <FaUser size={32} className="text-mascots-primary-800" />
                    <h2 className="text-xl font-semibold text-gray-800">
                      Informações do Tutor
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                      <p className="  font-medium text-gray-500">Nome:</p>
                      <p className="text-lg  text-gray-800 font-semibold">
                        {petSelect?.tutor.name}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                      <p className="  font-medium text-gray-500">Telefone:</p>
                      <p className="text-lg text-gray-800 font-semibold">
                        {petSelect?.tutor.phone}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                      <p className="  font-medium text-gray-500">CPF:</p>
                      <p className="text-lg font-jetbrains text-gray-800 font-semibold">
                        {petSelect?.tutor.cpf}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                      <p className="  font-medium text-gray-500">Endereço:</p>
                      <p className="text-lg font-jetbrains text-gray-800 font-semibold">
                        {petSelect?.tutor.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-around gap-10 mt-5">
                  <Link
                    href={"/consultas"}
                    className="px-5 py-3 flex items-center gap-1 bg-mascots-primary-800 hover:scale-105 max-w-fit text-gray-200 rounded-md font-semibold transition-all"
                  >
                    <FaClipboardList size={24} />
                    Marcar Consulta
                  </Link>
                  <Link
                    href={"/internato"}
                    className="px-5 py-3 bg-internato-color-800 flex items-center gap-1 hover:scale-105 max-w-fit text-gray-200 rounded-md font-semibold transition-all"
                  >
                    <TbActivityHeartbeat size={24} />
                    Internamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
        <MainContent zIndex="z-10" visualize={cadastrarPet}>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl w-fit border-b-2 pb-1 border-b-mascots-primary-700">
              Cadastrar Pet
            </h1>
            <form
              action="get"
              className="flex flex-col gap-10"
              onSubmit={(e) => {
                e.preventDefault(); // Evita o comportamento padrão de recarregar a página
                handleAddPet();
              }}
            >
              <div className="flex flex-col gap-7">
                <h1 className="text-2xl text-mascots-primary-800">Tutor</h1>
                <div className="flex gap-6">
                  <InputComponent
                    onchange={handleTutorNameChange}
                    value={pet.tutor.name}
                    id="nameTutor"
                    type="text"
                    placeholder="Digite o nome completo"
                    label="Nome do tutor"
                  />
                  <InputComponent
                    onchange={handleTutorPhoneChange}
                    value={pet.tutor.phone}
                    id="phoneTutor"
                    maxLenght={10}
                    type="text"
                    placeholder="ex: (81)12345678"
                    label="Contato"
                  />
                </div>
                <div className="flex gap-6">
                  <InputComponent
                    onchange={handleTutorCpfChange}
                    value={pet.tutor.cpf}
                    id="cpfTutor"
                    maxLenght={11}
                    type="text"
                    placeholder="Digite o CPF"
                    label="Cpf"
                  />
                  <InputComponent
                    onchange={handleTutorAddressChange}
                    value={pet.tutor.address}
                    id="addressTutor"
                    type="text"
                    placeholder="ex: Cidade, Bairro, Rua nº"
                    label="Endereço"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <h1 className="text-2xl text-mascots-primary-800">Pet</h1>
                <div className="flex gap-6">
                  <InputComponent
                    onchange={handlePetNameChange}
                    value={pet.name}
                    id="namePet"
                    type="text"
                    placeholder="Digite o nome do pet"
                    label="Nome do Pet"
                  />
                  <InputComponent
                    onchange={handlePetAgeChange}
                    value={pet.age}
                    id="agePet"
                    maxLenght={2}
                    type="text"
                    label="Idade do pet"
                    placeholder="ex: 12"
                  />
                  <Selection
                    optionLabel="Escolha o gênero"
                    onchange={handlePetGenderChange}
                    value={pet.gender}
                    label="Gênero"
                    id="genderPet"
                    name="genderPet"
                    option1="Macho"
                    option2="Fêmea"
                  />
                </div>
                <div className="flex gap-6">
                  <Selection
                    optionLabel="Escolha a espécie"
                    onchange={handlePetSpeciesChange}
                    value={pet.species}
                    label="Espécie"
                    id="especiePet"
                    name="especiePet"
                    option1="Cachorro"
                    option2="Gato"
                  />

                  <InputComponent
                    onchange={handlePetBreedChange}
                    value={pet.breed}
                    id="breedPet"
                    type="text"
                    label="Raça do pet"
                    placeholder="ex: Labrador"
                  />

                  <InputComponent
                    onchange={handlePetConditionChange}
                    value={pet.condition}
                    id="condicion"
                    type="text"
                    label="Condição Especial"
                    placeholder="Condição Especial"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <FormsButtom onclick={handleAddPet} text="Cadastrar Pet" />
              </div>
            </form>
          </div>
        </MainContent>
      </div>
    </main>
  );
}
