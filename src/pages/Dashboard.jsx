import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "../redux/expenseSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  const handleAdd = () => {
    dispatch(
      addExpense({
        amount: 500,
        category: "Food",
        date: new Date().toISOString().split("T")[0],
        note: "Test expense",
      }),
    );
  };

  return (
    <>
        <div className="p-6 text-xl">Dashboard</div>
        <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
            Add Test Expense
        </button>
        <div className="space-y-2">
            {expenses.map((exp) => (
                <div 
                    key={exp.id}
                    className="p-3 border rounded flex justify-between"
                >
                    <div>
                        ₹{exp.amount} | {exp.category} | {exp.date}
                    </div>

                    <button
                        onClick={()=> dispatch(deleteExpense(exp.id))}    
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </>
  );
};

export default Dashboard;
