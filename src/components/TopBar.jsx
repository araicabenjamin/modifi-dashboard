import { FiBell } from "react-icons/fi";
import logo from "../assets/images/modifi_logo.png";

function TopBar() {
    return (
      <header className="topBar">
      <div className="topBarLeft">
        <img src={logo} alt="MODIFI" className="topBarLogo" />
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
