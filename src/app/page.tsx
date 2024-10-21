import { Images } from "./assets/images";
import { Button } from "./components/button";
import { MainPage } from "./components/MainPage";


export default function Home() {
  return (
    <>
    <header className="flex gap-8 items-center justify-center mt-8">
      <Button Image  ={Images.Veterinarian} h1="Internato" p="Registre internamentos"/>
      <Button Image={Images.Veterinary} h1="Consultas" p="Crie consultas e gerencie-as"/>
      <Button Image={Images.Vaccine} h1="Recursos" p="Exporte planilhas e gerencie recursos"/>
      <Button Image={Images.Clipboard} h1="Exames" p="Crie exames e precrições"/>
    </header>
    
      <MainPage />
    </>
  );
}
