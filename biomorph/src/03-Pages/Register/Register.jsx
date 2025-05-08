import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../../02-Components/Header/Header";
import "./Register.scss";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, apellido, email, password });
    // Aquí se puede llamar al backend para registrar
  };

  return (
    <>
      <Header />
      <br />
      <br />

      <div className="form-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
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
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Crear cuenta</button>
          <br />
          <Link to="/account" className="link-btn">
            Tornar
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
