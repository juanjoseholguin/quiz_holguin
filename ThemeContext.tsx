import { createContext, useState } from "react";

export type Theme = "light" 
// Paso 2: Crear el tipado del contexto (debería ir en la carpeta de types)
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export type Theme = "dark" 
// Paso 2: Crear el tipado del contexto (debería ir en la carpeta de types)
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
//// Paso 1: Crear el contexto
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Paso 3: Crear el provider (mensajero) para agrupar que paginas/componentes van a tener acceso a la información del contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(theme);


// Esta linea lo que hace es decir que paginas o componentes pueden utilizar este contexto
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

