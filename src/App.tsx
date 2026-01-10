import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Page = ({ title }: { title: string }) => (
  <div className="page">
    <h1>{title}</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/about" element={<Page title="About Us" />} />
        <Route path="/features" element={<Page title="Features" />} />
        <Route path="/reviews" element={<Page title="Reviews" />} />
        <Route path="/signup" element={<Page title="Sign Up" />} />
        <Route path="/login" element={<Page title="Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
