import type { ReactEventHandler } from "react";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

interface Exame {
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
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

interface SelectPetProps {
  exame: Exame;
  handleSelectPet: ReactEventHandler<HTMLSelectElement>;
  label?: string;
  petFiltrado: Omit<Pet, "id">[];
}

export function SelectPet({
  petFiltrado,
  label,
  exame,
  handleSelectPet,
}: SelectPetProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>

      <select
        value={exame.petName}
        onChange={handleSelectPet}
        className="w-full text-gray-500 p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all"
      >
        <option value="selecione">Selecione o Pet</option>
        {petFiltrado.map((pet) => (
          <option key={pet.name} value={pet.name}>
            {" "}
            {/* Corrigido para pet.name */}
            {pet.name}
          </option>
        ))}
      </select>
    </div>
  );
}
