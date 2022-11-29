import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./components/home";
import Hydrotreating from "./components/hydrotreating/hydrotreating";
import Intro from "./components/intro/intro";
import VT1 from "./components/VT-1/vt1";
import Tatorey from "./components/tatorey/tatorey";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hydrotreating" element={<Hydrotreating />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/tatorey" element={<Tatorey />} />
            <Route path="/vt1" element={<VT1/>} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;
