import "./App.scss";

import Home from "./components/home";
import Hydrotreating from "./components/hydrotreating";
import Introduction from "./components/Introduction";
import VT1 from "./components/VT-1";
import Tatorey from "./components/tatorey";
import Interactivediagrams from "./components/interactivediagrams/App";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interactivediagrams" element={<Interactivediagrams />} />
        <Route path="/hydrotreating" element={<Hydrotreating />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/tatorey" element={<Tatorey />} />
        <Route path="/vt1" element={<VT1 />} />
      </Routes>
    </>
  );
}

export default App;
