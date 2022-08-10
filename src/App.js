// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar >
        <NavItem to={"/"} text={"Home"} />
        
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
