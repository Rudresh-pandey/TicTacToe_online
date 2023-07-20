import { useState, useContext, useEffect, useRef } from "react";
import { GameContext } from "../GameContext";
import { useNavigate, useParams } from "react-router-dom";

function Game() {
  const [currPlayer, setCurrPlayer] = useState(1);
  const [count, setCount] = useState(0);
  const [clickedBox, setClickedBox] = useState<number[]>([]);
  const { gameRoomId, socket }: any = useContext(GameContext);
  const { action, roomid }: any = useParams();
  const navigate = useNavigate();
  const boxRef: any = useRef([]);
  const Game = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const roomId = decodeURIComponent(roomid);
  function fillBox(e) {
    e.preventDefault();

    const boxId = e.target.value;
    if (!clickedBox.includes(e.target.value)) {
      setClickedBox([...clickedBox, e.target.value]);
      console.log(roomId);
      setCount(count + 1);
      console.log(count);
      socket.emit("send_box", { boxId, roomId, currPlayer, count });
      checkPlayer(e);
    }
    if (count == 8) {
      navigate(`/result/${roomId}`);
    }
  }

  function checkPlayer(e: any) {
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
  function checkSecondPlayer(player: number, box: number) {
    if (boxRef.current[player]) {
      if (player === 1) {
        boxRef.current[box].textContent = `X`;
        boxRef.current[box].style.color = "rgb(20 184 166)";
        setCurrPlayer(2);
      } else if (player === 2) {
        boxRef.current[box].textContent = "O";
        boxRef.current[box].style.color = "rgb(234 179 8)";
        setCurrPlayer(1);
      }
    }
  }

  useEffect(() => {
    socket.on("received_box", (data: any) => {
      setCount(data.count + 1);
      setClickedBox([...clickedBox, data.boxId]);
      checkSecondPlayer(data.currPlayer, data.boxId);
      if (data.count == 8) {
        navigate(`/result/${roomId}`);
      }
    });
  }, [socket]);

  return (
    <div className="text-center flex h-screen text-white font-montserrat">
      <div className="m-auto flex flex-col">
        {action === "created" && (
          <p className=" text-xl font-semibold">
            Share this code for connecting other player{" "}
            <span className=" text-blue-600 text-2xl font-bold">
              {gameRoomId}
            </span>{" "}
            <span className=" absolute -my-2 cursor-pointer">🔗</span>
          </p>
        )}
        {action === "joined" && (
          <p className=" text-xl font-semibold w-64">
            Room joined :{" "}
            <span className=" text-blue-600 text-2xl font-bold">
              {gameRoomId}
            </span>
          </p>
        )}
        <div
          className=" flex flex-col gap-4"
          style={
            action === "joined" ? { padding: "0" } : { padding: " 24px 15%" }
          }
        >
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
                  ref={(el) => (boxRef.current[box] = el)}
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
