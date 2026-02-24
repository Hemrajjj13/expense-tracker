import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";
import ExpenseForm from "../components/ExpenseForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  return (
    <>
        <div className="p-6 text-xl">Dashboard</div>
        <ExpenseForm />
        <div>
            <h2 className="text-lg font-semibold mb-2">
                Total Expenses: ₹ {expenses.reduce((total, exp) => total + exp.amount, 0)}
            </h2>
        </div>
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
