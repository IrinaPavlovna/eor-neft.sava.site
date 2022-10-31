import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Normalize from "react-normalize";

import Home from "./pages/home";
import Hydrotreating from "./pages/hydrotreating/hydrotreating";
import Intro from "./pages/intro/intro";
import VT1 from "./pages/VT-1/vt1";
import Tatorey from "./pages/tatorey/tatorey";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Normalize />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hydrotreating" element={<Hydrotreating />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/tatorey" element={<Tatorey />} />
            <Route path="/vt1" element={<VT1/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
