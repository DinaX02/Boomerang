import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Publicar from "./pages/Publicar";
import AboutPage from "./pages/AboutPage";
import NotificationsPage from "./pages/NotificationsPage";
import FavoritePage from "./pages/FavoritePage";
import '../src/components/components.css';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/publicar-page" element={<Publicar/>}></Route>
        <Route path="/about-page" element={<AboutPage/>}></Route>
        <Route path="/notifications-page" element={<NotificationsPage/>}></Route>
        <Route path="/fav-page" element={<FavoritePage/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
