import { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "All",
    period: "All",
    minAmount: "",
  });

  const handleChange = (e) => {
    const updated = {
      ...filters,
      [e.target.name]: e.target.value,
    };

    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="bg-white shadow p-4 rounded space-y-3">
      <h2 className="font-semibold">Filters</h2>

      {/* Category */}
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="All">All Categories</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      {/* Period */}
      <select
        name="period"
        value={filters.period}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="All">All Time</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>

      {/* Min Amount */}
      <input
        type="number"
        name="minAmount"
        placeholder="Minimum Amount"
        value={filters.minAmount}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

export default Filters;
