import React from "react";
import valoCharacter from '../assets/Valorant.png';
import dotaCharacter from '../assets/Dota2Heroes.png';
import Basecoc from '../assets/Basecoc.png';

function HomePage() {
  return (
    <div className="home-container">
      {/* Gambar Base CoC sebagai latar belakang utama */}
      <img src={Basecoc} alt="Clash of Clans Base" className="background-image" />
      
      {/* Gambar untuk sisi kiri, tetap di depan */}
      <img src={valoCharacter} alt="Valorant Character" className="home-character left" />
      
      <div className="home-content">
        <h1 className="home-title">Welcome to Shooting Range</h1>
        <h2 className="home-text">
          Explore my personal game collection and find your next adventure.
        </h2>
      </div>

      {/* Gambar untuk sisi kanan, tetap di depan */}
      <img src={dotaCharacter} alt="Dota 2 Character" className="home-character right" />
    </div>
  );
}

export default HomePage;