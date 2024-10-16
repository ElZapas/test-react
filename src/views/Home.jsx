import { Link } from 'react-router-dom';
import useApp from '../context/useApp';

export default function Home() {
  const {user, setUser} = useApp();

  return (
    <>
    {user}
    <h1>Home</h1>
    <Link to="/login">Acceder</Link>
    <button onClick={() => setUser('hola')}>Presiona aqui :D</button>
    </>
  )
}
