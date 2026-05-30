export default function FilterBar({ onReset, statusFilter, setStatusFilter }) {
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

        <label className="filterCheckbox">
          <input type="checkbox" />
          Action required
        </label>
      </div>

      <button className="resetButton" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}