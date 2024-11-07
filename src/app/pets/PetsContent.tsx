"use client";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { MainContent } from "../components/MainContent";
import { useState, type ChangeEvent } from "react";
import { MdAddBox, MdOutlinePets } from "react-icons/md";
import { InputComponent } from "../components/InputComponent";
import { Selection } from "../components/Selection";
import { FormsButtom } from "../components/FormsButton";

export function PetsContent() {
  const [visualizarPets, setVisualizarPets] = useState(true);
  const [cadastrarPet, setCadastrarPet] = useState(false);

  const [tutor, setTutor] = useState({
    name: "",
    phone: "",
    cpf: "",
    address: "",
    pets: [] as Array<{
      name: string;
      age: string;
      gender: string;
      species: string;
      breed: string;
      condition: string;
    }>,
  });

  const [pet, setPet] = useState({
    name: "",
    age: "",
    gender: "",
    species: "",
    breed: "",
    condition: "",
  });

  function handleTutorNameChange(e: ChangeEvent<HTMLInputElement>) {
    setTutor({ ...tutor, name: e.target.value });
  }

  function handleTutorPhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setTutor({ ...tutor, phone: e.target.value });
  }

  function handleTutorCpfChange(e: ChangeEvent<HTMLInputElement>) {
    setTutor({ ...tutor, cpf: e.target.value });
  }

  function handleTutorAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setTutor({ ...tutor, address: e.target.value });
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

  function handleAddPet() {
    // Atualiza o tutor com o novo pet
    const updatedTutor = {
      ...tutor,
      pets: [...tutor.pets, pet], // Adiciona o pet atual ao array 'pets'
    };

    // Limpa os campos do pet após adicionar
    setPet({
      name: "",
      age: "",
      gender: "",
      species: "",
      breed: "",
      condition: "",
    });

    console.log(updatedTutor);
  }

  function handleVisualizarPets() {
    setVisualizarPets(true);
    setCadastrarPet(false);
  }

  function handleCadastrarPet() {
    setCadastrarPet(true);
    setVisualizarPets(false);
  }

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
          <h1 className="text-2xl w-fit border-b-2 pb-1 border-b-mascots-primary-700">
            Pets
          </h1>
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
                    value={tutor.name}
                    id="nameTutor"
                    type="text"
                    placeholder="Digite o nome completo"
                    label="Nome do tutor"
                  />
                  <InputComponent
                    onchange={handleTutorPhoneChange}
                    value={tutor.phone}
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
                    value={tutor.cpf}
                    id="cpfTutor"
                    maxLenght={11}
                    type="text"
                    placeholder="Digite o CPF"
                    label="Cpf"
                  />
                  <InputComponent
                    onchange={handleTutorAddressChange}
                    value={tutor.address}
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
