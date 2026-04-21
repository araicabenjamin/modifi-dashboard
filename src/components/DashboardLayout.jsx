import "../styles/Layout.scss";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboardLayout">
      <TopBar />

      <div className="dashboardBody">
        <Sidebar />

        <main className="mainContent">
          <div className="pageContainer">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;