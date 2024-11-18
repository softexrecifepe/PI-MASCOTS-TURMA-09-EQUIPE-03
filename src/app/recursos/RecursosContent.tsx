"use client";
import { BsClipboardPlusFill } from "react-icons/bs";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { TbAlignBoxBottomCenterFilled } from "react-icons/tb";
import { MainContent } from "../components/MainContent";
import { useState } from "react";
import { MdAddBox } from "react-icons/md";

export function RecursosContent() {
  const [visualizarRecursos, setVisualizarRecursos] = useState(true);
  const [registarRecursos, setRegistarRecursos] = useState(false);

  function handleVisualizarRecursos() {
    setVisualizarRecursos(true);
    setRegistarRecursos(false);
  }

  function handleRegistrarRecurso() {
    setRegistarRecursos(true);
    setVisualizarRecursos(false);
  }

  const recursos = [
    {
      codigo: 944,
      nome: "Canigen R",
      tipo: "Vacina",
      status: "Disponível",
      quantidade: "100 unid",
    },
    {
      codigo: 941,
      nome: "Luvas",
      tipo: "EPI",
      status: "Disponível",
      quantidade: "300 cx",
    },
    {
      codigo: 4006,
      nome: "Bisturi",
      tipo: "Corto-perfurantes",
      status: "Disponível",
      quantidade: "30 unid",
    },
    {
      codigo: 964,
      nome: "Alantol",
      tipo: "Medicamentos",
      status: "Indisponível",
      quantidade: "0",
    },
    {
      codigo: 4047,
      nome: "Probiótico Pet Avert",
      tipo: "Nutrição",
      status: "Disponível",
      quantidade: "25 unid",
    },
  ];

  return (
    <main className="flex px-4 py-4 gap-2 h-dvh">
      <Aside2Nav
        icon1={<TbAlignBoxBottomCenterFilled size={24} />}
        text1="Visualizar Recurso"
        onClick1={handleVisualizarRecursos}
        isAces1={visualizarRecursos}
        icon2={<MdAddBox size={24} />}
        text2="Registrar Recurso"
        onClick2={handleRegistrarRecurso}
        isAces2={registarRecursos}
        width="w-64"
      />

      <div className="flex w-full flex-col relative">
        <MainContent zIndex="z-40" visualize={visualizarRecursos}>
          <h1 className="text-xl font-bold mb-4">Visualizar Recursos</h1>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Código</th>
                <th className="border border-gray-300 px-4 py-2">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Tipo</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {recursos.map((recurso, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {recurso.codigo}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {recurso.nome}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-1 text-white rounded ${
                        recurso.tipo === "Vacina"
                          ? "bg-purple-600"
                          : recurso.tipo === "EPI"
                          ? "bg-pink-500"
                          : recurso.tipo === "Corto-perfurantes"
                          ? "bg-orange-500"
                          : recurso.tipo === "Medicamentos"
                          ? "bg-yellow-600"
                          : "bg-green-500"
                      }`}
                    >
                      {recurso.tipo}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        recurso.status === "Disponível"
                          ? "bg-green-100 text-green-700 border border-green-500"
                          : "bg-red-100 text-red-700 border border-red-500"
                      }`}
                    >
                      {recurso.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {recurso.quantidade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainContent>
        <MainContent zIndex="z-10" visualize={registarRecursos}>
          <h1 className="text-xl font-bold">Registrar Recurso</h1>
        </MainContent>
      </div>
    </main>
  );
}
