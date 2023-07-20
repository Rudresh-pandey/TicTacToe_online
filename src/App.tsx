import { GameContextProvider } from "./GameContext";
import Game from "./pages/Game";
import Result from "./pages/Result";
import Start from "./pages/Start";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GameContextProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game/:action/:roomid?" element={<Game />} />
        <Route path="/result/:roomid?" element={<Result />} />
      </Routes>
    </GameContextProvider>
  );
}

export default App;
