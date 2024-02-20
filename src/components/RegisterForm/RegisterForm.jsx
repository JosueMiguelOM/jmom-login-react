import React, { useState } from "react";
import "./RegisterForm.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs'; // Importa la librería bcrypt

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Hashea la contraseña antes de enviarla al servidor
      const hashedPassword = await bcrypt.hash(data.password, 10);

      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, password: hashedPassword }), // Envia la contraseña hasheada
      });
      if (response.ok) {
        navigate("/");
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapper">
      <p>Josué Miguel Ortiz Meza - GDS0551</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registrarse</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Nombre de usuario"
            {...register("username", { required: "Nombre de usuario es requerido" })}
          />
          <FaUser className="icon" />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: "Correo electrónico es requerido", pattern: { value: /^\S+@\S+$/i, message: "Correo electrónico inválido" } })}
          />
          <FaEnvelope className="icon" />
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
        <div className="input-box">
          <input
            type="password"
            placeholder="Repetir contraseña"
            {...register("confirmPassword", { required: "Confirmar contraseña es requerido" })}
          />
          <FaLock className="icon" />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error si existe */}
        <button type="submit">Registrarse</button>
        <div className="register-link">
          <p>
            ¿Ya tienes cuenta? <Link to="/">Inicia Sesión</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
