import React from "react";
import { Seasons } from "../../containers";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="title_container">
        <h1 className="lilita-one-regular main_title">WELCOME TO ADVENTURE CAMP</h1>
        <Seasons />
      </div>
    </div>
  );
};

export default Home;
