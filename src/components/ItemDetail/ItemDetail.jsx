import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
      <h3>Nombre: {nombre}</h3>
      <h4>Precio: {precio}</h4>
      <h4>ID: {id}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit natus corporis illo quo dignissimos obcaecati fugiat itaque, unde quis ab ea suscipit. Beatae optio, ducimus rem delectus facilis sed.</p>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
