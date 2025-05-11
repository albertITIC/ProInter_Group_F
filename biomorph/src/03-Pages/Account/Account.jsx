import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../../02-Components/Header/Header";
import "./Account.scss";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
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
          <button type="submit">Iniciar sesión</button>

          <Link to="/register" className="link-btn">
            ¿No tienes cuenta? Crear una
          </Link>
        </form>
      </div>
    </>
  );
};

export default Account;
