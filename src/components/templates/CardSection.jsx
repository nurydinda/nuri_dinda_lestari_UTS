import React from 'react';
import "../css/CardSection.css";



function CardSection() {
  const cards = [
    { count: "250+", description: "Pelanggan Bahagia" },
    { count: "600+", description: "Proyek Selesai" },
    { count: "1.8K+", description: "Sumber Daya Tersedia" },
    { count: "11K+", description: "Pelanggan Setia" },
  ];

  return (
    <section className="card-section">
      <h2>Perusahaan yang Telah Bergabung</h2>
      <p>Deskripsi singkat mengenai perusahaan yang telah bergabung.</p>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.count}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSection;