import type { ChangeEvent } from "react";

export function handleTutorNameChange(e: ChangeEvent<HTMLInputElement>) {
  setPet((prevPet) => ({
    ...prevPet,
    tutor: {
      ...prevPet.tutor,
      name: e.target.value,
    },
  }));
}

export function handleTutorPhoneChange(e: ChangeEvent<HTMLInputElement>) {
  setPet((prevPet) => ({
    ...prevPet,
    tutor: {
      ...prevPet.tutor,
      phone: e.target.value,
    },
  }));
}

export function handleTutorCpfChange(e: ChangeEvent<HTMLInputElement>) {
  setPet((prevPet) => ({
    ...prevPet,
    tutor: {
      ...prevPet.tutor,
      cpf: e.target.value,
    },
  }));
}

export function handleTutorAddressChange(e: ChangeEvent<HTMLInputElement>) {
  setPet((prevPet) => ({
    ...prevPet,
    tutor: {
      ...prevPet.tutor,
      address: e.target.value,
    },
  }));
}

export function handlePetNameChange(e: ChangeEvent<HTMLInputElement>) {
  setPet({ ...pet, name: e.target.value });
}

export function handlePetAgeChange(e: ChangeEvent<HTMLInputElement>) {
  setPet({ ...pet, age: e.target.value });
}

export function handlePetGenderChange(e: ChangeEvent<HTMLSelectElement>) {
  setPet({ ...pet, gender: e.target.value });
}

export function handlePetSpeciesChange(e: ChangeEvent<HTMLSelectElement>) {
  setPet({ ...pet, species: e.target.value });
}

export function handlePetBreedChange(e: ChangeEvent<HTMLInputElement>) {
  setPet({ ...pet, breed: e.target.value });
}

export function handlePetConditionChange(e: ChangeEvent<HTMLInputElement>) {
  setPet({ ...pet, condition: e.target.value });
}

export function handleVisualizarPets() {
  setVisualizarPets(true);
  setCadastrarPet(false);
}

export function handleCadastrarPet() {
  setCadastrarPet(true);
  setVisualizarPets(false);
}

function handleAddPet() {
  setPetsArray([...petsArray, pet]);
}

export function setPet(arg0: (prevPet: any) => any) {
  throw new Error("Function not implemented.");
}

export function setVisualizarPets(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setCadastrarPet(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setPetsArray(arg0: any[]) {
  throw new Error("Function not implemented.");
}
