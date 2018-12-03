// a single expense; we'll export a stateless functional component

import React from "react"

// I can destructure the props object to get what I want
const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <h3>Description: {description} </h3>
        <p>Amount: {amount} - Created at: {createdAt}  </p>
    </div>
);
   
export default ExpenseListItem;
    

