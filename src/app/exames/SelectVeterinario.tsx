interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

interface SelectVeterinarioProps {
  label?: string;
  arrayVeterinarios: Veterinario[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectVeterinario({
  arrayVeterinarios,
  onChange,
  label,
}: SelectVeterinarioProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>
      <select
        className="w-full text-gray-500 p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all"
        onChange={onChange}
      >
        <option value="">Selecione o veterinário</option>
        {arrayVeterinarios.map((vet) => (
          <option key={vet.id} value={vet.id}>
            {vet.name}
          </option>
        ))}
      </select>
    </div>
  );
}
