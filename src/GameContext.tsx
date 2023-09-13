import { createContext, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3000/");
export const GameContext = createContext({});

export function GameContextProvider({ children }) {
  const [gameRoomId, setGameRoomId] = useState(null);
  const [gameWinner, setGameWinner] = useState(0);
  return (
    <GameContext.Provider
      value={{ gameRoomId, setGameRoomId, socket, gameWinner, setGameWinner }}
    >
      {children}
    </GameContext.Provider>
  );
}
