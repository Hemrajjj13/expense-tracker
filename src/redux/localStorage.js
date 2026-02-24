export const loadState = () => {
    try {
        const serialized = localStorage.getItem("expenseState");
        if (!serialized) return undefined;

        return JSON.parse(serialized);
    } catch {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem("expenseState", serialized);
    } catch {null}
};
