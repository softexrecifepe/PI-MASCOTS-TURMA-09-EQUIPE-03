interface InputProps {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
}

export function InputComponent({ type, id, label, placeholder }: InputProps) {
  return (
    <>
      <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500"
        required
      />
    </>
  );
}
