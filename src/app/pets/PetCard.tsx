"use client";

import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuDog } from "react-icons/lu";
import { CgGenderFemale } from "react-icons/cg";
import { TbGenderMale } from "react-icons/tb";
import { LuCat } from "react-icons/lu";

interface petCardProps {
  name: string;
  gender: string;
  age: string;
  breed: string;
  tutorName: string;
  specie: string;
}

export function PetCard({
  name,
  age,
  breed,
  specie,
  tutorName,
  gender,
}: petCardProps) {
  return (
    <div className=" bg-mascots-primary-700 cursor-pointer hover:scale-105 transition-all text-gray-800 flex justify-between h-fit flex-col w-60 rounded-lg overflow-hidden shadow-md">
      <div
        className={`${specie === "Gato" ? "text-white flex items-center gap-3 px-3 py-4" : "hidden"}`}
      >
        <FaCat size={24} />
        {name}
      </div>
      <div
        className={`${specie === "Cachorro" ? "text-white flex items-center gap-3 px-3 py-4" : "hidden"}`}
      >
        <FaDog fill="white" size={24} />
        {name}
      </div>

      <div className="flex justify-between w-full flex-wrap bg-white gap-5 px-4 py-4 text-black">
        <div className="w-full flex justify-between">
          <span className="flex items-center text-gray-800 gap-1">
            <FaCalendarAlt size={20} /> {age} anos
          </span>
          <span
            className={`${specie === "Cachorro" ? "flex text-gray-800 items-center gap-1" : "hidden"}`}
          >
            <LuDog size={20} />
            {breed}
          </span>
          <span
            className={`${specie === "Gato" ? "flex text-gray-800 items-center gap-1" : "hidden"}`}
          >
            <LuCat size={20} />
            {breed}
          </span>
        </div>
        <div className="w-full flex justify-between">
          <span className="flex text-gray-800 items-center gap-1">
            <FaUser size={20} />
            {tutorName}
          </span>
          <span
            className={`${gender === "Macho" ? "flex text-gray-800 items-center gap-1" : "hidden"}`}
          >
            <TbGenderMale size={20} color="blue" />
            {gender}
          </span>
          <span
            className={`${gender === "Fêmea" ? "flex text-gray-800 items-center gap-1" : "hidden"}`}
          >
            <CgGenderFemale size={20} color="pink" />
            {gender}
          </span>
        </div>
      </div>
    </div>
  );
}
