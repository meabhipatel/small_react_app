import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Services from "./screens/Services";
import Projects from "./screens/Projects";
import PageNotFound from "./screens/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
