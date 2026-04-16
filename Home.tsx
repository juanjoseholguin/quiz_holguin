import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";

export const Home = () => {
  const { email } = useContext(UserContext)!;
  const { toggleTheme } = useContext(ThemeContext)!;

  return (
    <>
      <h1>inicioo, {email} </h1>
      <button type="button" onClick={toggleTheme}>
        ccambiar tema
      </button>
    </>
  );
};