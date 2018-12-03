// import files! app.js will run util.js

//import "./utils.js"; 
//named exports get imported!
// I can import the default export with whatever name I want (it's subtract in "utils.js")
import default_defined_by_me, {square, add} from "./utils.js";

import isJunior_default_function_arbitrary_name, {isAdult, canDrink} from "./person.js";

// IMPORT VALIDATOR! (after installing it from command console: indecision app>yarn add validator@8.0.0)
// we grab the default export validator from the "validator" library;
// we don't need "./" before "validator" because it's for relative files;
// webpack here looks for the same module name in the node_modules folder
import validator from "validator";

// with "validator" come lot of methods (see "validator npm" documentation); for example ".isEmail()"
//the following will return "true", because it's a valid email
console.log("isEmail: " + validator.isEmail("test@gmail.com"));

//REAL APP STARTS HERE!

//IMPORT react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter"

// import the Provider component from react-redux library, to connect store and components
import {Provider} from "react-redux"; 

//import the css normalizer, to reset the default styles of the different browsers
import "normalize.css/normalize.css";

// I have to import the .css file
import "./styles/styles.scss";

// IMPORT THE STORE FOR REDUX!
import configureStore from "./store/configureStore";
//import some redux functions
import {addExpense} from "./actions/expenses.js";
import {setTextFilter} from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses";





// store exports a function, get it!
const store = configureStore();

const expenseOne = store.dispatch(addExpense({"description" : "Water bill", "amount":100, createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({"description" : "Gas bill", "amount":150, "createdAt":1000}));
// store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

setTimeout( () => {
    store.dispatch(setTextFilter("bill"));
}, 3000)


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// to share the store with the rest of the application, include between Provider tags, which have "store" as props:
// "store" is equal to the redux store
// Provider let us to define the store that we want to provide to all our components

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const app = document.getElementById("app");


ReactDOM.render(jsx, app);