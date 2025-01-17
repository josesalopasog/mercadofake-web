import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"

function Home() {
  const context =useContext(CartContext)

  return (
    <div className="flex flex-col h-[100%] w-[100%] items-center">
      <div className="flex flex-wrap justify-center my-10 max-w-[70%] ">
        {
          context.items?.map(item => (
            <Card 
              key={item.id} 
              data={item}  
            />
          ))
        }
      </div>
      <ProductDetail/>
    </div>
  )
}

export default Home
