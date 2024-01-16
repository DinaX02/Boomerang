import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Publicar from "./pages/Publicar";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";
import '../src/components/components.css';
import ProgressPublish2 from "./components/ProgressPublish/ProgressPublish2";
import ProgressPublish3 from "./components/ProgressPublish/ProgressPublish3";
import ProgressPublish4 from "./components/ProgressPublish/ProgressPublish4";
import ProgressPublish5 from "./components/ProgressPublish/ProgressPublish5";
import Notifications from "./pages/Notifications";
import EditProfile from "./pages/EditProfile";
import OnBoarding from "./pages/OnBoarding";
import RentDate from "./pages/RentDate";
import Vouchers from "./pages/Vouchers";
import AlugarMorada from "./components/AlugarMorada";
import AdicionarMorada from "./components/AdicionarMorada";
import ArticlePage from "./pages/ArticlePage";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/onBoarding" element={<OnBoarding/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/publicar-page" element={<Publicar/>}></Route>
        <Route path="/profile-page" element={<Profile/>}></Route>
        <Route path="/article" element={<ArticlePage/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/edit-profile-page" element={<EditProfile/>}></Route>
        <Route path="/progressPublish-2" element={<ProgressPublish2/>}></Route>
        <Route path="/progressPublish-3" element={<ProgressPublish3/>}></Route>
        <Route path="/progressPublish-4" element={<ProgressPublish4/>}></Route>
        <Route path="/progressPublish-5" element={<ProgressPublish5/>}></Route>
        <Route path="/about-page" element={<AboutPage/>}></Route>
        <Route path="/notifications-page" element={<Notifications/>}></Route>
        <Route path="/rentdate-page" element={<RentDate/>}></Route>
        <Route path="/vouchers-page" element={<Vouchers/>}></Route>
        <Route path="/alugar-morada" element={<AlugarMorada/>}></Route>
        <Route path="/adicionar-morada" element={<AdicionarMorada/>}></Route>

      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
