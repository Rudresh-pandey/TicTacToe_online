import { useContext } from "react";
import { GameContext } from "../GameContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { gameWinner }: any = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center py-12 flex flex-col font-sans text-white gap-8 text-center">
      <p className="  flex flex-col font-bold ">
        <span className=" text-4xl font-bold p-4 ">Winner 🎉</span>
        {gameWinner !== 0 ? (
          gameWinner === 1 ? (
            <p className=" text-md">
              Player1:{" "}
              <span className=" text-lg text-teal-500 font-bold">X</span>
            </p>
          ) : (
            <p className=" text-md">
              Player2:{" "}
              <span className=" text-lg text-yellow-500 font-bold">O</span>
            </p>
          )
        ) : (
          <p className=" text-lg">Great Game, it's a DRAW 🤝</p>
        )}
      </p>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <span className=" bg-red-400 p-2 text-sm font-semibold cursor-pointer">
          Play Again <i className="fa fa-repeat"></i>
        </span>
      </div>
    </div>
  );
}

export default Result;
