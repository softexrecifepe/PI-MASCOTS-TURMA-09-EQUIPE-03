interface Tutor {
    name:string;
    phone:string;
    cpf:string;
    adress:string;
}

interface Pet{
    id:string;
    name:string;
    age:string;
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
    tutorCpf:string;
    petName:string;
    petId:string;
    data:string;

}

interface ConsultaFormsProps{
    consultaArray: Consulta[];
    setConsultaArray: React.Dispatch<React.SetStateAction<Consulta[]>>;
}

export function ConsultaForms({consultaArray,setConsultaArray}: ConsultaFormsProps){
    
}