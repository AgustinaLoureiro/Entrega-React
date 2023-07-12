import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import {getProductos, getProductosPorSeccion} from '../../azyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {idSeccion} = useParams();

  useEffect ( ()=> {

    const funcionProductos = idSeccion ? getProductosPorSeccion : getProductos;

    funcionProductos (idSeccion)
      .then(res => setProductos(res))
      .catch(error => console.error(error))

  }, [idSeccion])

  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
