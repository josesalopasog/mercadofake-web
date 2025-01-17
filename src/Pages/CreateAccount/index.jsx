import { EnvelopeIcon, DevicePhoneMobileIcon, UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";


function CreateAccount() {

    const isEmailValid = false;
    const isNameValid = false;
    const isPhoneValid = false;
    // const isPasswordValid = false;
  
    return(
        <div className="mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                  <h1 className="text-2xl font-semibold text-center mb-6">Completa los datos para crear tu cuenta</h1>
            <div className="mb-6">
                <div className="flex items-center gap-3 rounded-md shadow-lg px-5 py-3">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/20">
                        <EnvelopeIcon  
                            className="size-7 text-blue-500 "
                        />
                    </div>    
                    <div className=" w-[350px] ">
                        <p className="font-medium">Agrega tu e-mail</p>
                        <p className="text-sm text-gray-500">Recibirás información de tu cuenta.</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md ml-10 hover:bg-blue-800 transition duration-500">Agregar</button>
                </div>      
            </div>
            <div className={`mb-6 ${isEmailValid ? "" : "opacity-50 pointer-events-none"}`}>
                <div className="flex items-center gap-3 rounded-md px-5 py-3 ">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/20">
                        <UserCircleIcon
                            className="size-7 text-blue-500 "
                        />
                    </div>    
                    <div className=" w-[350px] ">
                        <p className="font-medium">Elige un nombre</p>
                        <p className="text-sm text-gray-500">Se mostrará a las personas que interactúen contigo.</p>
                    </div>
                    
                    {isEmailValid && (
                        <button 
                            className="bg-blue-500 text-white px-4 py-1 rounded-md ml-10 hover:bg-blue-800 transition duration-500">
                                Agregar
                        </button>
                    )}
                </div>      
            </div>
            <div className={`mb-6 ${isNameValid ? "" : "opacity-50 pointer-events-none"}`}>
                <div className="flex items-center gap-3 rounded-md px-5 py-3">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/20">
                        <DevicePhoneMobileIcon
                            className="size-7 text-blue-500 "
                        />
                    </div>    
                    <div className=" w-[350px] ">
                        <p className="font-medium">Valida tu teléfono</p>
                        <p className="text-sm text-gray-500">Podrás usarlo para iniciar sesión en tu cuenta</p>
                    </div>
                    {isNameValid && (
                        <button 
                            className="bg-blue-500 text-white px-4 py-1 rounded-md ml-10 hover:bg-blue-800 transition duration-500">
                                Agregar
                        </button>
                    )}
                </div>      
            </div>
            <div className={`mb-6 ${isPhoneValid ? "" : "opacity-50 pointer-events-none"}`}>
                <div className="flex items-center gap-3 rounded-md px-5 py-3">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-black/20">
                        <LockClosedIcon
                            className="size-7 text-blue-500 "
                        />
                    </div>    
                    <div className="w-[350px]">
                        <p className="font-medium">Crea tu contraseña</p>
                        <p className="text-sm text-gray-500">Mantendras tu cuenta protegida</p>
                    </div>
                    {isPhoneValid && (
                        <button 
                            className="bg-blue-500 text-white px-4 py-1 rounded-md ml-10 hover:bg-blue-800 transition duration-500">
                                Agregar
                        </button>
                    )}
                </div>      
            </div>

        </div>

    )
}

export default CreateAccount;