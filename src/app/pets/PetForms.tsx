"use client";

import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

import { Selection } from "../components/Selection";
import { FormsButtom } from "./FormsButtom";
import { v4 as uuidv4 } from "uuid";
import { InputComponent } from "../components/InputComponent";

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

interface PetFormsProps {
  setPetsArray: Dispatch<SetStateAction<Pet[]>>;
}

export function PetForms({ setPetsArray }: PetFormsProps) {
  const [pet, setPet] = useState<Omit<Pet, "id">>({
    // Remove o campo id ao definir o estado inicial de pet
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
  return (
    <form
      action="get"
      className="flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página
        handleAddPet();
      }}
    >
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl text-pets-color-800">Tutor</h1>
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
            maxLenght={11}
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
            maxLenght={11}
            placeholder="ex: Cep nº"
            label="Endereço"
          />
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl text-pets-color-800">Pet</h1>
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
            label="Idade do pet"
            maxLenght={2}
            type="text"
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
  );
}
