import GameList from "../../Components/GameList/GameList";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <h1>Veuillez faire votre choix : </h1>
      <GameList />
    </div>
  );
}
