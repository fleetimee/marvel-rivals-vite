import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Heroes } from "./components/Heroes";
import HeroDetail from "./components/HeroDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Heroes />} />
          <Route path="/hero/:id" element={<HeroDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
