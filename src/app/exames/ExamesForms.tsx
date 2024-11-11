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

interface Veterinario {
  name: string;
  crv: string;
  id: string; // Veterinário agora tem o campo 'id' como requerido
}

interface Exame {
  id: string; // Adicionado id único para Exame
  veterinario: Veterinario;
  tipo: string;
  detalhe: string;
  tutorCpf: string;
  petName: string | undefined;
  petId: string;
  data: string;
}

interface ExamesFormsProps {
  examesArray: Exame[];
  setExamesArray: React.Dispatch<React.SetStateAction<Exame[]>>;
}

export function ExamesForms({ examesArray, setExamesArray }: ExamesFormsProps) {
  const [exame, setExame] = useState<Exame>({
    id: uuidv4(), // Inicializando com um id único
    veterinario: { name: "", crv: "", id: "" },
    tipo: "",
    petId: "",
    detalhe: "",
    petName: "",
    tutorCpf: "",
    data: "", // Inicializa data vazia
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

  useEffect(() => {
    console.log("Salvando examesArray:", examesArray); // Verifique se o array está correto antes de salvar
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
    const selectedPetId = petsArray.find((pet) => pet.id === e.target.value);

    setExame({
      ...exame,
      petName: selectedPetId ? selectedPetId.name : "",
      petId: selectedPetId ? selectedPetId.id : "",
    });
  }

  function handleExameTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    setExame({ ...exame, tipo: e.target.value });
  }

  function handleAddExame() {
    const currentDate = new Date().toISOString().split("T")[0];
    const newExame = { ...exame, id: uuidv4(), data: currentDate };
    console.log("Novo exame sendo adicionado:", newExame); // Verifique se o novo exame está sendo criado corretamente

    setExamesArray((prevExames) => {
      const updatedExames = [...prevExames, newExame];
      console.log("Exames atualizados:", updatedExames); // Verifique o array de exames após a adição
      return updatedExames;
    });

    setExame({
      id: uuidv4(),
      veterinario: { name: "", crv: "", id: "" },
      tipo: "",
      petId: "",
      detalhe: "",
      petName: "",
      tutorCpf: "",
      data: "",
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
        <h1 className="text-2xl text-exames-color-800">Médico Veterinário</h1>
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
        <h1 className="text-2xl text-exames-color-800">Exame</h1>
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
          className="bg-exames-color-700 flex justify-center gap-2 text-white w-fit px-6 py-4 rounded-lg hover:bg-exames-color-900 hover:scale-105 transition-all active:bg-exames-color-600 active:text-black"
        >
          Prescrever Exame
        </button>
      </div>
    </form>
  );
}
