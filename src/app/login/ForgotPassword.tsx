"use client";

import { GoArrowLeft } from "react-icons/go";
import { InputComponent } from "../components/InputComponent";
import { LoginPageButton } from "../components/LoginPageButton";
import { LogoLogin } from "../components/LogoLogin";
import type { MouseEventHandler } from "react";

interface forgotPasswordProps {
  propsFogot: MouseEventHandler;
}

export function ForgotPassword({ propsFogot }: forgotPasswordProps) {
  return (
    <div
      className={`transition-all absolute w-1/2 left-auto inset-0 flex flex-col items-center bg-mascots-secundary-50 `}
    >
      <div className="mt-10 flex items-center gap-4">
        <button onClick={propsFogot}>
          <GoArrowLeft className="size-10 fill-mascots-primary-800" />
        </button>
        <LogoLogin />
      </div>
      <div className="w-full mt-10 flex flex-col items-center gap-4">
        <header className="text-mascots-primary-600 font-semibold text-xl">
          Esqueceu a Senha
        </header>
        <form className="flex flex-col w-2/3 gap-4 justify-center">
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
