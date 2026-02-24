import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { Fragment } from "react";

const Dashboard = () => {

  return (
    <>
      <div className="p-6">
        <ExpenseForm />
        <br />
        <ExpenseList />
      </div>
    </>
  );
};

export default Dashboard;
