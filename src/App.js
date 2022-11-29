import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/home";
import Hydrotreating from "./components/Hydrotreating";
import Introduction from "./components/Introduction";
import VT1 from "./components/VT-1";
import Tatorey from "./components/Tatorey";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hydrotreating" element={<Hydrotreating />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/tatorey" element={<Tatorey />} />
            <Route path="/vt1" element={<VT1/>} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
