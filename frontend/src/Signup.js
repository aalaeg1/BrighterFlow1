import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brighterflowLogo from './assets/logo1.png';
import topRightLogo from './assets/logo2.png';
import './Login.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [nom, setNom] = useState('');
  const [role, setRole] = useState('Utilisateur');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, motDePasse, nom, role })
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.text();
    })
    .then(() => {
      alert("Inscription réussie !");
      navigate("/login");
    })
    .catch(error => {
      alert("Erreur d'inscription : " + error.message);
    });
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <img src={brighterflowLogo} alt="BrighterFlow" className="logo-left" />
        <img src={topRightLogo} alt="Top Right" className="logo-right" />
      </header>
      <div className="form-box">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Utilisateur">Utilisateur</option>
            <option value="Administrateur">Administrateur</option>
          </select>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
