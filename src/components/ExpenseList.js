import React from "react";
//import function to connect component to redux store
import { connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List ({props.expenses.length} item/s)</h1>
        {/*we will get the destructured expense object, obtaining all the props that we need*/}
        {props.expenses.map( (expense) => {
            return <ExpenseListItem key={expense.id}{...expense} />; 
            }  
        )}
    </div>
);

// make const for the high order component;
// function connect() returns an object, usually with things taken from the state
// REACTIVE: as the store changes, the components are going to be re-rendered with new values:
//           no need for store.subscribe(), store.getState() ...

const mapStateToProps = (state) => {
    return {
        "expenses": state.expenses,
        "filters": state.filters
    }
}

// .connect(1)(2) defines:
// (1) the things that we want to get off the store
// (2) the component that we want to create the connected version of - it's Higher Order Component
// moreover, it is common practice to export like following
export default connect(mapStateToProps)(ExpenseList);


