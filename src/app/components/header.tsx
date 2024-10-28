import { useState } from "react";
import Usuario from "../assets/images/index";
import { FaHome, FaFileMedical, FaHeartbeat, FaUser, FaBoxOpen, FaBell, FaRegUserCircle  } from "react-icons/fa"; 
import { MdLocalHospital } from "react-icons/md";
import Image from "next/image"; 
import Icone from "../assets/images/index"; 



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#05A5A5] text-white p-4 flex justify-between items-center">
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
      <ul className="flex space-x-8"> {}
          <li className="flex items-center flex-1">
            <a href="#home" className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200">
              <FaHome size={24} className="transition-colors duration-200" />
              <span>Home</span>
            </a>
          </li>

          <li className="flex items-center flex-1">
            <a href="#exames" className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200">
              <FaFileMedical size={24} className="transition-colors duration-200" />
              <span>Exames</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a href="#consultas" className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200">
              <FaHeartbeat size={24} className="transition-colors duration-200" />
              <span>Consultas</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a href="#internato" className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200">
              <FaFileMedical size={24} className="transition-colors duration-200" />
              <span>Internato</span>
            </a>
          </li>
          <li className="flex items-center flex-1">
            <a href="#recursos" className="flex items-center space-x-2 hover:bg-white hover:text-black text-white p-2 rounded w-full text-left transition-colors duration-200">
              <FaBoxOpen size={24} className="transition-colors duration-200" />
              <span>Recursos</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-4 flex items-center space-x-4">
        <FaBell size={24} className="text-black" /> {}
        <FaRegUserCircle  size={35} className="text-white" /> {}
      </div>
    </header>
  );
}
