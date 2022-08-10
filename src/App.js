import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import HeroDetails from "./routes/HeroDetails";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}