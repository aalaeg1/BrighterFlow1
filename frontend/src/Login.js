import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brighterflowLogo from './assets/logo1.png';
import topRightLogo from './assets/logo2.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, motDePasse })
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json(); // ✅ attend un objet JSON avec { nom, role }
    })
    .then(data => {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", data.role);
      localStorage.setItem("nom", data.nom);

      if (data.role === "Administrateur") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    })
    .catch(error => {
      alert("Erreur de connexion : " + error.message);
    });
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <img src={brighterflowLogo} alt="BrighterFlow" className="logo-left" style={{ height: '90px' }} />
        <img src={topRightLogo} alt="Top Right" className="logo-right" style={{ height: '90px' }}/>
      </header>

      <div className="form-box">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
        <button onClick={() => navigate('/signup')}>S'inscrire</button>
      </div>
    </div>
  );
}

export default Login;




