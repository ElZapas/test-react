import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <nav>
    <Link to="/login">Acceder</Link>
    <Link to="/">Pagina principal</Link>
    </nav>
    <Outlet />
    </>
  )
}
