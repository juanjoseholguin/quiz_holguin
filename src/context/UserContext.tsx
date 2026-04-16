import { createContext, useState } from "react";

// Paso 2: Crear el tipado del contexto (debería ir en la carpeta de types)
interface UserContextType {
    email: string;
    setEmail: (email: string) => void;
}

// Paso 1: Crear el contexto
export const UserContext = createContext<UserContextType | null>(null);

// Paso 3: Crear el provider (mensajero) para agrupar que paginas/componentes van a tener acceso a la información del contexto
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [email, setEmail] = useState('');

    // Esta linea lo que hace es decir que paginas o componentes pueden utilizar este contexto
    return (
        <UserContext.Provider value={{ email, setEmail }}>
            {children}
        </UserContext.Provider>
    )
}