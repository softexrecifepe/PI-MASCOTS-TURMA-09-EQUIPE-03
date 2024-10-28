"use client";

import imgLogin1 from "../assets/images/imagLogin1.png";
import { useState } from "react";
import { Sigin } from "./Sigin";
import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";

export default function login() {
  const [forgotPasswordButtonState, setforgotPasswordButtonState] =
    useState(false);

  const [siginButtonState, setSigindButtonState] = useState(false);

  function handleBackLogin() {
    setforgotPasswordButtonState(false);
  }

  function handleSigin() {
    setSigindButtonState(true);
  }

  function handleBackSigin() {
    setSigindButtonState(false);
  }

  function handleForgotPassword() {
    setforgotPasswordButtonState(true);
  }

  return (
    <>
      <main className="flex items-center justify-center h-screen w-full bg-[url('./assets/images/bgLogin.png')] bg-cover bg-center bg-no-repeat ">
        <section className="relative bg-mascots-secundary-50 w-2/3 h-3/4 rounded-xl overflow-hidden grid grid-cols-2 shadow-2xl">
          <Sigin propsSigin={handleBackSigin} />

          <ForgotPassword
            forgotPasswordButtonState={forgotPasswordButtonState}
            handleBackLogin={handleBackLogin}
          />
          {/* <ForgotPassword propsFogot={handleBackLogin} /> */}

          <div
            className={`transition-all absolute w-1/2 inset-0 flex items-center justify-center bg-mascots-secundary-50 ${
              !siginButtonState ? "z-10" : "z-30 left-1/2"
            }`}
          >
            <img className="h-full w-full" src={imgLogin1.src} />
          </div>

          <Login
            handleForgotPassword={handleForgotPassword}
            handleSigin={handleSigin}
            forgotPasswordButtonState={forgotPasswordButtonState}
          />
        </section>
      </main>
    </>
  );
}
