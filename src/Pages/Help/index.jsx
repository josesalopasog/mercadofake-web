import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function Help() {
  return(
    <div className="flex flex-col mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6"> Contactame en Github si necesitas ayuda.</h1>
      <NavLink to='/'>
        <p className=" flex flex-row text-blue-500 justify-center items-center cursor-pointer hover:text-blue-800">
          <span className="p-1"><ArrowLeftCircleIcon className="size-5"/></span>
          <span className="p-1">Volver al inicio.</span>
        </p>
      </NavLink>
    </div>
  )
}

export default Help;
