import React from "react";
import LeaderbordBkg from "../../assets/camping_leaderboard_bkg.png";
import { PlayerScore } from "../../containers";
import "./Leaderboard.css";

const players = {
  Raisa: 0,
  Rayner: 0,
  Vernon: 0,
  Verlyn: 0,
  Maeve: 0,
  Maleah: 0,
  Abigail: 0,
  Alisha: 0,
  Ava: 0,
  Alia: 0,
};

const Leaderboard = ({ season }) => {
  return (
    <div
      className="leaderboard_container"
      style={{ backgroundImage: `url(${LeaderbordBkg})` }}
    >
      <div className="outer_board">
        <h1 className="permanent-marker-regular">Leaderboard</h1>
        <h2 className="permanent-marker-regular">Season {season}</h2>
        <PlayerScore players={players} />
      </div>
    </div>
  );
};

export default Leaderboard;
