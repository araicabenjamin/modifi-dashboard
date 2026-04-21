import { useState } from "react";
import TradesList from "../components/TradesList";
import { repayments } from "../data/repayments";
import FilterBar from "../components/FilterBar";
import "../styles/TradesPage.scss";

export default function TradesPage() {
  // -----------------------------
  // STATE
  // -----------------------------
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [quickFilter, setQuickFilter] = useState(""); // Active Quick Filter
  const [statusFilter, setStatusFilter] = useState(""); // Dropdown Selection

  // -----------------------------
  // HANDLERS
  // -----------------------------

  // When a quick filter button is clicked, toggle the quickFilter state between the selected status and an empty string (to allow deselection)
  const handleQuickFilter = (status) => {
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

  const quickFilterMap = {
    "Action Required": ["In Review"],
    Completed: ["Approved"],
    "In Progress": ["In Progress"],
  };

  const filteredTrades = repayments.filter((trade) => {
    // Search Filter: Check if the trade's ID includes the search term (case-insensitive)
    const matchesSearch = trade.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesQuickFilter =
      // Quick Filter: If no quick filter is active (quickFilter === ""), include all trades. Otherwise, only include trades whose status matches the active quick filter.
      quickFilter === "" || quickFilterMap[quickFilter]?.includes(trade.status);

    const matchesStatus =
      // Status Filter: If no status is selected in the dropdown (statusFilter === ""), include all trades. Otherwise, only include trades whose status matches the selected status in the dropdown.
      statusFilter === "" || trade.status === statusFilter;

    return matchesSearch && matchesQuickFilter && matchesStatus;
  });

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="tradesPage">
      <div className="tradesHeader">
        <h1>Your Trades</h1>

        {/* Search input field: Updates the searchTerm state as the user types */}

        <div className="tradesHeader">
          <input
            type="text"
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
