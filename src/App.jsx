import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { useRef } from "react";
// import ChatButton from "./components/Chat";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  return (
    <Router>
      <div className="relative flex-col">
        <Navbar aboutRef={aboutRef} workRef={workRef} />
        {/* Route definitions */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home workRef={workRef} />
                <section id="about" ref={aboutRef}>
                  <About />
                </section>

                <section id="work" ref={workRef}>
                  <Projects />
                </section>

                <Footer aboutRef={aboutRef} workRef={workRef} />
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
