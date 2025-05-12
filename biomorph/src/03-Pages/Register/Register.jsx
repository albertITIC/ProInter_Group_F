import { Link } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
=======

>>>>>>> main
import Header from "../../02-Components/Header/Header";
import "./Register.scss";

const Register = () => {
<<<<<<< HEAD
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
=======
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, apellido, email, password });
    // Aquí se puede llamar al backend para registrar
>>>>>>> main
  };

  return (
    <>
      <Header />
      <br />
      <br />

      <div className="form-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
<<<<<<< HEAD
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
=======
          <h2>Crear cuenta</h2>
          <br />
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <br />
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
>>>>>>> main
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
<<<<<<< HEAD
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
=======
          <button type="submit">Crear cuenta</button>
>>>>>>> main
          <br />
          <Link to="/account" className="link-btn">
            Volver
          </Link>
<<<<<<< HEAD

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
=======
>>>>>>> main
        </form>
      </div>
    </>
  );
};

export default Register;
