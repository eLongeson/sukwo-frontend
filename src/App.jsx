import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar />
        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={About} /> */}
          {/* <Route path="/contact" element={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
