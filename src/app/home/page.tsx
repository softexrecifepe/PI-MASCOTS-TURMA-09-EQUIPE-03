import { Images } from "../assets/images";
import { ButtonHome } from "../components/ButtonHome";
import { HeaderPage } from "../components/HeaderPage";

export default function Home() {
  return (
    <>
      <HeaderPage home={true} />

      <header className="flex gap-4 px-10 items-center font-roboto justify-center mt-8">
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
          p="Gerencie recursos"
        />
        <ButtonHome
          href="/pets"
          Image={Images.pata}
          h1="Pets"
          p="Cadastre pets e tutores"
        />
      </header>
    </>
  );
}
