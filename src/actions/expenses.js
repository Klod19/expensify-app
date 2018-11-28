import uuid from "uuid";

// here store the action generator for expenses; EXPORT THEM IN FRONT OF THE CONST DEFINITIONS

// ADD EXPENSE ACTION
// pass into it the paramter: descruter the first argument (if it doesn't exist it equals to empty object);
// define all the properties (defined by the user) that we are going to need AND set their default value
// if they have no value set it equal to their default value
export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0} = {} ) =>({
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
export const removeExpense = ({id} = {} ) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT EXPENSE ACTION needs:
// 1) the id of the expense we want to modify;
// 2) the updates objects, with all the update elements
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates 
});
