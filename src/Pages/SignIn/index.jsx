function SignIn() {
    return (
      <div className="w-full h-[100vh] bg-white">
        <div className="flex flex-wrap my-10 justify-center">
          <h1 className="text-[30px] font-semibold max-w-[460px] px-2">Ingresa tu e-mail o teléfono para iniciar sesión</h1>
          <form className="max-w-[460px] border border-black/10 rounded-lg text-center py-7">
            <h1 className="ml-10 text-left ">E-Mail o teléfono</h1>
            <input className="w-[400px] h-[48px] rounded-lg border border-black/30 mt-2 mb-5 p-5 focus:outline-blue-500"/>
            <button className="w-[400px] h-[48px] font-semibold rounded-lg bg-blue-500 text-white my-1 hover:bg-blue-800 transition duration-500">Continuar</button>
            <button className="w-[400px] h-[48px] font-semibold rounded-lg text-blue-500 bg-white mt-1 hover:bg-blue-100 transition duration-500">Crear cuenta</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default SignIn