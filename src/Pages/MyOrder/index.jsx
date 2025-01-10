import { useContext } from "react"
import MyOrderCard from "../../Components/MyOrderCard"
import CartContext from '../../Context/CartContext'


function MyOrder() {
  const context = useContext(CartContext)  
  
  return (
      <div>
        {context.order?.length > 0 && context.order.slice(-1)[0]?.products?.length > 0 ? (
          context.order.slice(-1)[0].products.map(product => (
            <MyOrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.images}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}  
      </div>
    )
  }
  
  export default MyOrder