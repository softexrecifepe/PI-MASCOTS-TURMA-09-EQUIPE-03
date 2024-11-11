"use client";

import type { ChangeEventHandler } from "react";

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

interface SelectExamTypeProps {
  onchange: ChangeEventHandler<HTMLSelectElement> | undefined;
  exame: Exame;
  label: string;
}

export function SelectExamType({
  exame,
  onchange,
  label,
}: SelectExamTypeProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>
      <select
        className="w-full text-gray-500 p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all"
        onChange={onchange}
        value={exame.tipo}
      >
        <option value="tipo">Tipo de Exame</option>
        <option value="Hemograma">🩸 Hemograma</option>
        <option value="Bioquímico">🧪 Bioquímico</option>
        <option value="Ava. Citopatológicas">
          🧫 Avaliação de lâminas citopatológicas
        </option>
        <option value="Parasito. Pele">🦠 Parasitológico de pele</option>
        <option value="Urinalise">🧪 Urinalise</option>
      </select>
    </div>
  );
}
