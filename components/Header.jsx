import { Link, NavLink } from 'react-router-dom'
import imageUrl from '/src/assets/images/avatar-icon.png'
import { useEffect, useState } from 'react'
export default function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  function fakeLogOut() {
    localStorage.removeItem('loggedin')
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

        {localStorage.getItem('loggedin') ? (
          <button onClick={fakeLogOut}>X</button>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}
