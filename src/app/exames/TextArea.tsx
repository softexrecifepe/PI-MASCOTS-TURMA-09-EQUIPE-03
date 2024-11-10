import type { ReactEventHandler } from "react";

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

interface Exame {
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
}

interface TextAreaProps {
  exame: Exame;
  handleExameDetail: ReactEventHandler;
}

export function TextArea({ exame, handleExameDetail }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">
        Descrição do exame
      </label>
      <textarea
        className="w-full px-4 py-3 border resize-none font-jetbrains h-full font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 transition-all"
        value={exame.detalhe}
        onChange={handleExameDetail}
      ></textarea>
    </div>
  );
}
