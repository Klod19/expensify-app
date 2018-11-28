//here store the action generators for the filters

// ACTION TO SET TEXT FILTER; if no tex value is provided, implicitly return an empty 
// it's in the filter reducer!
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// SORT BY AMOUNT ACTION
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

// SORT BY DATE ACTION
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

// SET START DATE ACTION; if it's not given, no need to set its default to undefined, it's already undefined by default
export const setStartDate = (startDate) => ({
    type:"SET_START_DATE",
    startDate
});

// SET END DATE ACTION
export const setEndDate = (endDate) => ({
    type:"SET_END_DATE",
    endDate
});
