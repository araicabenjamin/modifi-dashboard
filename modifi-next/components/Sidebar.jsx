import Link from "next/link";

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
        <Link href="/" className="navItem">
          <HiHome />
          <span className="navLabel">Overview</span>
        </Link>

        <Link href="/trades" className="navItem">
          <HiGlobeAmericas />
          <span className="navLabel">Trades</span>
        </Link>

        <Link href="/billing" className="navItem">
          <HiCreditCard />
          <span className="navLabel">Billing</span>
        </Link>

        <Link href="/shipments" className="navItem">
          <FaShip />
          <span className="navLabel">Shipments</span>
        </Link>

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
