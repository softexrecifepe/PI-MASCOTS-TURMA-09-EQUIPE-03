import { InputComponent } from "./InputComponent";

export function FormsLogin() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <div className="flex flex-col">
          <InputComponent id="name" label="Login" type="name" />
        </div>

        <div className="flex flex-col">
          <InputComponent id="pass" label="Senha" type="password" />
          <InputComponent id="text" label="Texto props" type="text" />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 bg-mascots-primary-600 text-white rounded-md hover:bg-mascots-primary-700 focus:outline-none focus:ring-2 focus:ring-mascots-primary-500"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
