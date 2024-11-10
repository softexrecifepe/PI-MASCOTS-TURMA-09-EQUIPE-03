"use client";

import { FaUserDoctor } from "react-icons/fa6";
import { MdScience } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { TbGenderMale } from "react-icons/tb";

import type { MouseEventHandler, ReactEventHandler } from "react";

interface ExameCardProps {
  veterinarianName: string | undefined;
  petName: string | undefined;
  typeExame: string | undefined;
  dataExame: string | undefined;
  tutorName: string | undefined;

  onclick?: MouseEventHandler | undefined;
}

export function ExameCard({
  dataExame,
  petName,
  typeExame,
  veterinarianName,
  tutorName,
  onclick,
}: ExameCardProps) {
  return (
    <>
      <div
        onClick={onclick}
        className=" bg-mascots-primary-700 active:scale-95 cursor-pointer hover:scale-105 transition-all text-gray-800 flex justify-between h-fit flex-col w-cards-pets rounded-lg overflow-hidden shadow-md"
      >
        <div className="text-white flex items-center gap-3 px-3 py-4">
          <FaClipboardList size={24} />
          {petName}
        </div>

        <div className="flex justify-between w-full flex-wrap bg-white gap-5 px-4 py-4 text-black">
          <div className="w-full flex justify-between">
            <span className="flex text-gray-800 items-center gap-1">
              <FaUserDoctor size={20} />
              {veterinarianName}
            </span>

            <span className="flex text-gray-800 items-center gap-1">
              <FaUser size={20} />
              {tutorName}
            </span>
          </div>
          <div className="w-full flex justify-between">
            <span className="flex text-gray-800 items-center gap-1">
              <MdScience size={20} />
              {typeExame === "Parasitológico de pele" ? "Parasito" : typeExame}
            </span>
            <span className="flex items-center text-gray-800 gap-1">
              <FaCalendarAlt size={20} /> {dataExame}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
