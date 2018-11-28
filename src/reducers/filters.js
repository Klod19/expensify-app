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

export default filtersReducer;