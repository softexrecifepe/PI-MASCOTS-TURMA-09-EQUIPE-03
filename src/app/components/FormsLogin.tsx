export function FormsLogin() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500"
              required
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mascots-primary-500"
              required
            />
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
