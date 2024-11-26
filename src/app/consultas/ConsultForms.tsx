import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, type ChangeEvent } from "react";
import { SelectVeterinario } from "../exames/SelectVeterinario";
import { InputComponent } from "../components/InputComponent";
import { SelectPetConsulta } from "./SelectPetConsulta";
import { TextAreaConsulta } from "./TextAreaConsulta";
import {CreatConsulta} from "./CreatConsulta"
import { PiStethoscope } from "react-icons/pi";


interface Tutor {
    name:string;
    phone:string;
    cpf:string;
    adress?:string;
}

interface Pet{
    id:string;
    name:string;
    age:string;
    gender: string;
    species:string;
    breed:string;
    condition:string;
    tutor:Tutor;
}

interface Veterinario{
    id:string;
    name:string;
    crv:string;
}

interface Consulta{
    id:string
    veterinario:Veterinario;
    tipoConsulta:string;
    detalhe: string;
    tutorCpf:string;
    petName:string |undefined;
    petId:string;
    data:string;

}

interface ConsultaFormsProps{
    consultaArray: Consulta[];
    setConsultaArray: React.Dispatch<React.SetStateAction<Consulta[]>>;
}

export function ConsultaForms({consultaArray,setConsultaArray}: ConsultaFormsProps){
    const [consulta, setConsulta] = useState <Consulta>({
        id:uuidv4(),
        veterinario: { name: "", crv: "", id: "" },
        tipoConsulta: "",
        detalhe:"",
        tutorCpf:"",
        petName:"",
        petId:"",
        data:"",
    });

    useEffect(() => {
        const savedPets = localStorage.getItem("petsArray");
        if (savedPets){
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
    }, [])

    useEffect(() => {
      console.log("Salvando consultaArray:", consultaArray);
        localStorage.setItem(" consultaArray", JSON.stringify(consultaArray));
      }, [consultaArray]);
    
      const [arrayVeterinarios, setArrayVeterinarios] = useState<Veterinario[]>([]);
      const [petsArray, setPetsArray] = useState<Pet[]>([]);
      const [filtrarPet, setfiltrarPet] = useState<Pet[]>([]);
      
      function handleSelectedVeterinario(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedVet = arrayVeterinarios.find(
          (vet) => vet.id === e.target.value
        );
        if (selectedVet) {
          setConsulta((prev) => ({
            ...prev,
            veterinario: { ...selectedVet },
          }));
        }
      }

      function handleConsultaDetail(e: ChangeEvent<HTMLSelectElement>) {
        setConsulta({ ...consulta, detalhe: e.target.value });
      }
    
      function handleSelectPetConsulta(e: ChangeEvent<HTMLSelectElement>) {
        const selectedPetId = petsArray.find((pet) => pet.id === e.target.value);
    
        setConsulta({
          ...consulta,
          petName: selectedPetId ? selectedPetId.name : "",
          petId: selectedPetId ? selectedPetId.id : "",
        });
      }

      function handleConsultaTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setConsulta({ ...consulta, tipoConsulta: e.target.value });
    }
    
    
      function handleAddConsulta() {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear()}`;
        const newConsulta = { ...consulta, id: uuidv4(), data: formattedDate };
        console.log("Novo exame sendo adicionado:", newConsulta);
    
        setConsultaArray((prevConsulta) => {
          const updatedConsulta = [...prevConsulta, newConsulta];
          console.log("Consultas atualizadas:", updatedConsulta);
          return updatedConsulta;
        });
    
        setConsulta((prevConsulta) => ({
          id: uuidv4(),
          veterinario: {
            name: prevConsulta.veterinario.name,
            crv: prevConsulta.veterinario.crv,
            id: prevConsulta.veterinario.id,
          },
        tipoConsulta: "",
        detalhe:"",
        tutorCpf:"",
        petName:"",
        petId:"",
        data:"",
        }));
      }

      function handleTutorCpfSearch(e: ChangeEvent<HTMLInputElement>) {
        const cpf = e.target.value;
    
        // Filtra os pets com o CPF correspondente
        const petsComCpf = petsArray.filter((pet) => pet.tutor.cpf === cpf);
    
        // Atualiza petFiltrado com os pets correspondentes ao CPF
        setfiltrarPet(petsComCpf);
        setConsulta((prev) => ({ ...prev, tutorCpf: cpf }));
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
            <h1 className="text-2xl  bg-mascots-primary-600">Médico Veterinário</h1>
            <div className="flex gap-6">
              <SelectVeterinario
                label="Selecione o Médico Veterinário"
                arrayVeterinarios={arrayVeterinarios}
                onChange={handleSelectedVeterinario}
              />
              <InputComponent
                label="Médico Veterinário"
                id="medVet"
                value={consulta.veterinario.name}
                type="text"
                readOnly
              />
              <InputComponent
                label="CRV"
                id="crvVet"
                value={consulta.veterinario.crv}
                type="text"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-2xl  bg-mascots-primary-600">Consulta</h1>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <CreatConsulta //mudarrr
                  consulta={consulta}
                  label="Tipo da Consulta"
                  onchange={handleConsultaTypeChange}
                />
                <InputComponent
                  label="Cpf do tutor"
                  id="cpfTutor"
                  type="text"
                  maxLenght={11}
                  placeholder="Apenas números"
                  value={consulta.tutorCpf}
                  onchange={handleTutorCpfSearch}
                />
    
                <SelectPetConsulta
                  consulta={consulta}
                  filtrarPet={filtrarPet}
                  handleSelectPetConsulta={handleSelectPetConsulta}
                  label="Selecione o Pet"
                />
              </div>
    
              <div className="flex h-80 gap-6">
                <TextAreaConsulta consulta={consulta} handleConsultaDetail={handleConsultaDetail} />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              onClick={handleAddConsulta}
              className=" bg-mascots-primary-600 flex justify-center gap-2 text-white w-fit px-6 py-4 rounded-lg hover: bg-mascots-primary-800 hover:scale-105 transition-all active: bg-mascots-primary-600 active:text-black"
            >
              <PiStethoscope size={24} />
              Prescrever Consulta
            </button>
          </div>
        </form>
      );
    }
    

