"use client";

import { useState } from "react";
import Usuario from "../assets/images/usuario.png";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { FiActivity, FiBox } from "react-icons/fi";
import { FaBell, FaRegUserCircle } from "react-icons/fa";

import Image from "next/image";
import Icone from "../assets/images/icon.png";

export function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-mascots-primary-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={Icone}
          alt="Ícone"
          width={32}
          height={32}
          className="mr-2"
        />
        <h1 className="text-lg font-bold">Mascot's</h1>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li className="flex items-center flex-1">
            <a
              href="#home"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-100"
            >
              <AiFillHome
                size={24}
                className="transition-colors duration-100"
              />
              <span>Home</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a
              href="#exames"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <MdAssignment
                size={24}
                className="transition-colors duration-200"
              />
              <span>Exames</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a
              href="#consultas"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <AiOutlineHeart
                size={24}
                className="transition-colors duration-200"
              />
              <span>Consultas</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a
              href="#internato"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FiActivity
                size={24}
                className="transition-colors duration-200"
              />
              <span>Internato</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a
              href="#recursos"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FiBox size={24} className="transition-colors duration-200" />
              <span>Recursos</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-4 flex items-center space-x-4">
        <FaBell size={24} className="text-black" />
        <FaRegUserCircle size={35} className="text-white" />
      </div>
    </header>
  );
}
