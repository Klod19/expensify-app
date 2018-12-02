//FILTER: get visible expenses
// it has 2 arguments: the array with the whole expenses and the filters - it's the state
// we pass in the DESTRUCTURED state - filters

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        // if startDate/endDate = NaN (i.e. undefined) evaluate to TRUE: so all dates are included (by app boot)
        // if expense.createdAt >= startDate, it will be TRUE, because it's the same startDate or after it 
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        //check if the description includes the chosen text
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // if all of them are true, the current item will be in the array:
        return startDateMatch && endDateMatch && textMatch;
        //we also want to SORT the items, bases either on date or amount
    }).sort((a, b) => {
        if (sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

export default getVisibleExpenses;
