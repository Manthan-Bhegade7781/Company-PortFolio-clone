import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BackToTop from "./components/BackToTop";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Demo from "./pages/Demo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
