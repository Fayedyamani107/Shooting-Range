import logoSentinels from '../assets/Sentinels.png';
import logoFnatic from '../assets/Fnatic.png';
import logoPaperRex from '../assets/PaperRex.png';
import logoBoom from '../assets/Boom_ID.png';

import logoOG from '../assets/OG_dota2.png';
import logoTeamSecret from '../assets/TS_Dota.png';
import logoPSGLGD from '../assets/LGD_PSG.png'; 
import logoEvilGeniuses from '../assets/EG_dota2.png'; 

import logoEvos from '../assets/Evos_Legend.png';
import logoRRQ from '../assets/RRQ_hoshi.png';
import logoOnic from '../assets/ONIC_Esport.png';
import logoAlterEgo from '../assets/Alter_Ego.png'; 

import logoNova from '../assets/nova_esports.png';
import logoTribe from '../assets/Tribe_gaming.png';
import logoTeamQueso from '../assets/Team_queso.png';


const games = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    image: "https://i.pinimg.com/736x/8e/8c/d0/8e8cd0a280fe0715633dd7695ea71735.jpg",
    description: "Clash of Clans (CoC) adalah game strategi mobile berbasis membangun desa dan menyerang desa lawan. Pemain mengumpulkan sumber daya, membangun pertahanan, dan menyerang pemain lain.",
    history: "Dirilis oleh Supercell pada 2012. Game ini cepat populer karena mekanisme strategi berbasis waktu dan sosial.",
    majorTournaments: "Clash of Clans World Championship (CWC) merupakan turnamen tertinggi. Pemain atau klan terbaik dari berbagai negara bersaing.",
    community: "Komunitas CoC sangat besar dan global, terutama di mobile gaming. Banyak forum, Discord, dan grup Facebook.",
    famousTeams: [
      { name: "Nova Esports", logo: logoNova },
      { name: "Tribe Gaming", logo: logoTribe },
      { name: "Team Queso", logo: logoTeamQueso },
    ],
  },
  {
    id: "valorant",
    title: "Valorant",
    image: "https://i.pinimg.com/736x/5c/43/f2/5c43f2be36351261b4123fecccc225f3.jpg",
    description: "Valorant adalah FPS taktis 5v5 dari Riot Games, fokus pada strategi, kemampuan karakter unik (agents), dan tembakan presisi.",
    history: "Dirilis 2 Juni 2020. Game ini cepat berkembang karena mekanisme yang mirip CS:GO digabungkan dengan skill unik tiap karakter.",
    majorTournaments: "Turnamen tertinggi adalah Valorant Champions Tour (VCT) dan Valorant Champions.",
    community: "Komunitasnya besar dan global, aktif di Twitch, YouTube, dan Discord. Ada banyak tim pro, streamer, dan turnamen lokal.",
    famousTeams: [
      { name: "Sentinels", logo: logoSentinels },
      { name: "Fnatic", logo: logoFnatic },
      { name: "Paper Rex", logo: logoPaperRex },
      { name: "Boom Esport", logo: logoBoom },
    ],
  },
  {
    id: "dota2",
    title: "Dota 2",
    image: "https://i.pinimg.com/736x/44/1f/b1/441fb18bbabea725eec0bc2053a87b45.jpg",
    description: "Dota 2 adalah MOBA 5v5 di PC, yang berfokus pada penghancuran “Ancient” lawan. Karakter dalam game ini disebut “heroes” dan memiliki kemampuan unik.",
    history: "Dirilis oleh Valve pada 2013 sebagai penerus Dota Allstars, sebuah mod dari Warcraft 3.",
    majorTournaments: "The International (TI) merupakan turnamen tahunan dengan prize pool terbesar di esports.",
    community: "Komunitasnya sangat besar dan global, aktif di Steam, Reddit, Twitch, dan forum lokal.",
    famousTeams: [
      { name: "OG", logo: logoOG },
      { name: "Team Secret", logo: logoTeamSecret },
      { name: "PSG.LGD", logo: logoPSGLGD },
      { name: "Evil Geniuses", logo: logoEvilGeniuses },
    ],
  },
  {
    id: "mobile-legend",
    title: "Mobile Legends: Bang Bang",
    image: "https://i.pinimg.com/1200x/c4/01/8d/c4018d7542a72779c036bb2bb5a60892.jpg",
    description: "Mobile Legends: Bang Bang (MLBB) adalah MOBA mobile 5v5 yang mirip dengan Dota, dengan fokus pada push turret dan kerja tim yang cepat.",
    history: "Dirilis oleh Moonton pada 2016. Game ini sangat populer karena gameplay yang cepat dan ringan di perangkat mobile.",
    majorTournaments: "Turnamen tertinggi adalah M1, M2, M3 World Championship.",
    community: "Komunitasnya sangat besar di Asia Tenggara, terutama di Indonesia, Filipina, dan Malaysia. Komunitas ini aktif di Facebook, YouTube, dan Discord.",
    famousTeams: [
      { name: "EVOS Legends", logo: logoEvos },
      { name: "RRQ Hoshi", logo: logoRRQ },
      { name: "ONIC Esports", logo: logoOnic },
      { name: "Alter Ego", logo: logoAlterEgo },
    ],
  },
];

export default games;