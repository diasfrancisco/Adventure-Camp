import React from "react";
import GamesBkg from '../../assets/games_board_bkg.jpeg';
import "./Games.css";

const season1_games = [
  "Hide n Seek",
  "Quiz",
  "Treasure Hunt",
  "Who Am I?",
  "Statue",
  "Draw Me",
  "Siblings",
  "Kartoshka",
  "Murder Mystery",
];

const Games = (props) => {
  return (
    <div className="games_container" style={{ backgroundImage: `url(${GamesBkg})` }}>
      <h1 className="games_title">Season {props.season} Games</h1>
      <div className="games_grid">
        {season1_games.map((game, index) => (
          <div key={index} className="game_item">
            {game}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
