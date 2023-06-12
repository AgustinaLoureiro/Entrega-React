import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <>
        <h1>nudos</h1>
        <h2>home&deco</h2>
      </>

      <nav>
        <ul>
            <li>Tapices</li>
            <li>Hamacas</li>
            <li>Repisas</li>
            <li>Portamacetas</li>
            <li>Llaveros</li>
            <li>Decoración</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar
