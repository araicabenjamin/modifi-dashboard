import { FiBell } from "react-icons/fi";

function TopBar() {
    return (
      <header className="topBar">
      <div className="topBarLeft">
        <img src="/src/assets/images/MODIFI_Logo.png" alt="MODIFI" className="topBarLogo" />
        </div>

      <div className="topBarRight">
        <button className="financeTradeButton">FINANCE TRADE</button>
        <FiBell className="topBarIcon" />
        <div className="topBarCompany">MODIFI</div>
      </div>
      </header>
    );
}

export default TopBar;
