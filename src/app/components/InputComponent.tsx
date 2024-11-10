import type { ReactEventHandler } from "react";

interface InputProps {
  type: string;
  maxLenght?: number;
  id: string;
  label?: string;
  placeholder?: string;
  onchange?: ReactEventHandler;
  value: string | undefined;
  readOnly?: boolean;
}

export function InputComponent({
  type,
  id,
  label,
  placeholder,
  maxLenght,
  onchange,
  value,
  readOnly = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="font-medium pl-1 text-gray-700">
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onchange}
        type={type}
        id={id}
        maxLength={maxLenght}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full p-2 border font-jetbrains h-full font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 transition-all ${
          readOnly ? "bg-gray-200 text-gray-800" : "bg-white"
        }`}
        required
      />
    </div>
  );
}
