import React from 'react';
import "../css/Footer.css"
import logo from '../img/logo.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="logo">
        <img src={logo} alt="Website Logo" className="logo-image" /> {/* Tambahkan gambar logo */}
      </div>
        <nav>
          <a href="#brands">Brands</a>
          <a href="#products">Produk</a>
          <a href="#about">Tentang</a>
        </nav>
        <p>Website Bisnis &copy; 2024. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook">FB</a>
          <a href="#twitter">TW</a>
          <a href="#instagram">IG</a>
          <a href="#linkedin">LN</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;