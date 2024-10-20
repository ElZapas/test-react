import { useState } from "react"
import useApp from "../context/useApp"

export default function AppValor() {
    const {setUser} = useApp()
    const [input, setInput] = useState('')
    const  handleSubmit = (e) => {
        e.preventDefault()
        setUser(input)
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Ingrese lo que sea</h1>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    <button type="submit">Presiona aqui :D</button>
    </form>
    </>
  )
  
}
