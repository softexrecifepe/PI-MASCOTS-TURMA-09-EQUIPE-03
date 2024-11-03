"use client";

import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { FiActivity, FiBox } from "react-icons/fi";
import { FaBell, FaRegUserCircle } from "react-icons/fa";

import Image from "next/image";
import Icone from "../assets/images/icon.png";
import Link from "next/link";

export function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-mascots-primary-600 font-roboto text-white p-4 flex justify-between items-center">
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
            <Link
              href="/home"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-100"
            >
              <AiFillHome
                size={24}
                className="transition-colors duration-100"
              />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center flex-1">
            <Link
              href="/exames"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <MdAssignment
                size={24}
                className="transition-colors duration-200"
              />
              <span>Exames</span>
            </Link>
          </li>
          <li className="flex items-center flex-1">
            <Link
              href="/consultas"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FaHeartbeat
                size={24}
                className="transition-colors duration-200"
              />
              <span>Consultas</span>
            </Link>
          </li>
          <li className="flex items-center flex-1">
            <Link
              href="/internato"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FiActivity
                size={24}
                className="transition-colors duration-200"
              />
              <span>Internato</span>
            </Link>
          </li>
          <li className="flex items-center flex-1">
            <Link
              href="/recursos"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FiBox size={24} className="transition-colors duration-200" />
              <span>Recursos</span>
            </Link>
          </li>
          <li className="flex items-center flex-1">
            <Link
              href="/pets"
              className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200"
            >
              <FaPaw size={24} className="transition-colors duration-200" />
              <span>Pets</span>
            </Link>
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
