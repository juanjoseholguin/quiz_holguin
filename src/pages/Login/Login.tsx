import { useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setEmail: setUserEmail} = useContext(UserContext);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUserEmail(email);
    }
    return (
        <form>
            <input onChange={(e) => setEmail (e.target.value)} placeholder='Escribe tu email'></input>
            <input onChange={(e) => setPassword (e.target.value)} placeholder='Escribe tu contraseña' type='password'></input>
            <button onClick={handleSubmit}>Iniciar sesión</button>
        </form>
    )
}