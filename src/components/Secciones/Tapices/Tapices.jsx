import { useParams } from "react-router-dom"

const Tapices = () => {
  const {id} = useParams ();
  return (
    <div>
      <h2> Tapices </h2>
      <p>ID del producto: {id}</p>
    </div>
  )
}

export default Tapices
