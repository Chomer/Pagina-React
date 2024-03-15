

import React, { useState } from 'react';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Usuario:', username, 'Correo electrónico:', email, 'Contraseña:', password);
  };

  return (
    <div className="registration-container">
      <h2>Registro</h2>
      <form>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="register-button" type="button" onClick={handleRegister}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
