import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../../02-Components/Header/Header";
import "./Account.scss";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Inicio de sesión exitoso.");
        console.log("Login exitoso:", data);
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        // Aquí podrías redirigir, por ejemplo con useNavigate de react-router
      } else {
        setError(data.detail || "Error en el login.");
        console.error("Error en login:", data);
      }
    } catch (err) {
      console.error("Error de red:", err);
      setError("Error de conexión con el servidor.");
    }
  };

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <br />
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Iniciar sesión</button>

          <Link to="/register" className="link-btn">
            ¿No tienes cuenta? Crear una
          </Link>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </>
  );
};

export default Account;
