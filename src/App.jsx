import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CustomerDashboard from "./pages/CustomerDashboard";
import StaffDashboard from "./pages/StaffDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
    </Routes>
  );
}

export default App;