import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import VideoPage from "./pages/VideoPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
