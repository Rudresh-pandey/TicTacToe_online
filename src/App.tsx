import Game from "./pages/Game";
import Start from "./pages/Start";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
