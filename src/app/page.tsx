import { Images } from "./assets/images";
import { AsideContent } from "./components/AsideContent";
import { AsideNavItem } from "./components/AsideNavItem";
import { ButtonHome } from "./components/ButtonHome";
// import { MainPage } from "./components/MainPage";
import { FormsLogin } from "./components/FormsLogin";
import  Header from "./components/header";
import { MainContent } from "./components/MainContent";
import { MainPage } from "./components/MainPage";

export default function Home() {
  return (
    <>
    <Header />

      <header className="flex gap-8 items-center justify-center mt-8">
        <ButtonHome
          Image={Images.Clipboard}
          h1="Exames"
          p="Crie exames e precrições"
        />
        <ButtonHome
          Image={Images.Veterinary}
          h1="Consultas"
          p="Crie consultas e gerencie-as"
        />
        <ButtonHome
          Image={Images.Veterinarian}
          h1="Internato"
          p="Registre internamentos"
        />
        <ButtonHome
          Image={Images.Vaccine}
          h1="Recursos"
          p="Exporte planilhas e gerencie recursos"
        />
      </header>

      <MainPage>
        <AsideContent>
          <AsideNavItem />
        </AsideContent>
        <MainContent>
          <h1>12987391823</h1>
        </MainContent>
      </MainPage>
      <FormsLogin />
    </>
  );
}
