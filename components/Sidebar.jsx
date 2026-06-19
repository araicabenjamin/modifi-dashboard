"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiHome,
  HiCreditCard,
  HiGlobeAmericas,
  HiGlobeAlt,
  HiPlus,
  HiChevronRight,
} from "react-icons/hi2";

import { FaShip } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <nav className="sidebarNav">
        <Link
          href="/overview"
          className={`navItem ${pathname === "/overview" ? "active" : ""}`}
        >
          <HiHome />
          <span className="navLabel">Overview</span>
        </Link>

        <Link
          href="/trades"
          className={`navItem ${pathname === "/trades" ? "active" : ""}`}
        >
          <HiGlobeAmericas />
          <span className="navLabel">Trades</span>
        </Link>

        <Link
          href="/billing"
          className={`navItem ${pathname === "/billing" ? "active" : ""}`}
        >
          <HiCreditCard />
          <span className="navLabel">Billing</span>
        </Link>

        <Link
          href="/shipments"
          className={`navItem ${pathname === "/shipments" ? "active" : ""}`}
        >
          <FaShip />
          <span className="navLabel">Shipments</span>
        </Link>

        <div className="navItem">
          <HiGlobeAlt />
          <span className="navLabel">Services</span>

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
