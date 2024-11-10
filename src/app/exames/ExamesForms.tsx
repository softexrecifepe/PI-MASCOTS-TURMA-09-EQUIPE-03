"use client";

import { useEffect, useState, type ChangeEventHandler } from "react";
import { v4 as uuidv4 } from "uuid"; // Importa a função uuid para gerar IDs únicos
import { InputComponent } from "../components/InputComponent";
import { Selection } from "../components/Selection";
import { SelectedVeterinario } from "./SelectVeterinario";
// import FormsButton from "../components/FormsButton"; // Certifique-se de que esse componente está importado corretamente

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
  pet: Pet;
}

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

export function ExamesForms() {
  const [petsArray, setPetsArray] = useState<Pet[]>([]);
  const [arrayVeterinarios, setArrayVeterinarios] = useState<Veterinario[]>([]);
  const [selectedVeterinarian, setSelectedVeterinarian] = useState("");

  function handleSelectedVeterinario(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedVeterinarian(e.target.value);
  }

  useEffect(() => {
    const savedPets = localStorage.getItem("petsArray");
    if (savedPets) {
      setPetsArray(JSON.parse(savedPets));
    }

    const savedVeterinarios = localStorage.getItem("arrayVeterinarios");
    if (!savedVeterinarios) {
      const veterinariosInitial: Veterinario[] = [
        { id: uuidv4(), name: "dr. Arthur", crv: "12345" },
        { id: uuidv4(), name: "dra. Beatriz", crv: "12346" },
        { id: uuidv4(), name: "dra. Gabryella", crv: "12347" },
        { id: uuidv4(), name: "dr. Vinicius", crv: "12348" },
      ];

      localStorage.setItem(
        "arrayVeterinarios",
        JSON.stringify(veterinariosInitial)
      );
      setArrayVeterinarios(veterinariosInitial);
    } else {
      setArrayVeterinarios(JSON.parse(savedVeterinarios));
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log(arrayVeterinarios);
        }}
      >
        Exibir Veterinários
      </button>

      <SelectedVeterinario
        arrayVeterinarios={arrayVeterinarios}
        handleSelectedVeterinario={handleSelectedVeterinario}
      />

      <textarea readOnly value={selectedVeterinarian}></textarea>
    </>
  );
}
