import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { Home } from "./components/Home/Home";
import { UserProvider } from "./components/UserContext/UserContext"; // Importa el proveedor de contexto de usuario

function App() {
  return (
    <Router>
      <UserProvider> {/* Envuelve tu aplicación con el proveedor de contexto */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
