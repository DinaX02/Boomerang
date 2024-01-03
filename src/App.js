import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Publicar from "./pages/Publicar";
import Notificacoes from "./pages/Notificacoes";

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/publicar-page" element={<Publicar/>}></Route>
        <Route path="/notificacoes" element={<Notificacoes/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
