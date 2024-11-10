"use client";

import type { ChangeEventHandler } from "react";

interface Veterinario {
  id: string;
  name: string;
}

interface SelectedVeterinarioProps {
  handleSelectedVeterinario: ChangeEventHandler<HTMLSelectElement>;
  arrayVeterinarios: Veterinario[];
}

export function SelectedVeterinario({
  arrayVeterinarios,
  handleSelectedVeterinario,
}: SelectedVeterinarioProps) {
  return (
    <select onChange={handleSelectedVeterinario}>
      <option>Médico veterinário</option>
      {arrayVeterinarios.map((veterinario) => (
        <option key={veterinario.id} value={veterinario.name}>
          {veterinario.name}
        </option>
      ))}
    </select>
  );
}
