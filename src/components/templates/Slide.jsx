import React from 'react';
import "../css/Slide.css";

function Slide() {
  return (
    <section className="slide">
      <div className="slide-content">
        <h1>Memberi Solusi Bisnis Anda</h1>
        <p>Deskripsi singkat mengenai solusi bisnis yang ditawarkan.</p>
        <button className="primary-button">Produk Kami</button>
        <button className="secondary-button">Pesan Sekarang</button>
      </div>
      <div className="slide-card">
        <div className="card">
          <h3>Judul Card</h3>
          <p>Isi dari card, misalnya layanan atau produk spesifik yang ditawarkan.</p>
        </div>
      </div>
      <div className="slide-image">{/* Tempat untuk gambar */}</div>
    </section>
  );
}

export default Slide;