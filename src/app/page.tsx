import { Images } from "./assets/images";
import { ButtonHome } from "./components/ButtonHome";
import { MainPage } from "./components/MainPage";
import {FormsLogin} from "./components/FormsLogin";

export default function Home() {
  return (
    <>
      <header className="flex gap-8 items-center justify-center mt-8">
        <ButtonHome
          Image={Images.Veterinarian}
          h1="Internato"
          p="Registre internamentos"
        />
        <ButtonHome
          Image={Images.Veterinary}
          h1="Consultas"
          p="Crie consultas e gerencie-as"
        />
        <ButtonHome
          Image={Images.Vaccine}
          h1="Recursos"
          p="Exporte planilhas e gerencie recursos"
        />
        <ButtonHome
          Image={Images.Clipboard}
          h1="Exames"
          p="Crie exames e precrições"
        />
      </header>

      <MainPage />
      <FormsLogin/>
    </>
  );
}
