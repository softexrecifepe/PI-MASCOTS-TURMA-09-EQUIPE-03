import type { ReactEventHandler } from "react";

interface Veterinario{
    id:string;
    name:string;
    crv:string;
}

interface Consulta{
    id:string
    veterinario:Veterinario;
    tipoConsulta:string;
    detalhe: string;
    tutorCpf:string;
    petName:string |undefined;
    petId:string;
    data:string;

}
interface TextAreaConsultaProps {
  consulta: Consulta;
  handleConsultaDetail: ReactEventHandler;
}

export function TextAreaConsulta({ consulta, handleConsultaDetail }: TextAreaConsultaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium pl-1 text-gray-700">
        Descrição da Consulta
      </label>
      <textarea
        className="w-full px-4 py-3 border resize-none font-jetbrains h-full font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500 transition-all"
        value={consulta.detalhe}
        onChange={handleConsultaDetail}
      ></textarea>
    </div>
  );
}