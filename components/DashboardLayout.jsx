"use client";

import "../styles/globals.scss";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboardLayout">
      <TopBar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

      <div className="dashboardBody">
        {sidebarOpen && (
          <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
        )}

        <Sidebar
          sidebarOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="mainContent">
          <div className="pageContainer">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
