import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>nudos</h1>
        <h2>home&deco</h2>
      </Link>

      <nav>
        <ul>
            <li>
              <NavLink to={"/tapices"}> Tapices </NavLink>
            </li>
            <li>
              <NavLink to={"/hamacas"}> Hamacas </NavLink>
            </li>
            <li>
              <NavLink to={"/repisas"}> Repisas </NavLink>
            </li>
            <li>
              <NavLink to={"/portamacetas"}> Portamacetas </NavLink>
            </li>
            <li>
              <NavLink to={"/llaveros"}> Llaveros </NavLink>
            </li>
            <li>
              <NavLink to={"/decoracion"}> Decoración </NavLink>
            </li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar
