"use client";

import { useState, type LegacyRef } from "react";
import Image from "next/image";
import exames from "../assets/images/exames.png";

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

interface Pet {
  name: string;
  age: number;
  species: string;
  breed: string;
  id: string;
}

interface Exame {
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
  petId: string; // Adiciona petId como string
  data: string;
  id: string; // Adiciona o id único para o exame
}

interface ExamesInfoProps {
  exameSelect: Exame | null;
  bottomDivRef: LegacyRef<HTMLDivElement> | undefined;
}

export function ExamesInfo({ exameSelect, bottomDivRef }: ExamesInfoProps) {
  return (
    <div className="w-full">
      {/* Caso nenhum exame esteja selecionado */}
      <div
        className={`${!exameSelect ? "bg-gray-100 border border-gray-300 rounded-lg py-8 px-6 shadow-md" : "hidden"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-gray-500 font-semibold text-center">
            Selecione um exame para obter informações
          </span>
        </div>
      </div>

      {/* Caso um exame esteja selecionado */}
      <div
        ref={bottomDivRef}
        className={`${exameSelect ? "bg-mascots-primary-600 p-6 flex flex-col gap-4 rounded-lg shadow-lg" : "hidden"}`}
      >
        <div className="flex gap-6 items-start shadow-md object-cover rounded-lg px-4 py-5 bg-gray-100">
          <div className="rounded-full mt-5 bg-mascots-primary-700 p-5">
            <Image
              alt="examesImage"
              src={exames}
              width={100}
              unoptimized
              height={100}
            />
          </div>

          <div className="grid grid-cols-3 gap-6 items-center w-full text-lg font-jetbrains">
            {/* Nome do Veterinario */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Médico Veterinário</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.veterinario.name}
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-gray-600">Crmv</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.veterinario.crv}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Cpf tutor</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.tutorCpf}
              </span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-gray-600">Tipo do Exame</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.tipo}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Nome do Pet</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.petName}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Data de Emissão do Exame</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.data}
              </span>
            </div>
          </div>
        </div>

        {/* Informações do Pet */}
        <div className="flex gap-6 items-start shadow-md object-cover rounded-lg px-4 py-5 bg-gray-100">
          <div className="flex flex-col items-start w-full text-lg font-jetbrains">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Detalhes do Exame
            </h2>

            <div className="flex flex-col w-full items-start">
              <span className="bg-gray-200 rounded-md w-full px-3 py-1 text-gray-900 font-medium">
                {exameSelect?.detalhe}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
