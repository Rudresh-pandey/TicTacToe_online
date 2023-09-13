import { useContext } from "react";
import { GameContext } from "../GameContext";

function Result() {
  const { gameWinner }: any = useContext(GameContext);
  return (
    <div>
      <p className=" text-white">
        winner :`
        {gameWinner !== 0
          ? gameWinner === 1
            ? "Player 1 won"
            : "Player 2 won"
          : "Draw"}
        `
      </p>
    </div>
  );
}

export default Result;
