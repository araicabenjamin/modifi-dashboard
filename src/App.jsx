import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import OverviewPage from "./pages/Overview";
import TradesPage from "./pages/TradesPage";
import Billing from "./pages/Billing";
import Shipments from "./pages/Shipments";

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/shipments" element={<Shipments />} />
          </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}