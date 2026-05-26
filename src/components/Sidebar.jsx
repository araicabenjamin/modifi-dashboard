import { NavLink } from "react-router-dom";

import {
  HiHome,
  HiCreditCard,
  HiGlobeAmericas,
  HiGlobeAlt,
  HiPlus,
  HiChevronRight,
} from "react-icons/hi2";

import { FaShip } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebarNav">
        <NavLink to="/" className="navItem">
          <HiHome />
          <span className="navLabel">Overview</span>
        </NavLink>

        <NavLink to="/trades" className="navItem">
          <HiGlobeAmericas />
          <span className="navLabel">Trades</span>
        </NavLink>

        <NavLink to="/billing" className="navItem">
          <HiCreditCard />
          <span className="navLabel">Billing</span>
        </NavLink>

        <NavLink to="/shipments" className="navItem">
          <FaShip />
          <span className="navLabel">Shipments</span>
        </NavLink>

        <div className="navItem">
          <HiGlobeAlt /> <span className="navLabel">Services</span>
          <span className="newBadge">
            <span>New</span>
          </span>
          <HiChevronRight className="servicesArrow" />
        </div>

        <div className="navItem financeTradeItem">
          <HiPlus />
          <span className="navLabel">Finance Trade</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
