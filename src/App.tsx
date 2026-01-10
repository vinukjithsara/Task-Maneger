import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => (
  <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
    HOME PAGE
  </h1>
);

const About = () => (
  <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
    ABOUT PAGE
  </h1>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
