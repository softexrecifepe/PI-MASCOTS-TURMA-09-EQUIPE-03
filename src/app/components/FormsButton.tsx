"use client";

interface FormsButtomProps {
  text: string;
}

export function FormsButtom({ text }: FormsButtomProps) {
  return (
    <button
      className="bg-mascots-primary-700 text-white w-fit px-6 py-4 rounded-lg hover:bg-mascots-primary-900 hover:scale-105 transition-all active:bg-mascots-primary-600 active:text-black"
      type="submit"
    >
      {text}
    </button>
  );
}
