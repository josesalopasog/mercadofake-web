import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"


function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // fetch("https://api.escuelajs.co/api/v1/products")
    fetch("src/Products/products.json")
      .then((response) => {
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
      })
      .then((data) => {
        setItems(data);
        console.log('Datos recibidos: ', data);
      })
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
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
