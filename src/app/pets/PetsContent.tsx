"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { MainContent } from "../components/MainContent";
import { useEffect, useState, type ChangeEvent } from "react";
import { MdAddBox, MdOutlinePets } from "react-icons/md";
import { InputComponent } from "../components/InputComponent";
import { Selection } from "../components/Selection";
import { FormsButtom } from "../components/FormsButton";
import { PetCard } from "./PetCard";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import pata from "../assets/images/pata.png";

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

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarPets}>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 border-b-2 pb-1  w-fit  border-b-mascots-primary-700">
              <Image src={pata} alt="PetIcon" width={32} height={32} />
              <h1 className="text-2xl">Pets</h1>
            </div>

            <div className="flex gap-5 w-full flex-wrap h-fit">
              {petsArray.map((pets) => (
                <PetCard
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
