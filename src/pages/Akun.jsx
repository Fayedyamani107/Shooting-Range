import React from "react";
import accountData from "../data/accountData.js";

function Akun() {
 const handleCopyId = (id) => {
  navigator.clipboard.writeText(id).then(() => {
      alert("ID berhasil disalin!");
    }).catch(err => {
      console.error('Gagal menyalin: ', err);
    })
  };

  return (
  <div className="akun-container">
    <h1 className="akun-title">Game Account Details</h1>
    <div className="akun-grid">
      {accountData.map((account) => (
        <div key={account.gameId} className="user-details-card">
          <h2 className="game-name">
                {/* Menambahkan tag <img> untuk logo */}
                <img src={account.logo} alt={`${account.gameName} Logo`} className="game-logo" />
                {account.gameName}
            </h2>
            <div className="detail-item">
              <span className="label">Username:</span>
              <span className="value">{account.username}</span>
            </div>
          {account.id && (
            <div className="detail-item">
              <span className="label">ID:</span>
              <span className="value">{account.id}</span>
              {/* Tombol Salin ID */}
              <button onClick={() => handleCopyId(account.id)} className="copy-button">Salin</button>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Akun;