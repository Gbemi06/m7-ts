import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavBar";

import Homepage from "./components/Homepage";
import AlbumList from "./components/AlbumList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:albumId" element={<AlbumList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
