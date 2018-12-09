import React from "react";
// this component will handle the filters: it will dispatch to the store 
// to do so I must CONNECT it to the store, so that it can dispatch from there:
import { connect } from "react-redux";
//import the action setTextFilter from action/filters.js
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

//IMPORTANT!!! when a component is connected, we have access to dispatch() from the props of the component itself:
// we can call dispatch right from here!
 
const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
            //change the value of the text filter according to the input
            // it will change with each key stroke!
                props.dispatch(setTextFilter(e.target.value));
                // console.log(e.target.value)
            }
        }/>

        {/* ANDREW'S SOLUTION:*/}
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value==="date"){
                    props.dispatch(sortByDate())
                }
                else if (e.target.value==="amount"){
                    props.dispatch(sortByAmount())
                }
            }
        }>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>

        { /* MY SOLUTION 
            <select 
                onChange={(e) => {
                    props.dispatch(e.target.value==="date" ? sortByDate() : sortByAmount() );
                }
            }>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        */}

    </div>
);

//make a function with what we want from the store: in this case, the filters
//it will be returned in props to ExpenseListFilters, thanks to the connect() function
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

//export a connected version of ExpenseListFilters, like we did for ExpenseList
export default connect(mapStateToProps)(ExpenseListFilters);