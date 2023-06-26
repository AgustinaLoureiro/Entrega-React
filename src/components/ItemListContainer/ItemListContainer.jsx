import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import {getProductos} from '../../azyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect ( ()=> {
    getProductos()
    .then(res => setProductos(res))
    .catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
