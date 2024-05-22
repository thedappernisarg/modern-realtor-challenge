import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarRPAForm from "./components/CarRPAForm";
import MarketAnalysis from "./components/MarketAnalysis";
import Dashboard from "./components/Dashboard";
import ScatterChart from "./components/ScatterChart";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <div className="my-4">
        <Routes>
          <Route path="/" element={<CarRPAForm />} />
          <Route path="/form" element={<CarRPAForm />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer style={{ position: "relative" }} />
    </div>
  );
};

export default App;
