import { GameContextProvider } from "./GameContext";
import Game from "./pages/Game";
import Start from "./pages/Start";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GameContextProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game/:action/:roomid?" element={<Game />} />
      </Routes>
    </GameContextProvider>
  );
}

export default App;
