import { Link } from 'react-router'

export const Menu = () =>
  <nav className="menu">
    <Link to="/" activeClassName="selected"> Home </Link>
    <Link to="/list-concerts" activeClassName="selected"> List </Link>
    <Link to="/add-concert" activeClassName="selected"> Add </Link>
  </nav>
