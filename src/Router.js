import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import GameDetails from "./Container/GameDetails/GameDetails";
import Home from "./Container/Home/Home";

export default function Router() {
  return (
    <>
      <Header name="React Game Checkpoint Fusion " />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/games/screenshot/:id" element={<GameDetails />} />
      </Routes>
    </>
  );
}
