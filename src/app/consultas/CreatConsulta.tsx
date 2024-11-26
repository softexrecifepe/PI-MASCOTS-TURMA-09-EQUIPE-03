"use client";

import type { ChangeEventHandler } from "react";

interface Veterinario{
    id:string;
    name:string;
    crv:string;
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
interface InputExamTypeProps {
  onchange: ChangeEventHandler<HTMLInputElement> | undefined;
  consulta: Consulta;
  label: string;
}

export function CreatConsulta({
  consulta,
  onchange,
  label,
}: InputExamTypeProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>
      <input
        type="text"
        className="w-full text-gray-500 p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all"
        onChange={onchange}
        value={consulta.tipoConsulta}
        placeholder="Digite o tipo de consulta"
      />
    </div>
  );
}
