// store creation; register into the function combineReducers as many reducers as we need; DO IT IN AN OBJECT!!!
// this way, the "expenses" property is managed by expensesReducer and "filters" is managed by filtersReducer
import {createStore, combineReducers} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// make a function to export the store; export this function as default
// so when we import this function we get the store back
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
}

