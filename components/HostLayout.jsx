import { NavLink, Outlet } from 'react-router-dom'
export default function HostLayout() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to=".">
          Dashboard
        </NavLink>
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="income">
          Income
        </NavLink>
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="vans">
          Vans
        </NavLink>
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
