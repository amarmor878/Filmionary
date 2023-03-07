import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecera from "./components/cabecera/Cabecera";
import Principal from "./pages/principal/Principal"
import Pelicula from "./pages/detalles/Pelicula"
import ListaPeliculas from "./components/listaPeliculas/ListaPeliculas.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Cabecera />
        <Routes>
          <Route index element={<Principal />}></Route>
          <Route path="pelicula/:id" element={<Pelicula />}></Route>
          <Route path="peliculas/:type" element={<ListaPeliculas />}></Route>
          <Route path="/*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
