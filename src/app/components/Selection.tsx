"use client";

import type { ReactEventHandler } from "react";

interface SelectionProps {
  id: string;
  name: string;
  label: string;
  option1: string;
  option2: string;
  value: string;
  optionLabel: string;
  onchange: ReactEventHandler;
}

export function Selection({
  id,
  name,
  option1,
  option2,
  label,
  value,
  optionLabel,
  onchange,
}: SelectionProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">{label}</label>
      <select
        onChange={onchange}
        value={value}
        id={id}
        name={name}
        className="w-full text-gray-500 p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all"
      >
        <option>{optionLabel}</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
    </div>
  );
}
