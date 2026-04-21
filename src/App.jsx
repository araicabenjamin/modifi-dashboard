import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import OverviewPage from "./pages/Overview";
import TradesPage from "./pages/TradesPage";

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/trades" element={<TradesPage />} />
          </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}