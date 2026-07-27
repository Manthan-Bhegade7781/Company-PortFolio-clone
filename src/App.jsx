import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Demo from "./pages/Demo";
import PortfolioDemo from "./pages/PortfolioDemo";
import Support from "./pages/Support";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/portfolio-demo" element={<PortfolioDemo />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;