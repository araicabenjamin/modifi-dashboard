import { FiBell } from "react-icons/fi";
import {HiBars3} from "react-icons/hi2";

function TopBar({onMenuClick}) {
  return (
    <header className="topBar">
      <div className="topBarLeft">
        <div className="menuIcon" onClick={onMenuClick}  >
          <HiBars3 />
        </div>
        <img src="/modifi_logo.png" alt="MODIFI" className="topBarLogo" />
      </div>

      <div className="topBarRight">
        <button className="financeTradeButton">FINANCE TRADE</button>
        <FiBell className="topBarIcon" />
      </div>
    </header>
  );
}

export default TopBar;