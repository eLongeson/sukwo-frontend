import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
// import ChatButton from "./components/Chat";

function App() {
  return (
    <Router>
      <div className="relative flex-col">
        <Navbar />
        {/* Route definitions */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
              </>
            }
          />
          {/* <Route path="/about" element={About} /> */}
          {/* <Route path="/contact" element={Contact} /> */}
        </Routes>

        {/* <span className="absolute top-[83%] left-[85%]">
          <ChatButton />
        </span> */}
      </div>
    </Router>
  );
}

export default App;
