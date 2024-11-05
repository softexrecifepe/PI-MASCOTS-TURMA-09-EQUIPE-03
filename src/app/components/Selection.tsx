"use client";

interface SelectionProps {
  id: string;
  name: string;
  option1: string;
  option2: string;
}

export function Selection({ id, name, option1, option2 }: SelectionProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">Gênero</label>
      <select
        id={id}
        name={name}
        className="w-full p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all "
      >
        <option>{option1}</option>
        <option>{option2}</option>
      </select>
    </div>
  );
}
