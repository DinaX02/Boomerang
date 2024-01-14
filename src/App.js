import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Publicar from "./pages/Publicar";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";
import '../src/components/components.css';
import ProgressPublish2 from "./components/ProgressPublish/ProgressPublish2.js";
import Notifications from "./pages/Notifications";
import AlugarMorada from "./components/AlugarMorada";
import AdicionarMorada from "./components/AdicionarMorada";

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/publicar-page" element={<Publicar/>}></Route>
        <Route path="/profile-page" element={<Profile/>}></Route>
        <Route path="/progressPublish-2" element={<ProgressPublish2/>}></Route>
        <Route path="/alugar-morada" element={<AlugarMorada/>}></Route>
        <Route path="/adicionar-morada" element={<AdicionarMorada/>}></Route>
        <Route path="/about-page" element={<AboutPage/>}></Route>
        <Route path="/notifications-page" element={<Notifications/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
