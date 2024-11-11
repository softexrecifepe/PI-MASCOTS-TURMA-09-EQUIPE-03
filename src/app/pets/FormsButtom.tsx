"use client";

import type { ReactEventHandler } from "react";
import { IoMdAddCircle } from "react-icons/io";

interface FormsButtomProps {
  text: string;
  onclick: ReactEventHandler;
}

export function FormsButtom({ text, onclick }: FormsButtomProps) {
  return (
    <button
      onClick={onclick}
      className="bg-pets-color-700 flex justify-center gap-2 text-white w-fit px-6 py-4 rounded-lg hover:bg-pets-color-900 hover:scale-105 transition-all active:bg-pets-color-600 active:text-black"
      type="submit"
    >
      <IoMdAddCircle size={24} /> {text}
    </button>
  );
}
