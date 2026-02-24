import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expenseSlice";

const ExpenseForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
    note: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.date) return;

    dispatch(
      addExpense({
        amount: Number(formData.amount),
        category: formData.category,
        date: formData.date,
        note: formData.note,
      }),
    );

    // Reset Form
    setFormData({
      amount: "",
      category: "Food",
      date: "",
      note: "",
    });

    // show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <>
      {success && (
        <div className="text-green-600 mb-3">Expense added successfully!</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Food</option>
          <option>Bills</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Note */}
        <input
          type="text"
          name="note"
          placeholder="Note (optional)"
          value={formData.note}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
