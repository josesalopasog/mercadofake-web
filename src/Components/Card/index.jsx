const Card = () => {
    return(
        <div className="bg-white cursor-pointer w-50 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-slate-600/30 text-white text-sm m-2 px-3 py-0.3">Gaming</span>
                <img className="w-full h-full object-cover" src="public\img\play5pro.webp" alt="playstation"/>
            </figure>
            <p className="text-sm font-light">Playstation 5 Pro</p>
            <p className="text-[20px] font-medium">$4,199,708 COP</p>
            <button className="bg-green-400 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 ">Agregar 🛒</button>
            <p className="mt-2 mb-2 text-green-600 text-[14px] font-bold">Envío gratis</p>
        </div>
    )
}

export default Card