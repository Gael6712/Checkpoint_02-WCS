import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiGamesContext = createContext();
const GameContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <ApiGamesContext.Provider value={{ data: data, setData: setData }}>
      {props.children}
    </ApiGamesContext.Provider>
  );
};
export default GameContextProvider;
