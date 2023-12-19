import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
