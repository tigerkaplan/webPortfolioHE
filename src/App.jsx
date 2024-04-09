import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Features />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
