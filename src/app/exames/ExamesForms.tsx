import { useEffect, useState, type ChangeEvent } from "react";
import { InputComponent } from "../components/InputComponent";
import { SelectVeterinario } from "./SelectVeterinario";
import { v4 as uuidv4 } from "uuid";
import { SelectExamType } from "./SelectExamType";
import { SelectPet } from "./SelectPet";
import { TextArea } from "./TextArea";

interface Tutor {
  name: string;
  phone: string;
  cpf: string;
  address: string;
}

interface Pet {
  id: string;
  name: string;
  age: string;
  gender: string;
  species: string;
  breed: string;
  condition: string;
  tutor: Tutor;
}

interface Exame {
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
}

interface Veterinario {
  name: string;
  crv: string;
  id: string;
}

export function ExamesForms() {
  const [exame, setExame] = useState<Exame>({
    veterinario: {
      name: "",
      crv: "",
      id: "",
    },
    tipo: "",
    detalhe: "",
    petName: "",
    tutorCpf: "",
  });

  useEffect(() => {
    const savedPets = localStorage.getItem("petsArray");
    if (savedPets) {
      setPetsArray(JSON.parse(savedPets));
    }
    const savedVeterinarios = localStorage.getItem("arrayVeterinarios");
    if (!savedVeterinarios) {
      const veterinariosInitial: Veterinario[] = [
        { id: uuidv4(), name: "dr. Arthur", crv: "12345" },
        { id: uuidv4(), name: "dra. Beatriz", crv: "12346" },
        { id: uuidv4(), name: "dra. Gabryella", crv: "12347" },
        { id: uuidv4(), name: "dr. Vinicius", crv: "12348" },
      ];
      localStorage.setItem(
        "arrayVeterinarios",
        JSON.stringify(veterinariosInitial)
      );
      setArrayVeterinarios(veterinariosInitial);
    } else {
      setArrayVeterinarios(JSON.parse(savedVeterinarios));
    }
  }, []);

  const [examesArray, setExamesArray] = useState<Exame[]>(() => {
    const saveExames = localStorage.getItem("examesArray");
    return saveExames ? JSON.parse(saveExames) : [];
  });

  useEffect(() => {
    localStorage.setItem("examesArray", JSON.stringify(examesArray));
  }, [examesArray]);

  const [arrayVeterinarios, setArrayVeterinarios] = useState<Veterinario[]>([]);
  const [petsArray, setPetsArray] = useState<Pet[]>([]);
  const [petFiltrado, setPetFiltrado] = useState<Pet[]>([]);

  function handleSelectedVeterinario(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedVet = arrayVeterinarios.find(
      (vet) => vet.id === e.target.value
    );
    if (selectedVet) {
      setExame((prev) => ({
        ...prev,
        veterinario: { ...selectedVet },
      }));
    }
  }

  function handleExameDetail(e: ChangeEvent<HTMLSelectElement>) {
    setExame({ ...exame, detalhe: e.target.value });
  }

  function handleSelectPet(e: ChangeEvent<HTMLSelectElement>) {
    setExame({ ...exame, petName: e.target.value });
  }

  function handleExameTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    setExame({ ...exame, tipo: e.target.value });
  }

  function handleAddExame() {
    const newExame = { ...exame, id: uuidv4() };
    console.log(newExame);
    setExamesArray((prevExames) => [...prevExames, newExame]);
    setExame({
      detalhe: "",
      petName: "",
      tipo: "",
      tutorCpf: "",
      veterinario: {
        crv: "",
        id: "",
        name: "",
      },
    });
  }

  function handleTutorCpfSearch(e: ChangeEvent<HTMLInputElement>) {
    const cpf = e.target.value;

    // Filtra os pets com o CPF correspondente
    const petsComCpf = petsArray.filter((pet) => pet.tutor.cpf === cpf);

    // Atualiza petFiltrado com os pets correspondentes ao CPF
    setPetFiltrado(petsComCpf);
    setExame((prev) => ({ ...prev, tutorCpf: cpf }));
  }

  return (
    <form
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl text-mascots-primary-800">
          Médico Veterinário
        </h1>
        <div className="flex gap-6">
          <SelectVeterinario
            label="Selecione o Médico Veterinário"
            arrayVeterinarios={arrayVeterinarios}
            onChange={handleSelectedVeterinario}
          />
          <InputComponent
            label="Médico Veterinário"
            id="medVet"
            value={exame.veterinario.name}
            type="text"
            readOnly
          />
          <InputComponent
            label="CRV"
            id="crvVet"
            value={exame.veterinario.crv}
            type="text"
            readOnly
          />
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl text-mascots-primary-800">Exame</h1>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <SelectExamType
              exame={exame}
              label="Tipo do Exame"
              onchange={handleExameTypeChange}
            />
            <InputComponent
              label="Cpf do tutor"
              id="cpfTutor"
              type="text"
              maxLenght={11}
              placeholder="Apenas números"
              value={exame.tutorCpf}
              onchange={handleTutorCpfSearch}
            />

            <SelectPet
              exame={exame}
              petFiltrado={petFiltrado}
              handleSelectPet={handleSelectPet}
              label="Selecione o Pet"
            />
          </div>

          <div className="flex h-80 gap-6">
            <TextArea exame={exame} handleExameDetail={handleExameDetail} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          onClick={handleAddExame}
          className="bg-mascots-primary-700 flex justify-center gap-2 text-white w-fit px-6 py-4 rounded-lg hover:bg-mascots-primary-900 hover:scale-105 transition-all active:bg-mascots-primary-600 active:text-black"
        >
          Prescrever Exame
        </button>
      </div>
    </form>
  );
}
