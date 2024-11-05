interface InputProps {
  type: string;
  maxLenght?: number;
  id: string;
  label?: string;
  placeholder?: string;
}

export function InputComponent({
  type,
  id,
  label,
  placeholder,
  maxLenght,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={id} className="font-medium pl-1 text-gray-700">
          {label}
        </label>
        <input
          type={type}
          id={id}
          maxLength={maxLenght}
          placeholder={placeholder}
          className="w-full p-2 border font-jetbrains font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 font-jebrains transition-all "
          required
        />
      </div>
    </>
  );
}
