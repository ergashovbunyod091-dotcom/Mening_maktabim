
import "./SinfRahbar.css";
import React from "react"; 

export default function SinfRahbar() {
  return (
    <div className="rahbar-page">
      <div className="rahbar-header">
        <span className="rahbar-badge">25-MAKTAB • 7-A SINF</span>
        <h1>Sinf rahbari</h1>
        <p>Sinfimiz rahbari haqida ma’lumot</p>
      </div>

      <div className="rahbar-card">
        <div className="rahbar-avatar">
          QR
        </div>

        <div className="rahbar-content">
          <h2>Qurbonova Ruhsora</h2>
          <p className="rahbar-lavozim">Sinf rahbari</p>

          <div className="rahbar-line"></div>

          <div className="rahbar-info">
            <span>Ism-familiyasi</span>
            <strong>Qurbonova Ruhsora</strong>
          </div>

          <div className="rahbar-info">
            <span>O‘qitadigan fani</span>
            <strong>Tarix</strong>
          </div>

          <div className="rahbar-info">
            <span>Sertifikatlari</span>
            <strong>Tarix fanidan A+ sertifikatlari</strong>
          </div>

          <div className="rahbar-about">
            <h3>Rahbarimiz haqida</h3>
            <p>
              Qurbonova Ruhsora 7-A sinf rahbari va tarix
              fani o‘qituvchisi. U tarix fanidan A+
              sertifikatlariga ega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
