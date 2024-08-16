import { Route, Routes } from "react-router-dom";
import { Home, Games, Leaderboard } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="season1_games" element={<Games season={1} />} />
          <Route path="season1_leaderboard" element={<Leaderboard season={1} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
