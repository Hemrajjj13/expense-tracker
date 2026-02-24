import { useSelector } from "react-redux";
import {
  TrendingUp,
  TrendingDown,
  Utensils,
  Bus,
  Home,
  ShoppingBag,
  FileText,
} from "lucide-react";

const Analytics = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const categoryIcons = {
    Food: Utensils,
    Travel: Bus,
    Bills: Home,
    Shopping: ShoppingBag,
    Other: FileText,
  };

  // Total spending
  const totalSpending = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Category wise totals
  const categoryTotals = expenses.reduce((acc, exp) => {
    if (!acc[exp.category]) {
      acc[exp.category] = 0;
    }
    acc[exp.category] += exp.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
  }));

  const maxAmount = Math.max(...data.map((d) => d.amount), 0);

  // ---------- Monthly Logic ----------
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const lastMonthDate = new Date(currentYear, currentMonth - 1);
  const lastMonth = lastMonthDate.getMonth();
  const lastMonthYear = lastMonthDate.getFullYear();

  const currentMonthTotal = expenses
    .filter((exp) => {
      const date = new Date(exp.date);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    })
    .reduce((sum, exp) => sum + exp.amount, 0);

  const lastMonthTotal = expenses
    .filter((exp) => {
      const date = new Date(exp.date);
      return (
        date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear
      );
    })
    .reduce((sum, exp) => sum + exp.amount, 0);

  let percentageChange = 0;
  if (lastMonthTotal === 0 && currentMonthTotal > 0) {
    percentageChange = 100;
  } else if (lastMonthTotal > 0) {
    percentageChange =
      ((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100;
  }

  const isIncrease = percentageChange >= 0;

  // ---------- UI ----------
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Analytics</h1>
      {/* Total spending */}
      <div className="bg-gray-900 text-white p-4 rounded">
        <h2 className="text-lg">Total Spending</h2>
        <p className="text-2xl font-bold">₹ {totalSpending}</p>
      </div>

      {/* Monthly Summary (Task 9) */}
      <div className="bg-white shadow p-4 rounded flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Monthly Summary</h2>
          <p className="text-sm text-gray-500">
            This Month: ₹ {currentMonthTotal}
          </p>
          <p className="text-sm text-gray-500">
            Last Month: ₹ {lastMonthTotal}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 text-lg font-bold ${
            isIncrease ? "text-green-600" : "text-red-600"
          }`}
        >
          {isIncrease ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
          {Math.abs(percentageChange).toFixed(1)}%
        </div>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="bg-white shadow p-6 rounded text-center text-gray-500">
          No expenses yet. Start adding some to see analytics.
        </div>
      )}

      {/* Bar Chart */}
      <div className="bg-white shadow p-6 rounded">
        <h2 className="font-semibold mb-4">Category Breakdown</h2>

        <div className="flex items-end gap-6 h-64 overflow-x-auto">
          {data.map((item) => {
            const height = maxAmount > 0 ? (item.amount / maxAmount) * 100 : 0;

            return (
              <div
                key={item.category}
                className="flex flex-col items-center flex-1"
              >
                <div className="h-48 flex items-end">
                  <div
                    className="w-10 bg-blue-500 rounded-t transition-all duration-300"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>

                <div className="flex items-center gap-1 mt-2">
                  {categoryIcons[item.category] &&
                    (() => {
                      const Icon = categoryIcons[item.category];
                      return <Icon size={14} />;
                    })()}
                  <p className="text-sm">{item.category}</p>
                </div>
                <p className="text-xs text-gray-500">₹ {item.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
