import React from "react";
import games from "../data/games.js";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";

function Koleksi() {
  const navigate = useNavigate();

  const handleDoubleClick = (id) => {
    navigate(`/koleksi/${id}`);
  };

  return (
    <div className="koleksi-page">
      <h1>Koleksi Game</h1>
      <div className="koleksi-grid">
        {games.map((game) => (
          <GameCard 
            key={game.id}
            game={game}
            onDoubleClick={() => handleDoubleClick(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Koleksi;