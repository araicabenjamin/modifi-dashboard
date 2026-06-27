export default function FilterBar({
  onReset,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="filtersBar">
      <div className="filtersLeft">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Status</option>
          <option value="In Review">In Review</option>
          <option value="In Progress">In Progress</option>
          <option value="Approved">Approved</option>
        </select>

        <select>
          <option>Trade date</option>
        </select>

        <select>
          <option>Trade Partner</option>
        </select>

        <select>
          <option>Amount</option>
        </select>

        <select>
          <option>Role</option>
        </select>
      </div> {/* <-- Close filtersLeft here */}

      <div className="filtersRight">
  <label className="filterCheckbox">
    <input type="checkbox" className="checkbox" />
    Action required
  </label>

  <button className="resetButton">
    Reset
  </button>
      </div>
    </div> /* <-- Close filtersBar */
  );
}