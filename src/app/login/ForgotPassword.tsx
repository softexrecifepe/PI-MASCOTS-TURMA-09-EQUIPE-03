"use client";

import { GoArrowLeft } from "react-icons/go";
import { InputComponent } from "../components/InputComponent";
import { LoginPageButton } from "../components/LoginPageButton";
import { LogoLogin } from "../components/LogoLogin";
import type { MouseEventHandler } from "react";
import { LogoForms } from "./LogoForms";

interface forgotPasswordProps {
  forgotPasswordButtonState: boolean;
  handleBackLogin: MouseEventHandler;
}

export function ForgotPassword({
  forgotPasswordButtonState,
  handleBackLogin,
}: forgotPasswordProps) {
  return (
    <div
      className={`transition-opacity absolute w-1/2 left-auto inset-0 flex flex-col pt-4 items-center bg-mascots-secundary-50 ${
        forgotPasswordButtonState ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="w-full flex items-center mt-5 px-8 gap-10">
        <button onClick={handleBackLogin}>
          <GoArrowLeft className="transition-all hover:fill-mascots-primary-400 size-10 fill-mascots-primary-800" />
        </button>
        <LogoForms />
      </div>
      <div className="w-full mt-10 flex flex-col items-center gap-4">
        <header className="text-mascots-primary-700 font-semibold text-xl">
          Esqueceu a Senha
        </header>
        <form className="flex flex-col w-2/3 mt-4 gap-4 justify-center">
          <InputComponent
            id="newPassword"
            placeholder="Nova Senha"
            type="password"
          />

          <InputComponent
            id="confirmNewPassword"
            placeholder="Confirmar Nova Senha"
            type="password"
          />
          <InputComponent id="confirmEmail" placeholder="Email" type="email" />
          <LoginPageButton text="Nova Senha" />
        </form>
      </div>
    </div>
  );
}
