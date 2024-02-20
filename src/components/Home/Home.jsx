import React, { useContext } from 'react';
import './Home.css';
import { UserContext } from '../UserContext/UserContext';  // Importa el contexto de usuario
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para la navegación

export const Home = () => {
  const { username, setUsername } = useContext(UserContext); // Obtén el nombre de usuario del contexto
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleLogout = () => {
    // Limpiar el nombre de usuario almacenado en el contexto
    setUsername("");
    // Redirigir al usuario a la página de inicio de sesión
    navigate("/");
  };

  return (
    <div className="wrapper">
      <p>Josué Miguel Ortiz Meza - GDS0551</p>
      <form action="">
        <h1>Bienvenido, {username}</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </form>
    </div>
  );
};
