"use client";

import { InputComponent } from "../components/InputComponent";
import logo from "../assets/images/Logo.png";
import { LoginPageButton } from "../components/LoginPageButton";
import imgLogin1 from "../assets/images/imagLogin1.png";
import { useState } from "react";
import { LogoLogin } from "../components/LogoLogin";

export default function login() {
  const [forgotPasswordButtonState, setforgotPasswordButtonState] =
    useState(false);

  const [siginButtonState, setSigindButtonState] = useState(false);

  function handleSigin() {
    setSigindButtonState(true);
  }

  function handleForgotPassword() {
    setforgotPasswordButtonState(true);
  }

  return (
    <>
      <main className="flex items-center justify-center h-screen w-full bg-[url('./assets/images/bgLogin.png')] object-cover bg-center bg-no-repeat ">
        <section className="relative bg-mascots-secundary-50 w-2/3 h-3/4 rounded-xl overflow-hidden grid grid-cols-2 shadow-2xl">
          <div
            className={`inset-0 flex items-center justify-center bg-green-200 ${
              siginButtonState ? "z-30" : "z-0"
            }`}
          >
            Cadastro
          </div>

          <div
            className={`absolute w-1/2 gap-6 justify-center py-2 left-auto inset-0 flex flex-col items-center bg-mascots-secundary-50  ${
              forgotPasswordButtonState ? "z-30" : "z-0"
            }`}
          >
            <LogoLogin />
            <header className="text-mascots-primary-600 font-semibold">
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
              <InputComponent
                id="confirmEmail"
                placeholder="Email"
                type="email"
              />
              <LoginPageButton text="Nova Senha" />
            </form>
          </div>

          <div className="absolute w-1/2 inset-0 flex items-center justify-center bg-mascots-secundary-50 z-10 ">
            <img className="h-full" src={imgLogin1.src} />
          </div>

          <div className="absolute w-1/2 py-2 justify-around left-auto inset-0 flex flex-col items-center bg-mascots-secundary-50 z-10">
            <LogoLogin />
            <form
              method="post"
              className="flex flex-col gap-4 justify-center w-2/3 h-1/2"
            >
              <div className="flex flex-col h-full gap-4 justify-center">
                <InputComponent id="login" placeholder="Login" type="text" />
                <InputComponent id="pass" placeholder="Senha" type="password" />
              </div>

              <LoginPageButton text="Entrar" />
            </form>

            <div className="flex flex-col text-center gap-3">
              <button onClick={handleForgotPassword}>Esqueceu a senha?</button>
              <button onClick={handleSigin}>
                Cadastre-se <span className="text-cyan-600">aqui</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
