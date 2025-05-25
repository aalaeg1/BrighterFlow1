// === UserHome.js ===
import React from 'react';
import brighterflowLogo from './assets/logo1.png';
import logoutIcon from './assets/logout.svg';
import './UserHome.css';

export default function UserHome() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const userRole = localStorage.getItem("role") || "Utilisateur";
  const userName = localStorage.getItem("nom") || "Utilisateur";

  return (
    <div className="user-container">
      <header className="user-header">
        <div className="user-header-left">
          <img src={brighterflowLogo} alt="BrighterFlow" className="logo-left" />
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-role">({userRole})</span>
          </div>
        </div>
        <button className="logout-icon-button" onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" className="logout-icon" />
        </button>
      </header>

      <main className="user-content">
        <h1>Bienvenue</h1>
        <p>Voici votre espace utilisateur</p>
      </main>
    </div>
  );
}
