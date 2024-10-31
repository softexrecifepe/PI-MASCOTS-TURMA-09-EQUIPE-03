import { FaHome } from "react-icons/fa";
import { Images } from "./assets/images";
import { AsideContent } from "./components/AsideContent";
import { AsideNavItem } from "./components/AsideNavItem";
import { ButtonHome } from "./components/ButtonHome";
// import { MainPage } from "./components/MainPage";
import { FormsLogin } from "./components/FormsLogin";
import { HeaderPage } from "./components/HeaderPage";
import { MainContent } from "./components/MainContent";
import { MainPage } from "./components/MainPage";

export default function Home() {
  return (
    <>
      <HeaderPage />

      <header className="flex gap-8 items-center justify-center mt-8">
        <ButtonHome
          href="/exames"
          Image={Images.Clipboard}
          h1="Exames"
          p="Crie exames e precrições"
        />
        <ButtonHome
          href="/consultas"
          Image={Images.Veterinary}
          h1="Consultas"
          p="Crie consultas e gerencie-as"
        />
        <ButtonHome
          href="/internato"
          Image={Images.Veterinarian}
          h1="Internato"
          p="Registre internamentos"
        />
        <ButtonHome
          href="/recursos"
          Image={Images.Vaccine}
          h1="Recursos"
          p="Exporte planilhas e gerencie recursos"
        />
      </header>

      <MainPage>
        <AsideContent>
          <AsideNavItem text="Teste" icon={<FaHome />} />
          <AsideNavItem text="Teste" icon={<FaHome />} />
        </AsideContent>
        <MainContent>
          <h1>12987391823</h1>
        </MainContent>
      </MainPage>
    </>
  );
}
