import { useState, useEffect } from "react"
import Card from "../../Components/Card"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        setItems(data);
        // console.log(data);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, [])

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
    </div>
  )
}

export default Home
