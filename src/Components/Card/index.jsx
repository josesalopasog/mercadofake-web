const Card = (data) => {
    return(
        <div className="bg-white cursor-pointer w-56 h-90 rounded-lg m-10">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-slate-600/30 text-white text-sm m-2 px-3 py-0.3">{data.data.category.name}</span>
                <img className="w-full h-full object-cover" src={data.data.images[0]} alt={data.data.title} />
            </figure>
            <p className="text-sm font-light">{data.data.title}</p>
            <p className="text-[20px] font-medium">${data.data.price}.000 COP</p>
            <button className="bg-green-400 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 ">Agregar 🛒</button>
            <p className="mt-2 mb-2 text-green-600 text-[14px] font-bold">Envío gratis</p>
        </div>
    )
}

export default Card