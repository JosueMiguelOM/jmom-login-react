import React, { useState, useContext } from "react";
import "./LoginForm.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext/UserContext';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs'; // Importa la librería bcrypt

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const users = await response.json();
        const user = users.find(u => u.email === data.email);
        if (user) {
          // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
          const isPasswordMatch = await bcrypt.compare(data.password, user.password);
          if (isPasswordMatch) {
            setUsername(user.username);
            navigate("/home");
          } else {
            setError("Usuario o contraseña incorrectos");
          }
        } else {
          setError("Usuario o contraseña incorrectos");
        }
      } else {
        console.error("Error al obtener datos de usuario");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapper">
      <p>Josué Miguel Ortiz Meza - GDS0551</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Iniciar Sesión</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: "Correo electrónico es requerido", pattern: { value: /^\S+@\S+$/i, message: "Correo electrónico inválido" } })}
          />
          <FaEnvelope className="icon"/>
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: "Contraseña es requerida" })}
          />
          <FaLock className="icon" />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
        <div className="register-link">
          <p>
            ¿No tienes cuenta? <Link to="/register">Registrate</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
