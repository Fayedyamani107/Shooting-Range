import React from "react";

function Akun() {
  const accountData = {
    'discord': { // Tambahkan 'discord' ke accountData
        username: "jekyll.x",
        id: null, // Discord tidak punya ID seperti game
    },
    'valorant': {
      username: "Zero#Fay",
      id: null,
    },
    'MLBB': {
      username: "Dr. Jekyll",
      id: "777901512 (12105)",
    },
    'coc': {
      username: "Zero",
      id: "#LCUR9YJJ2",
    },
  };

  return (
    <div className="akun-container">
      <h1 className="akun-title">Game Account Details</h1>

      {/* Gunakan akun-grid di sini */}
      <div className="akun-grid"> 
        {Object.keys(accountData).map((gameName) => {
          const userData = accountData[gameName];
          return (
            <div key={gameName} className="user-details-card">
              <h2 className="game-name">{gameName.charAt(0).toUpperCase() + gameName.slice(1)}</h2>
              <div className="detail-item">
                <span className="label">Username:</span>
                <span className="value">{userData.username}</span>
              </div>
              {userData.id && (
                <div className="detail-item">
                  <span className="label">ID:</span>
                  <span className="value">{userData.id}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Akun;