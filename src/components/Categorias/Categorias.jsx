import './Categorias.css'
import { useStat, useEffect, useState } from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState ("")

    useEffect ( () => {
        document.title = `nudos - ${categoria}`
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }
  
  return (
    <div>
        <h3>Categorias de Productos</h3>
        <button onClick={ () => handleClick ("Tapices")}> Tapices </button>
        <button onClick={ () => handleClick ("Hamacas")}> Hamacas </button>
        <button onClick={ () => handleClick ("Repisas")}> Repisas </button>
      
    </div>
  )
}

export default Categorias
