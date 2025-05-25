// === AdminHome.js ===
import React from 'react';
import './AdminHome.css';
import brighterflowLogo from './assets/logo1.png'; // Logo principal
import topRightLogo from './assets/logo2.png';     // Logo à droite
import logoutIcon from './assets/logout.svg';

export default function AdminHome() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const userRole = localStorage.getItem("role") || "Administrateur";
  const userName = localStorage.getItem("nom") || "Admin";

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-left">
          <img src={brighterflowLogo} alt="BrighterFlow" className="logo-left" style={{ height: '90px' }} />
          <div className="admin-info">
            <span className="admin-name">{userName}</span>
            <span className="admin-role">({userRole})</span>
          </div>
        </div>
        <div className="admin-header-right">
          <img src={topRightLogo} alt="Top Right Logo" className="logo-right" />
          <button className="logout-icon-button" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" className="logout-icon" />
          </button>
        </div>
      </header>

      <main className="admin-content">
        <h1>Bienvenue Admin</h1>
        <p>Contenu réservé aux administrateurs</p>
      </main>

      <footer className="admin-footer">
        <img src="/icons/home.svg" alt="home" />
        <img src="/icons/ai.svg" alt="ai" />
        <img src="/icons/graph.svg" alt="graph" />
        <img src="/icons/report.svg" alt="report" />
        <img src="/icons/profile.svg" alt="profile" />
      </footer>
    </div>
  );
}