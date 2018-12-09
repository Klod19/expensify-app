// a single expense; we'll export a stateless functional component

import React from "react"
//import connect() from react-redux, to connect this component to the store
import { connect } from "react-redux";
// import the action "RemoveExpense"
import { removeExpense } from "../actions/expenses";


// I can destructure the props object to get what I want
// connect the component to the store, so it can access dispatch and props; pass dispatch in the destructured object
const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
    <div>
        <h3>Description: {description} </h3>
        <p>Amount: {amount} - Created at: {createdAt}  </p>
        {/*removeExpense is setted up to take an object as argument, so pass an object in! */}
        <button onClick={ () => {dispatch(removeExpense({id}))}}>
            Remove
        </button>
    </div>
);
   


//export a connected version of the component; in this case I don't need to specify what' needed from the state
export default connect()(ExpenseListItem);
    

