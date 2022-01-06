import { Link } from "react-router-dom";
import "./GameCard.css";
export default function GameCard({ game, deletable }) {
  const test = game.clip;
  console.log(game.genres);

  return (
    <div>
      <div className="card">
        <img src={game.background_image} alt={game.name} />
        <h2>{game.name}</h2>
        <h3>Genre : </h3>
        <div>
          <p className="flex">
            {" "}
            {game.genres.map((genre, id) => (
              <div key={id}>{genre.name}</div>
            ))}
          </p>
        </div>
        <h5>Note : {game.rating}</h5>
        <p>released: {game.released}</p>

        <Link to={`/games/screenshot/${game.id}`}>Plus d'infos</Link>
        <button onClick={() => deletable(game.id)}>Suppression</button>
      </div>
      <video width="500vw" autoPlay controls muted>
        <source src={test.clip} type="video/mp4" />
      </video>
    </div>
  );
}
