import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useState } from "react";
import Filters from "../components/Filters";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    category: "All",
    period: "All",
    minAmount: "",
  });

  return (
    <>
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ExpenseForm />
        <Filters onFilterChange={setFilters} />
        <ExpenseList filters={filters} />
      </div>
    </>
  );
};

export default Dashboard;
