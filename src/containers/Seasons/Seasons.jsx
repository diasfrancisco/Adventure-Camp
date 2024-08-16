import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { LuSwords } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import "./Seasons.css";

const Seasons = () => {
  const [openSeasonItem, setOpenSeasonItems] = useState(false);

  const updateItemView = () => {
    setOpenSeasonItems((current) => !current);
  };

  return (
    <div className="seasons_container">
      <motion.button
        className="seasons_btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        onClick={updateItemView}
      >
        <div className="seasons_btn_items">
          <LuSwords />
          Season 1
          <FaChevronDown />
        </div>
      </motion.button>
      {openSeasonItem ? (
        <div className="season_items">
          <ul>
            <li><Link to='/season1_games'>Games</Link></li>
            <li><Link to='/season1_leaderboard'>Leaderboard</Link></li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Seasons;
