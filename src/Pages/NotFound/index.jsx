import { XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function NotFound() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-[#EDEDED] items-center py-[100px] ">
      <div className="flex flex-row min-w-[600px] bg-white items-start rounded-md px-[30px] py-[30px] justify-between">
        <div className="relative w-[100px] mx-5">
          <MagnifyingGlassIcon className="w-[100px] text-yellow-300 " strokeWidth={"0.3px"} stroke="black"/> 
          <XMarkIcon className=" absolute w-[40px] right-9 top-6"/>
        </div>    
        <div className="flex flex-col">
          <h1 className="font-semibold text-[24px] mb-5 ">No hay publicaciones que coincidan con tu búsqueda</h1>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">Revisa la ortografía</span> de la
              palabra
            </li>
            <li>Utiliza <span className="font-semibold">palabras más genéricas</span> o menos palabras</li>
          </ul>
        </div>  
      </div>
    </div>
  );
}

export default NotFound;
