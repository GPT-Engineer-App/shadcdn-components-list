import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ShadcdnComponents from "./pages/ShadcdnComponents.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/shadcdn-components" element={<ShadcdnComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
