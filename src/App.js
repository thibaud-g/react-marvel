// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";
import {AnimatePresence} from "framer-motion";
// Import dependencies
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar >
        
        
      </Navbar>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
