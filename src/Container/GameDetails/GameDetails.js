import { useContext } from "react";
import { useParams } from "react-router";
import GameCardDetails from "../../Components/GameCardDetails/GameCardDetails";
import { ApiGamesContext } from "../../Context/GameContext";

export default function GameDetails(props) {
  const { data } = useContext(ApiGamesContext);
  const { id } = useParams();
  const gameSelected = data.find((game) => game.id === parseInt(id));

  console.log(gameSelected);
  return data.length > 0 ? (
    gameSelected ? (
      <>
        <div>
          <h1>ScreenShot</h1>
          {gameSelected.short_screenshots.map((screenshot) => (
            <GameCardDetails img={screenshot.image} key={screenshot.id} />
          ))}
        </div>
      </>
    ) : (
      <h1>Error 404</h1>
    )
  ) : (
    <h5>Loading...</h5>
  );
}
