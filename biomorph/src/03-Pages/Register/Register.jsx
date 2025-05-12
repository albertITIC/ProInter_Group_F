import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../02-Components/Header/Header";
import "./Register.scss";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Not used in login
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://127.0.0.1:8000/auth/login/"
      : "http://127.0.0.1:8000/auth/register/";

    const payload = isLogin
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          setSuccess("Inicio de sesión exitoso.");
          // Guarda token o usuario si es necesario
          console.log("Login success:", data);
        } else {
          setSuccess("Cuenta creada correctamente.");
          console.log("Registro exitoso:", data);
        }

        setError(null);
        // Limpiar formulario si deseas
      } else {
        setError(data.detail || "Error en el formulario.");
        setSuccess(null);
        console.error("Error:", data);
      }
    } catch (err) {
      console.error("Error de red:", err);
      setError("Error de conexión con el servidor.");
      setSuccess(null);
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />

      <div className="form-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Iniciar sesión" : "Crear cuenta"}</h2>
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
          {!isLogin && (
            <>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
            </>
          )}
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">
            {isLogin ? "Iniciar sesión" : "Crear cuenta"}
          </button>
          <br />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
              setSuccess(null);
            }}
          >
            {isLogin
              ? "¿No tienes cuenta? Crea una"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
          <br />
          <Link to="/account" className="link-btn">
            Volver
          </Link>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
