import React from "react";

function GameCard({ game, onDoubleClick }) {
  return (
    <div
      className="game-card"
      onDoubleClick={onDoubleClick}
    >
      <img src={game.image} alt={game.title} />
      <div className="game-title-overlay">{game.title}</div>
    </div>
  );
}

export default GameCard;