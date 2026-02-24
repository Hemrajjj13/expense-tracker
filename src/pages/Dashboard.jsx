import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { Fragment, useState } from "react";
import Filters from "../components/Filters";

const Dashboard = () => {

    const [filters, setFilters] = useState({
        category: "All",
        period: "All",
        minAmount: ""
    });

  return (
    <>
      <div className="p-6">
        <ExpenseForm />
        <br />
        <Filters onFilterChange={setFilters} />
        <ExpenseList filters={filters} />
      </div>
    </>
  );
};

export default Dashboard;
