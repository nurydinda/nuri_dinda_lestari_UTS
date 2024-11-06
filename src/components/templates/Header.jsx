import React from 'react';
import '../css/Header.css';
import logo from '../img/logo.png'; // Mengimpor gambar logo

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Website Logo" className="logo-image" /> {/* Tambahkan gambar logo */}
      </div>
      <nav>
        <a href="#brand">Brand</a>
        <a href="#produk">Produk</a>
        <a href="#tentang">Tentang</a>
      </nav>
      <div className="auth-buttons">
        <button className="login">Log In</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
}

export default Header;