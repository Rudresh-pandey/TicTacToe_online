import { GameContext } from "../GameContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const [roomId, setRoomId] = useState("");
  const { gameRoomId, setGameRoomId, socket }: any = useContext(GameContext);
  const navigate = useNavigate();
  let roomString = "";
  function createRoom() {
    const num = Math.floor(Math.random() * (999 - 111) + 111);
    roomString += num;
    roomString += "#";

    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const sign = ["!", "@", "$", "%", "^", "&", "*"];
    const select = Math.floor(Math.random() * 7);
    const l1 = Math.floor(Math.random() * 26);
    const l2 = Math.floor(Math.random() * 26);
    const no = Math.floor(Math.random() * 10);
    roomString += letters[l1];
    roomString += letters[l2];
    roomString += no;
    roomString += sign[select];
    setGameRoomId(roomString);
    socket.emit("create_room", roomString);
    navigate(`/game/created/${roomString}`);
  }

  function joinRoom() {
    setGameRoomId(roomId);
    if (roomId !== "") {
      socket.emit("join_room", roomId);
    }
    navigate(`/game/joined/${roomId}`);
  }

  return (
    <div>
      <div className=" text-center flex h-screen text-white font-montserrat">
        <div className=" m-auto flex flex-col ">
          <p className="font-bold" style={{ fontSize: "3rem" }}>
            TicTacToe
          </p>
          <p>online multiplayer</p>
          <div className=" flex gap-6 justify-center my-6 ">
            <div className="flex items-center bg-stone-600 cursor-pointer">
              <i className="fa fa-star-o text-lg text-yellow-500 font-semibold bg-stone-900 px-2  "></i>
              <p className="px-2">Star</p>
            </div>
            <div className="flex items-center bg-stone-600 cursor-pointer">
              <i className="fa fa-code-fork text-lg text-teal-500 font-semibold bg-stone-900 px-2 "></i>
              <p className="px-2">Fork</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4 my-6">
            <input
              type="text"
              placeholder="Enter Code"
              className=" text-white px-2 py-1 text-lg font-semibold bg-inputcolor"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              className=" bg-red-400 px-6 py-1 font-semibold text-lg"
              onClick={joinRoom}
            >
              Enter Game
            </button>
            <p>
              <span className=" text-teal-500 font-bold text-lg">O</span>
              <span className=" text-yellow-500 font-bold text-lg">R</span>
            </p>
            <button
              className=" bg-red-400 px-6 py-1 font-semibold text-lg"
              onClick={createRoom}
            >
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
