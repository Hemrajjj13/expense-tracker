import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import { Trash2 } from "lucide-react";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <>
        {/* Total Section */}
        <div className="bg-gray-900 text-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold mt-1">₹ {total}</p>
        </div>

        {/* Expense Cards */}
        {expenses.map((exp) => (
            <div
                key={exp.id}
                className="bg-white shadow p-4 rounded flex justify-between items-center"
            >
                <div>
                    <p className="font-semibold text-lg">₹ {exp.amount}</p>
                    <p className="text-sm text-gray-600">{exp.category}</p>
                    <p className="text-xs text-gray-400">{exp.date}</p>
                    {exp.note && (
                        <p className="text-sm mt-1 text-gray-700">{exp.note}</p>
                    )}
                </div>

                <button 
                    onClick={() => dispatch(deleteExpense(exp.id))}
                    className="text-red-500 hover:text-red-700"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        ))}
    </>
  );
};

export default ExpenseList;
