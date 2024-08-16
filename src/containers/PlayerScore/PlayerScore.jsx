import React from "react";
import { GiCrenelCrown } from "react-icons/gi";
import { GiCrown } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { motion } from "framer-motion";
import "./PlayerScore.css";

const containerVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const PlayerScore = ({ players }) => {
  const sortedPlayers = Object.entries(players).sort((a, b) => b[1] - a[1]);

  return (
    <div className="board">
      {sortedPlayers.map(([player, score], index) => (
        <motion.div
          key={index}
          className="player_score"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ type: "linear", delay: 10 - index }}
        >
          {index === 0 ? (
            <GiCrenelCrown id="first" />
          ) : index === 1 ? (
            <GiCrown id="second" />
          ) : index === 2 ? (
            <GiJewelCrown id="third" />
          ) : null}
          <div className="shadows-into-light-regular">{index + 1}</div>
          <div className="shadows-into-light-regular">{player}</div>
          <div className="shadows-into-light-regular">{score}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default PlayerScore;
