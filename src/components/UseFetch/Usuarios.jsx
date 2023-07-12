import { useFetch } from "./cumstomHooksDos"

const Usuarios = () => {
  const data = useFetch ("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data && data.map((usuario) => <p key={usuario.id}> {usuario.name} </p>)}
    </>
  )
}

export default Usuarios
