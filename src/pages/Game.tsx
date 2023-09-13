import { useState, useContext, useEffect, useRef } from "react";
import { GameContext } from "../GameContext";
import { useNavigate, useParams } from "react-router-dom";

function Game() {
  const [currPlayer, setCurrPlayer] = useState(1);
  const [count, setCount] = useState(0);
  const [clip, setClip] = useState(false);
  const [markBoxValue, setMarkBoxValue] = useState(Array(9).fill(null));
  const [clickedBox, setClickedBox] = useState<number[]>([]);
  const [winner, setWinner] = useState(0);
  const { gameRoomId, socket, setGameWinner }: any = useContext(GameContext);
  const { action, roomid }: any = useParams();
  const navigate = useNavigate();
  const boxRef: any = useRef([]);
  const Game = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const checkWinner = (board) => {
    const Win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < Win.length; i++) {
      const [a, b, c] = Win[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }
    return 0;
  };

  const roomId = decodeURIComponent(roomid);

  function fillBox(e) {
    e.preventDefault();
    const boxId = e.target.value;
    if (!clickedBox.includes(e.target.value) && winner === 0) {
      setClickedBox([...clickedBox, e.target.value]);
      console.log(".................");
      console.log(roomId);
      setCount(count + 1);
      console.log(count);

      const copyState = Array.from(markBoxValue);
      copyState[boxId - 1] = currPlayer;
      setMarkBoxValue(copyState);

      const win = checkWinner(copyState);
      console.log(".........current winner :", win);
      socket.emit("send_box", {
        boxId,
        roomId,
        currPlayer,
        count,
        win,
        copyState,
      });
      if (win !== 0) {
        setGameWinner(win);
        navigate(`/result/${roomId}`);
      }
      checkPlayer(e);
      if (count == 8) {
        setGameWinner(0);
        navigate(`/result/${roomId}`);
      }
    }
  }
  console.log(markBoxValue);
  // function markForPlayer1(boxId: number) {
  //   for (const combination of Win) {
  //     const index = combination.indexOf(boxId);
  //     if (index !== -1) {
  //       combination[index] = -1;
  //     }
  //   }
  // }
  // function markForPlayer2(boxId: number) {
  //   for (const combination of Win) {
  //     const index = combination.indexOf(boxId);
  //     if (index !== -1) {
  //       combination[index] = -2;
  //     }
  //   }
  // }
  function checkPlayer(e: any) {
    const boxId: number = e.target.value;
    if (currPlayer === 1) {
      e.target.innerHTML = `X`;
      e.target.style = "color: rgb(20 184 166)";
      // markForPlayer1(boxId);

      setCurrPlayer(2);
    } else if (currPlayer === 2) {
      e.target.innerHTML = "O";
      e.target.style = "color: rgb(234 179 8)";
      // markForPlayer2(boxId);

      setCurrPlayer(1);
    }
  }
  function checkSecondPlayer(player: number, box: number) {
    if (boxRef.current[player]) {
      if (player === 1) {
        boxRef.current[box].textContent = `X`;
        boxRef.current[box].style.color = "rgb(20 184 166)";
        // markForPlayer1(box);

        setCurrPlayer(2);
      } else if (player === 2) {
        boxRef.current[box].textContent = "O";
        boxRef.current[box].style.color = "rgb(234 179 8)";
        // markForPlayer2(box);

        setCurrPlayer(1);
      }
    }
  }

  function copyToClipBoard() {
    navigator.clipboard.writeText(gameRoomId);
    setClip(true);
  }

  useEffect(() => {
    socket.on("received_box", (data: any) => {
      setCount(data.count + 1);
      setClickedBox([...clickedBox, data.boxId]);
      checkSecondPlayer(data.currPlayer, data.boxId);
      setMarkBoxValue(data.copyState);
      setWinner(data.win);
      if (data.win !== 0) {
        setGameWinner(data.win);
        navigate(`/result/${roomId}`);
      }
      if (data.count == 8) {
        setGameWinner(0);
        navigate(`/result/${roomId}`);
      }
    });
  }, [socket]);
  return (
    <div className="text-center flex h-screen text-white font-montserrat">
      <div className="m-auto flex flex-col">
        {action === "created" && (
          <p className=" text-xl font-semibold w-64 mx-auto">
            Share this code for connecting other player{" "}
            <span className=" text-blue-600 text-2xl font-bold">
              {gameRoomId}
            </span>{" "}
            <span
              className=" absolute -my-2 cursor-pointer"
              onClick={copyToClipBoard}
            >
              🔗
              {clip ? <span style={{ fontSize: "12px" }}>copied!</span> : ""}
            </span>
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
        <div className=" flex flex-col gap-4" style={{ padding: 0 }}>
          <div className=" flex justify-between font-bold my-8">
            <p>
              Player 1 : <span className=" text-xl text-teal-500">X</span>
            </p>
            <p>
              Player 2 : <span className=" text-xl text-yellow-500">O</span>
            </p>
          </div>

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
