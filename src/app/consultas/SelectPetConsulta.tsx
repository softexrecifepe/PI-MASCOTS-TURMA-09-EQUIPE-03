import type { ReactEventHandler } from "react";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address?: string;
}

interface Veterinario {
  name: string;
  crv: string;
  id: string;
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

interface SelectPetConsultaProps {
  consulta: Consulta;
  handleSelectPetConsulta: ReactEventHandler<HTMLSelectElement>;
  label?: string;
  filtrarPet: Pet[];
}

export function SelectPetConsulta({
  filtrarPet,
  label,
  consulta,
  handleSelectPetConsulta,
}: SelectPetConsultaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>
      <select
        value={consulta.petId} 
        onChange={handleSelectPetConsulta}
        className="w-full text-gray-500 p-2 border rounded-md focus:outline-none"
      >
        <option value="">Selecione o Pet</option>
        {filtrarPet.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))}
      </select>
    </div>
  );
}
