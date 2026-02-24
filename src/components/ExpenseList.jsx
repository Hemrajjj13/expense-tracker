import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import {
  Trash2,
  Utensils,
  Bus,
  Home,
  ShoppingBag,
  FileText,
} from "lucide-react";

const ExpenseList = ({ filters }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  const now = new Date();

  const filteredExpenses = expenses.filter((exp) => {
    const expDate = new Date(exp.date);

    // category filter
    if (filters.category !== "All" && exp.category !== filters.category) {
      return false;
    }

    // Min amount filter
    if (filters.minAmount && exp.amount < Number(filters.minAmount)) {
      return false;
    }

    // Date filter
    if (filters.period === "week") {
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      if (expDate < weekAgo) return false;
    }

    if (filters.period === "month") {
      if (
        expDate.getMonth() !== now.getMonth() ||
        expDate.getFullYear() !== now.getFullYear()
      ) {
        return false;
      }
    }

    return true;
  });

  const total = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const categoryIcons = {
    Food: Utensils,
    Travel: Bus,
    Bills: Home,
    Shopping: ShoppingBag,
    Other: FileText,
  };

  return (
    <>
      {/* Total Section */}
      <div className="bg-gray-900 text-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Total Expenses</h2>
        <p className="text-2xl font-bold mt-1">₹ {total.toLocaleString()}</p>
      </div>

      {filteredExpenses.length === 0 && (
        <div className="bg-white shadow p-6 rounded text-center text-gray-500 mt-4">
          No expenses match the filters.
        </div>
      )}

      {filteredExpenses.map((exp) => (
        <div
          key={exp.id}
          className="bg-white shadow-md hover:shadow-lg transition p-4 rounded-lg flex justify-between items-start"
        >
          <div>
            <p className="font-semibold">₹ {exp.amount.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              {(() => {
                const Icon = categoryIcons[exp.category];
                return Icon ? <Icon size={14} /> : null;
              })()}
              {exp.category}
            </div>
            <p className="text-xs text-gray-400">{exp.date}</p>
            {exp.note && <p className="text-sm mt-1">{exp.note}</p>}
          </div>

          <button
            onClick={() => {
              if (window.confirm("Delete this expense?")) {
                dispatch(deleteExpense(exp.id));
              }
            }}
            className="text-red-500"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </>
  );
};

export default ExpenseList;
