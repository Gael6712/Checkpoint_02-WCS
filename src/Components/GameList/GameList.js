import React, { useContext, useState } from "react";
import { ApiGamesContext } from "../../Context/GameContext";
import GameCard from "../GameCard/GameCard";

export default function GameList() {
  const { data, setData } = useContext(ApiGamesContext);
  const [filter, setFilter] = useState(false);
  const deletable = (id) => {
    setData(data.filter((game) => game.id !== id));
  };
  return (
    <>
      <button onClick={() => setFilter(!filter)}>
        {filter ? "Tout les Jeux " : "Jeux Populaire"}
      </button>
      <div className="container">
        {data
          .filter((game) => !filter || game.rating >= 4.5)
          .map((game, id) => (
            <GameCard key={id} game={game} deletable={deletable} />
          ))}
      </div>
    </>
  );
}
