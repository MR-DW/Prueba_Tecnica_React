import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [productos, setProductos] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const consumoData = async () => {
    setLoading(true)
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      setProductos(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if(loading) return <p>Cargando...</p>

  return (
    <div className="App">

      {/* Aca dibujar el botón */}
      <div className="contenedorBtn">
        <button onClick={()=> consumoData()} className='btnApp'>Enviar</button>
      </div>

      {/* Utilizar el div para dibujar todo el listado de productos */}
      {
        productos.length ? productos.map(producto => (
          <>
            <h3>{producto.title}</h3>
            <div className="card">
              <img src={producto.image} alt={producto.title}/>
            </div>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
          </>
        )) : <p>No hay productos</p>
      }
      

    </div>
  );
}

export default App;
