"use client";

import { useState } from "react";
import TradesList from "../components/TradesList";
import { repayments } from "../data/repayments";
import FilterBar from "../components/FilterBar";
import { Trade, TradeStatus } from "../types/trade";

import "../styles/trades-page.scss";
import "../styles/trades-page-mobile.scss";


export default function TradesPage() {

  // -----------------------------  
  // STATE
  // -----------------------------

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [quickFilter, setQuickFilter] = useState<"" | "Action Required" | "In Progress" | "Completed">("");

  const [statusFilter, setStatusFilter] = useState<TradeStatus | "">("");

  // -----------------------------
  // HANDLERS
  // -----------------------------

  const handleQuickFilter = (
    status: "Action Required" | "In Progress" | "Completed"
  ) => {
    setQuickFilter((prevFilter) => (prevFilter === status ? "" : status));
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setQuickFilter("");
    setStatusFilter("");
  };

  // -----------------------------
  // DERIVED DATA
  // -----------------------------

  const quickFilterMap: Record<string, TradeStatus[]> = { // matchesQuickFilter checks for the key here
    "Action Required": ["In Review"],
    "Completed": ["Approved"],
    "In Progress": ["In Progress"],
  };

const filteredTrades: Trade[] = (repayments as Trade[]).filter((trade) => {

    const matchesSearch = trade.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());


    const matchesQuickFilter =
      quickFilter === "" || quickFilterMap[quickFilter]?.includes(trade.status);  //“ "?" if it exists, then…”


    const matchesStatus =
      statusFilter === "" || trade.status === statusFilter;  
      return matchesSearch && matchesQuickFilter && matchesStatus;
  });

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="tradesPage">
      <div className="tradesHeader">
        <span className="page-heading">Your Trades</span>

        {/* Search input field: Updates the searchTerm state as the user types */}

        <div className="tradesHeader">
          <input
            type="text"
            className="tradeReferenceInput"
            placeholder="Trade Reference"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Quick filter buttons for filtering by trade status */}
      <div className="quickFilters">
        <span>Quick filters:</span>

        <button
          className={quickFilter === "Action Required" ? "active" : ""}
          onClick={() => handleQuickFilter("Action Required")}
        >
          Action Required
        </button>

        <button
          className={quickFilter === "In Progress" ? "active" : ""}
          onClick={() => handleQuickFilter("In Progress")}
        >
          In Progress
        </button>

        <button
          className={quickFilter === "Completed" ? "active" : ""}
          onClick={() => handleQuickFilter("Completed")}
        >
          Completed
        </button>
      </div>

      <FilterBar
        onReset={handleResetFilters}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <TradesList items={filteredTrades} />
    </div>
  );
}
