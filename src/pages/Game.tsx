import { useState } from "react";

function Game() {
  const [currPlayer, setCurrPlayer] = useState(1);
  const [clickedBox, setClickedBox] = useState<number[]>([]);

  const Game = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function fillBox(e) {
    if (!clickedBox.includes(e.target.value)) {
      setClickedBox([...clickedBox, e.target.value]);
      if (currPlayer === 1) {
        e.target.innerHTML = `X`;
        e.target.style = "color: rgb(20 184 166)";
        setCurrPlayer(2);
      } else if (currPlayer === 2) {
        e.target.innerHTML = "O";
        e.target.style = "color: rgb(234 179 8)";
        setCurrPlayer(1);
      }
    }
  }

  return (
    <div className="text-center flex h-screen text-white font-montserrat">
      <div className="m-auto flex flex-col">
        <p className=" text-xl">
          Share this code for connecting other player{" "}
          <span className=" text-blue-700 text-2xl">#12xz6</span>{" "}
          <span className=" absolute -my-2 cursor-pointer">🔗</span>
        </p>
        <div className=" flex flex-col gap-4" style={{ padding: " 24px 15%" }}>
          <div className=" flex justify-between font-bold my-8">
            <p>
              Player 1 : <span className=" text-xl text-teal-500">X</span>
            </p>
            <p>
              Player 2 : <span className=" text-xl text-yellow-500">O</span>
            </p>
          </div>
          {/* <div className=" flex flex-col gap-8">
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
                onClick={fillBox}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
            <div className=" flex justify-between">
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
              <div
                className=" box-design"
                style={{ width: "100px", height: "100px" }}
              ></div>
            </div>
          </div> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2rem",
            }}
          >
            {Game.map((box) => {
              return (
                <button
                  key={box}
                  value={box}
                  className=" box-design font-bold text-4xl"
                  onClick={fillBox}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
