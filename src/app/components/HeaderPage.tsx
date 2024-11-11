"use client";

import { FaPaw, FaBell, FaRegUserCircle } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { FiActivity, FiBox } from "react-icons/fi";

import logo from "../assets/images/icon.png";

import Image from "next/image";
import Link from "next/link";

interface HeaderPageProps {
  home?: boolean;
  exames?: boolean;
  consutas?: boolean;
  internato?: boolean;
  recursos?: boolean;
  pets?: boolean;
}

export function HeaderPage({
  consutas,
  exames,
  internato,
  pets,
  recursos,
}: HeaderPageProps) {
  return (
    <header className="bg-white font-roboto text-gray-800 h-20 p-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Ícone" width={50} height={50} />
      </div>

      <nav className="w-full">
        <ul className="flex gap-8 justify-center">
          <li className="group flex items-center">
            <Link
              href="/consultas"
              className={`${
                consutas
                  ? "bg-mascots-primary-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-mascots-primary-800 group-hover:shadow-lg group-hover:shadow-mascots-primary-800 group-hover:text-white`}
            >
              <FaUserDoctor size={24} />
              <span>Consultas</span>
            </Link>
          </li>

          <li className="group flex items-center">
            <Link
              href="/exames"
              className={`${
                exames
                  ? "bg-exames-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-exames-color-800 group-hover:shadow-lg group-hover:shadow-exames-color-800 group-hover:text-white`}
            >
              <MdAssignment size={24} />
              <span>Exames</span>
            </Link>
          </li>

          <li className="group flex items-center">
            <Link
              href="/internato"
              className={`${
                internato
                  ? "bg-internato-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-internato-color-800 group-hover:shadow-lg group-hover:shadow-internato-color-800 group-hover:text-white`}
            >
              <FiActivity size={24} />
              <span>Internato</span>
            </Link>
          </li>

          <li className="group flex items-center">
            <Link
              href="/recursos"
              className={`${
                recursos
                  ? "bg-recursos-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-recursos-color-800 group-hover:shadow-lg group-hover:shadow-recursos-color-800 group-hover:text-white`}
            >
              <FiBox size={24} />
              <span>Recursos</span>
            </Link>
          </li>

          <li className="group flex items-center">
            <Link
              href="/pets"
              className={`${
                pets
                  ? "bg-pets-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-pets-color-800 group-hover:shadow-lg group-hover:shadow-pets-color-800 group-hover:text-white`}
            >
              <FaPaw size={24} />
              <span>Pets</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-4 flex items-center space-x-6">
        <FaBell
          size={24}
          className="text-gray-600 hover:text-black transition-colors duration-200"
        />
        <FaRegUserCircle
          size={32}
          className="text-gray-800 hover:text-black transition-colors duration-200"
        />
      </div>
    </header>
  );
}
