"use client";

import { GoArrowLeft } from "react-icons/go";
import { InputComponent } from "../components/InputComponent";
import { LoginPageButton } from "../components/LoginPageButton";
import { LogoLogin } from "../components/LogoLogin";
import type { MouseEventHandler } from "react";
import { LogoForms } from "./LogoForms";

interface siginProps {
  propsSigin: MouseEventHandler;
}

export function Sigin({ propsSigin }: siginProps) {
  return (
    <div
      className={`transition-all inset-0 flex flex-col items-center gap-4 py-5 bg-mascots-secundary-50`}
    >
      <div className="flex items-center justify-center gap-4">
        <button onClick={propsSigin}>
          <GoArrowLeft className="transition-all hover:fill-mascots-primary-400 size-10 fill-mascots-primary-800" />
        </button>
        <LogoForms />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="w-full flex flex-col gap-4 items-center">
          <header className="text-mascots-primary-700 font-semibold text-xl">
            Cadastro
          </header>
          <form className="flex flex-col w-2/3 gap-2 justify-center">
            <InputComponent id="login" placeholder="Login" type="text" />

            <InputComponent id="password" placeholder="Senha" type="password" />

            <InputComponent
              id="confirmPassword"
              placeholder="Confirmar Senha"
              type="password"
            />
            <InputComponent id="email" placeholder="Email" type="email" />
            <LoginPageButton text="Cadastrar" />
          </form>
        </div>
      </div>
    </div>
  );
}
