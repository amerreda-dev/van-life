import { Link, NavLink } from 'react-router-dom'
import imageUrl from '/src/assets/images/avatar-icon.png'
export default function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host">
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans">
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about">
          About
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  )
}
