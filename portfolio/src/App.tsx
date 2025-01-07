import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Files from "./pages/Files";
import Examples from "./pages/Examples";

function App() {
  return (
    <>
      <p>My PortFolio</p>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/files" element={<Files />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </>
  );
}

export default App;
