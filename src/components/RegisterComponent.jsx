export default function RegisterComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault(); 
      }
  return (
    <>
    <div>RegisterComponent</div>
    <form onSubmit={handleOnSubmit}>
    <label>Nombre Completo:</label>
    <input type="text" id="nombre"  required></input><br></br>
    <label>Correo Electrónico:</label>
    <input type="email" id="email" required></input><br></br>
    <label>Contraseña:</label>
    <input type="password" id="password" required></input><br></br>
    <label>Confirmar Contraseña:</label><br></br>
    <input type="password" id="confirm_password" required></input><br></br>
    </form>
    </>
  )
}
