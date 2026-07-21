import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerDashboard from "./pages/CustomerDashboard";
import MyDevices from "./pages/MyDevices";
import Documents from "./pages/Documents";
import DeviceDetails from "./pages/DeviceDetails";
import ScheduleInspection from "./pages/ScheduleInspection";
import InspectionHistory from "./pages/InspectionHistory";
import NotificationCenter from "./pages/NotificationCenter";
import Contact from "./pages/Contact";

import StaffDashboard from "./pages/StaffDashboard";
import ComplianceQueue from "./pages/ComplianceQueue";
import Reports from "./pages/Reports";
import RoutePlanner from "./pages/RoutePlanner";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<CustomerLogin />} />

      {/* Customer Portal */}
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/my-devices" element={<MyDevices />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/device-details" element={<DeviceDetails />} />
      <Route
        path="/schedule-inspection"
        element={<ScheduleInspection />}
      />
      <Route
        path="/inspection-history"
        element={<InspectionHistory />}
      />
      <Route
        path="/notifications"
        element={<NotificationCenter />}
      />
      <Route path="/contact" element={<Contact />} />

      {/* Staff Portal */}
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/compliance" element={<ComplianceQueue />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/route" element={<RoutePlanner />} />
    </Routes>
  );
}

export default App;