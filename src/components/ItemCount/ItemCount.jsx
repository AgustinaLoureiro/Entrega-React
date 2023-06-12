import { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    let stock = 10
    const incrementar = () => {
      if (contador < stock){
          setContador(contador + 1);
      }
    }
    const decrementar = () => {
      if (contador > 1){
          setContador(contador - 1);
      }
    }
  return (
    <div className='contadorUnidades'>
        <button onClick={decrementar}> - </button>
        <p> Unidades: {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount
