"use client";

import Link from "next/link";
import { CgGenderFemale } from "react-icons/cg";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { LuDog, LuCat } from "react-icons/lu";
import { TbGenderMale, TbActivityHeartbeat } from "react-icons/tb";
import pataBgDog from "../assets/images/pataBgDog.png";
import pataBgGato from "../assets/images/pataBgGato.png";
import dogProfile from "../assets/images/dogProfile.png";
import catProfile from "../assets/images/gato.png";
import { useRef, useState, type LegacyRef } from "react";
import Image from "next/image";
import lupaPet from "..//assets/images/lupaPet.png";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface Pet {
  id: string; // Adiciona o campo id
  name: string;
  age: string;
  gender: string;
  species: string;
  breed: string;
  condition: string;
  tutor: Tutor;
}

interface PetInfoProps {
  petSelect: Pet | null;
  bottomDivRef: LegacyRef<HTMLDivElement> | undefined;
}

export function PetInfo({ petSelect, bottomDivRef }: PetInfoProps) {
  return (
    <div className="mt-10">
      {/* Caso nenhum pet esteja selecionado */}
      <div
        className={`${!petSelect ? "bg-gray-100 border border-gray-300 rounded-lg py-8 px-6 shadow-md" : "hidden"}`}
      >
        <div className="flex flex-col items-center gap-3">
          <Image src={lupaPet} alt="LupaPet" width={64} height={64} />
          <span className="text-gray-500 font-semibold font-jetbrains text-center">
            Selecione o Pet para obter informações
          </span>
        </div>
      </div>

      {/* Caso um pet esteja selecionado */}
      <div
        ref={bottomDivRef}
        className={`${petSelect ? "bg-mascots-primary-600 p-6 rounded-lg shadow-lg" : "hidden"}`}
      >
        <div className="flex gap-6 items-start shadow-md rounded-lg px-4 py-5 bg-gray-100">
          <div
            className={`${petSelect?.species === "Cachorro" ? "rounded-full mt-5 bg-mascots-primary-700 p-3" : "hidden"}`}
          >
            <Image alt="DogProfile" src={dogProfile} width={100} height={100} />
          </div>
          <div
            className={`${petSelect?.species === "Gato" ? "rounded-full mt-5 bg-mascots-primary-700 p-3" : "hidden"}`}
          >
            <Image alt="catProfile" src={catProfile} width={100} height={100} />
          </div>

          <div className="grid grid-cols-3 gap-6 w-full text-lg font-jetbrains">
            {/* Nome do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Nome</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {petSelect?.name}
              </span>
            </div>

            {/* Raça do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Raça</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {petSelect?.breed}
              </span>
            </div>

            {/* Idade do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Idade</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {petSelect?.age} Anos
              </span>
            </div>

            {/* Gênero do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Gênero</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium flex items-center gap-1">
                {petSelect?.gender === "Macho" ? (
                  <>
                    {petSelect?.gender}
                    <TbGenderMale size={20} color="blue" />
                  </>
                ) : (
                  <>
                    {petSelect?.gender}
                    <CgGenderFemale size={20} color="red" />
                  </>
                )}
              </span>
            </div>

            {/* Espécie do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Espécie</span>
              <span className="bg-gray-200 flex items-center gap-1 rounded-md px-3 py-1 text-gray-900 font-medium">
                {petSelect?.species === "Cachorro" ? (
                  <>
                    {petSelect?.species}
                    <LuDog size={20} />
                  </>
                ) : (
                  <>
                    {petSelect?.species}
                    <LuCat size={20} />
                  </>
                )}
              </span>
            </div>

            {/* Condição Especial do Pet */}
            <div className="flex flex-col items-start">
              <span className="text-gray-600">Condição Especial:</span>
              <span className="bg-gray-200 rounded-md px-3 py-1 text-gray-900 font-medium">
                {petSelect?.condition || "Nenhuma"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg relative shadow-md mt-6 w-full">
          <div className="flex  border-b-2 border-dashed border-mascots-primary-700 pb-2 mb-4 items-center gap-2">
            <FaUser size={32} className="text-mascots-primary-800" />
            <h2 className="text-xl font-semibold text-gray-800">
              Informações do Tutor
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
              <p className="  font-medium text-gray-500">Nome:</p>
              <p className="text-lg  text-gray-800 font-semibold">
                {petSelect?.tutor.name}
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
              <p className="  font-medium text-gray-500">Telefone:</p>
              <p className="text-lg text-gray-800 font-semibold">
                {petSelect?.tutor.phone}
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
              <p className="  font-medium text-gray-500">CPF:</p>
              <p className="text-lg font-jetbrains text-gray-800 font-semibold">
                {petSelect?.tutor.cpf}
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
              <p className="  font-medium text-gray-500">Endereço:</p>
              <p className="text-lg font-jetbrains text-gray-800 font-semibold">
                {petSelect?.tutor.address}
              </p>
            </div>
          </div>
          {petSelect?.species === "Cachorro" ? (
            <>
              <Image
                src={pataBgDog}
                alt="pata"
                className=" absolute bottom-0 right-10"
                height={120}
                width={120}
              />
            </>
          ) : (
            <>
              <Image
                src={pataBgGato}
                alt="pata"
                className=" absolute bottom-0 right-10"
                height={120}
                width={120}
              />
            </>
          )}
        </div>
        <div className="w-full flex justify-around gap-10 mt-5">
          <Link
            href={"/consultas"}
            className="px-5 py-3 flex items-center gap-1 bg-mascots-primary-800 hover:scale-105 max-w-fit text-gray-200 rounded-md font-semibold transition-all"
          >
            <FaClipboardList size={24} />
            Marcar Consulta
          </Link>
          <Link
            href={"/internato"}
            className="px-5 py-3 bg-internato-color-800 flex items-center gap-1 hover:scale-105 max-w-fit text-gray-200 rounded-md font-semibold transition-all"
          >
            <TbActivityHeartbeat size={24} />
            Internamento
          </Link>
        </div>
      </div>
    </div>
  );
}
