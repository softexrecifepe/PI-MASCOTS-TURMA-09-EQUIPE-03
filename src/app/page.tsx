import { FaBook, FaHome } from "react-icons/fa";
import { Images } from "./assets/images";
import { Aside2Nav } from "./components/Aside2Nav";
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
        <Aside2Nav
          icon1={<FaHome size={24} />}
          text1="Home"
          icon2={<FaBook size={24} />}
          text2="Ler"
        />
        <MainContent>
          <h1>teste</h1>
        </MainContent>
      </MainPage>
      <FormsLogin />
    </>
  );
}
