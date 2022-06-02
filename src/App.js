import { HashRouter, Routes, Route } from "react-router-dom";
import PokedexDetail from "./components/PokedexDetail";
import Pokedex from "./components/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PokeInput from "./components/PokeInput";
import './App.css';


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<PokeInput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex/>} />
            <Route path="/pokedex/:id" element={<PokedexDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;