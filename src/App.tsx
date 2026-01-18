import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/about"
          element={<About isLoggedIn={isLoggedIn} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
