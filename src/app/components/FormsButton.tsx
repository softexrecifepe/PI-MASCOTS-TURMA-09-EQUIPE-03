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
      className="bg-mascots-primary-700 flex justify-center gap-2 text-white w-fit px-6 py-4 rounded-lg hover:bg-mascots-primary-900 hover:scale-105 transition-all active:bg-mascots-primary-600 active:text-black"
      type="submit"
    >
      <IoMdAddCircle size={24} /> {text}
    </button>
  );
}
