"use client";
import { BsClipboardPlusFill } from "react-icons/bs";
import { Aside2Nav } from "../components/Aside2Nav";
import { IoMdAddCircle } from "react-icons/io";
import { TbAlignBoxBottomCenterFilled } from "react-icons/tb";
import { MainContent } from "../components/MainContent";
import { useState } from "react";
import Image from "next/image";
import { MdAddBox } from "react-icons/md";
import Estatistica from "../assets/images/Estatistica.png";

export function RecursosContent() {
  const [visualizarRecursos, setVisualizarRecursos] = useState(true);
  const [registarRecursos, setRegistarRecursos] = useState(false);

  // Definindo o estado 'recursos' que vai armazenar os recursos registrados
  const [recursos, setRecursos] = useState([
    { codigo: 944, nome: "Canigen R", tipo: "Vacina", status: "Disponível", quantidade: "100 unid" },
    { codigo: 941, nome: "Luvas", tipo: "EPI", status: "Disponível", quantidade: "300 cx" },
    { codigo: 4006, nome: "Bisturi", tipo: "Corto-perfurantes", status: "Disponível", quantidade: "30 unid" },
    { codigo: 964, nome: "Alantol", tipo: "Medicamentos", status: "Indisponível", quantidade: "0" },
    { codigo: 4047, nome: "Probiótico Pet Avert", tipo: "Nutrição", status: "Disponível", quantidade: "25 unid" },
  ]);

  const [novoRecurso, setNovoRecurso] = useState({
    nome: "",
    tipo: "",
    status: "Disponível",
    quantidade: "",
  });

  const handleVisualizarRecursos = () => {
    setVisualizarRecursos(true);
    setRegistarRecursos(false);
  };

  const handleRegistrarRecurso = () => {
    setRegistarRecursos(true);
    setVisualizarRecursos(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNovoRecurso({ ...novoRecurso, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const codigoGerado = Date.now(); // Gera um código único baseado no timestamp
    setRecursos([...recursos, { ...novoRecurso, codigo: codigoGerado }]);
    setNovoRecurso({ nome: "", tipo: "", status: "Disponível", quantidade: "" }); // Reseta o formulário
  };

  return (
    <main className="flex px-4 py-4 gap-2 min-h-screen">
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

      <div className="flex w-full h-fit flex-col relative">
        {/* MainContent de Visualizar Recursos */}
        <MainContent zIndex="z-40" visualize={visualizarRecursos}>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b-2 pb-1  w-fit  border-b-recursos-color-600">
              <Image
                  src={Estatistica}
                  alt="PetIcon"
                  unoptimized
                  width={50}
                  height={50}
                />
                <h1 className="text-2xl font-jetbrains">Recursos</h1>
              </div>
              <p className="text-gray-700 font-jetbrains">
                Clique nos cartões para mais informações
              </p>
            </div>
          </div>

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
                  <td className="border border-gray-300 px-4 py-2">{recurso.codigo}</td>
                  <td className="border border-gray-300 px-4 py-2">{recurso.nome}</td>
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
                  <td className="border border-gray-300 px-4 py-2">{recurso.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MainContent>

        {/* MainContent de Registrar Recursos */}
        <MainContent zIndex="z-10" visualize={registarRecursos}>
          <h1 className="text-xl font-bold">Registrar Recurso</h1>
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome do Recurso"
              value={novoRecurso.nome}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="tipo"
              placeholder="Tipo do Recurso"
              value={novoRecurso.tipo}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="quantidade"
              placeholder="Quantidade"
              value={novoRecurso.quantidade}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="status"
              value={novoRecurso.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Disponível">Disponível</option>
              <option value="Indisponível">Indisponível</option>
            </select>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-all duration-200"
            >
              Adicionar Recurso
            </button>
          </form>
        </MainContent>
      </div>
    </main>
  );
}
