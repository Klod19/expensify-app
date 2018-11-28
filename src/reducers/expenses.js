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

export default expensesReducer;