import { createSlice } from "@reduxjs/toolkit";

const initialState = {
expenses: []
};

const expenseSlice = createSlice({
name: "expense",
initialState,
reducers: {
addExpense: (state, action) => {
const newExpense = {
id: Date.now(),
...action.payload
};
state.expenses.push(newExpense);
},

deleteExpense: (state, action) => {
  state.expenses = state.expenses.filter(
    (expense) => expense.id !== action.payload
  );
}

}
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
