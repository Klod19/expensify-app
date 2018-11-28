// import creatStore AND combineReducers -> it allows us to write many smaller functions and combine them together
import {createStore, combineReducers} from "redux";
import uuid from "uuid";

// ADD EXPENSE ACTION
// pass into it the paramter: descruter the first argument (if it doesn't exist it equals to empty object);
// define all the properties (defined by the user) that we are going to need AND set their default value
// if they have no value set it equal to their default value
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0} = {} ) =>({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(), // it's the imported unique id generator
        // because of the property sorthand I can write the following properties only once
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE EXPENSE ACTION
const removeExpense = ({id} = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT EXPENSE ACTION needs:
// 1) the id of the expense we want to modify;
// 2) the updates objects, with all the update elements
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates 
});

// ACTION TO SET TEXT FILTER; if no tex value is provided, implicitly return an empty 
// it's in the filter reducer!
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT BY AMOUNT ACTION
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SORT BY DATE ACTION
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SET START DATE ACTION; if it's not given, no need to set its default to undefined, it's already undefined by default
const setStartDate = (startDate) => ({
    type:"SET_START_DATE",
    startDate
});

// SET END DATE ACTION
const setEndDate = (endDate) => ({
    type:"SET_END_DATE",
    endDate
});


// EXPENSES REDUCER:

// its default state
const expensesReducerDefaultState = [];

// the reducer itself; it'll be registered below
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
        //we want to add something to the array BUT WE DON'T WANT TO MODIFY IT -> use .concat() instead of push()
        //because .push() changes the original array, .concat() returns a new array, it doesn't change state
        // OR we can use E6 spread operator, to add element and obtaining a new array
            return [... state, action.expense];

        case "REMOVE_EXPENSE":
            // destructure the function argument: I just need the element id, so write ({ id }) => etc
            return state.filter( ({ id }) => id !== action.id );

        case "EDIT_EXPENSE":
            return state.map( (expense) => {
                if(expense.id === action.id){
                    //make a new object out of the expense, SPREADING it, grabbing its properties and adding the updates
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    //return expense
                    console.log("fark")
                }
            });    

        default: 
            return state;    
    }
}

// FILTERS REDUCERS
// make the default state object for filtersReducer, pass it in the reducer and, below, register it in the combineReducers


// its default state
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

// the filters reducer itself
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
          
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
            
        default:
            return state;
    }
};

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

// store creation; register into the function combineReducers as many reducers as we need; DO IT IN AN OBJECT!!!
// this way, the "expenses" property is managed by expensesReducer and "filters" is managed by filtersReducer

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// when something changes get notified of it:
store.subscribe( () => {
        const state = store.getState();
        // write the function getVisibleExpenses, pass into it the data from the state
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    }
);

// ADD AN EXPENSE; I'll store action objects in const
const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: 1000}));
// add another expense
const expenseTwo = store.dispatch(addExpense({description: "Coffee", amount: 300, createdAt: -1000}))

// console.log(expenseOne)

// // REMOVE EXPENSE - by its id; to access its id I use the const above
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // UPDATE EXPENSE: get it by its id, modify its amount
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// // SET A TEXT FILTER
// store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter(""));

// // SORT EITHER BY AMOUNT OR BY DATE
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//SET STARD AND END DATE
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); //startDate undefined
// store.dispatch(setEndDate(999));

// make a demoState, with all we're going to need for the state of expensify app

const demoState = {
    //array of objects:
    expenses: [{
        id: "vdvdvd", //it'll be a random-generated id
        description: "January Rent", // expense description
        note: "this is reduced", //notes
        amount: 34500, // that guy makes it in pennies for whatever reason
        createdAt: 0 //here we'll make a time stamp
    }],
    //object with filtering options
    filters: {
        text: "rent", //filter by the text
        sortBy: "amount", //sort by date OR amount
        startDate: undefined,
        endDate: undefined
    }
};

