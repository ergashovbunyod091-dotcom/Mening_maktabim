import { BrowserRouter, Routes, Route } from "react-router-dom";
import Oquvchilar from "./components/Portfolio/oquvchilar.jsx";
import SinfRahbar from "./components/Portfolio/SinfRahbar.jsx";
import Portfolio from "./components/Portfolio/Portfolio";


 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Oquvchilar" element={<Oquvchilar />} />
        <Route path="/SinfRahbar" element={<SinfRahbar />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;