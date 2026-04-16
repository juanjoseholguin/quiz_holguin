import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const Home = () => {
    const { email } = useContext(UserContext) 
    return (
        <h1>Bienvenido a la página de inicio, {email} </h1>
    )
}