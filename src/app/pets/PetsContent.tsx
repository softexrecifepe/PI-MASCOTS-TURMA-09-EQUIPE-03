"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState } from "react";
import { MdOutlinePets } from "react-icons/md";
import { InputComponent } from "../components/InputComponent";
import { Selection } from "../components/Selection";
import { FormsButtom } from "../components/FormsButton";

//TODO possibilidade para cadastrar mais de 1 pet
//TODO colocar condição especial ser ter escolha se sim ou não

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
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl w-fit border-b-2 pb-1 border-b-mascots-primary-700">
              Cadastrar Pets
            </h1>
            <form action="get" className="flex flex-col gap-10">
              <div className="flex flex-col gap-7">
                <h1 className="text-2xl text-mascots-primary-800">Tutor</h1>
                <div className="flex gap-6">
                  <InputComponent
                    id="nameTutor"
                    type="text"
                    placeholder="Digite o nome completo"
                    label="Nome do tutor"
                  />
                  <InputComponent
                    id="phoneTutor"
                    maxLenght={10}
                    type="text"
                    placeholder="ex: (81)12345678"
                    label="Contato"
                  />
                </div>
                <div className="flex gap-6">
                  <InputComponent
                    id="cpfTutor"
                    maxLenght={11}
                    type="text"
                    placeholder="Digite o CPF"
                    label="Cpf"
                  />
                  <InputComponent
                    id="addressTutor"
                    type="text"
                    placeholder="ex: Rua Bairro Rua"
                    label="Endereço"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <h1 className="text-2xl text-mascots-primary-800">Pet</h1>
                <div className="flex gap-6">
                  <InputComponent
                    id="namePet"
                    type="text"
                    placeholder="Digite o nome do pet"
                    label="Nome do Pet"
                  />
                  <Selection
                    id="genderPet"
                    name="genderPet"
                    option1="Macho"
                    option2="Fêmea"
                  />
                </div>
                <div className="flex gap-6">
                  <Selection
                    id="especiePet"
                    name="especiePet"
                    option1="Cachorro"
                    option2="Gato"
                  />

                  <InputComponent
                    id="condicion"
                    type="text"
                    label="Condição Especial"
                    placeholder="Condição Especial"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <FormsButtom text="Cadastrar Pet" />
              </div>
            </form>
          </div>
        </MainContent>
      </div>
    </main>
  );
}
