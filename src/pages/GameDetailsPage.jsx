import React from "react";
import { useParams } from "react-router-dom";
import games from "../data/games.js";

function GameDetailsPage() {
  const { gameId } = useParams();
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return (
      <div className="game-details-container" style={{ textAlign: 'center' }}>
        <h1>Game Tidak Ditemukan</h1>
        <p>Game yang kamu cari tidak ada di koleksi.</p>
      </div>
    );
  }

  return (
    <div className="game-details-container">
      <h1>{game.title}</h1>
      <div className="game-details-content">
        <div className="game-details-text">
          <h2>Tentang Game</h2>
          <p>{game.description}</p>
          
          <h3>Sejarah</h3>
          <p>{game.history}</p>
          
          <h3>Komunitas</h3>
          <p>{game.community}</p>
          
          <h3>Kejuaraan Terbesar</h3>
          <p>{game.majorTournaments}</p>
          
          <h3>Tim Terkenal</h3>
          {/* Bagian yang diubah: Menampilkan logo-logo tim */}
          <div className="famous-teams-container">
            {game.famousTeams.map((team, index) => (
              <div key={index} className="team-logo-item">
                <img src={team.logo} alt={team.name} className="team-logo" />
                <p className="team-name">{team.name}</p>
              </div>
            ))}
          </div>
        </div>
        <img 
          src={game.image} 
          alt={game.title} 
          className="game-details-image" 
        />
      </div>
    </div>
  );
}

export default GameDetailsPage;