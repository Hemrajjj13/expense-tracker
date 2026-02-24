import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

export const store = configureStore({
reducer: {
expense: expenseReducer
},
preloadedState: persistedState
});


store.subscribe(() => {
    saveState({
        expense: store.getState().expense
    });
});