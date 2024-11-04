"use client";

import type { MouseEventHandler } from "react";
import { InputComponent } from "../components/InputComponent";
import { LoginPageButton } from "../components/LoginPageButton";
import { LogoLogin } from "../components/LogoLogin";

interface loginProps {
  handleForgotPassword: MouseEventHandler;
  handleSigin: MouseEventHandler;
  forgotPasswordButtonState: boolean;
}

export function Login({
  handleForgotPassword,
  handleSigin,
  forgotPasswordButtonState,
}: loginProps) {
  return (
    <div
      className={`transition-opacity font-roboto absolute w-1/2 py-10 gap-4 left-auto inset-0 flex flex-col items-center bg-mascots-secundary-50 ${
        !forgotPasswordButtonState ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <LogoLogin />
        <header className="text-mascots-primary-700 font-montserrat font-semibold text-xl">
          Login
        </header>
      </div>
      <form
        method="post"
        className="flex flex-col justify-center mt-3 gap-4 w-72 "
      >
        <InputComponent id="login" placeholder="Login" type="text" />
        <InputComponent id="pass" placeholder="Senha" type="password" />

        <LoginPageButton text="Entrar" />
      </form>

      <div className="flex flex-col text-center gap-3 mt-5">
        <button
          className="transition-all hover:text-red-400"
          onClick={handleForgotPassword}
        >
          Esqueceu a senha?
        </button>
        <button
          className="transition-all hover:text-mascots-primary-400"
          onClick={handleSigin}
        >
          Cadastre-se aqui
        </button>
      </div>
    </div>
  );
}
