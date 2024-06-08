import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMusic from "./pages/AllMusic.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:artistName" element={<AllMusic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
