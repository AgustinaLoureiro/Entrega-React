import {UseContador} from './cumstomHooks'
import './ItemCount.css'

const ItemCount = () => {
  const {contador, incrementar, decrementar} = UseContador (1,5);

  return (
    <div className='contadorUnidades'>
      <button onClick={decrementar}> - </button>
      <p> Unidades: {contador} </p>
      <button onClick={incrementar}> + </button>
    </div>
  )
}

//<button onClick={agregarAlCarrito}>Agregar al carrito</button>

export default ItemCount
