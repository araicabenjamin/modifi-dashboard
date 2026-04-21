import { NavLink } from "react-router-dom";
import {
  HiHome,
  HiCreditCard,
  HiGlobeAmericas,
  HiGlobeAlt,
  HiPlus,
  HiChevronRight,
} from "react-icons/hi2";

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


        <div className="navItem">
          <HiCreditCard />
          <span className="navLabel">Billing</span>
        </div>


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
