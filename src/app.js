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

// IMPORT React Router, with 3 elements:
import {BrowserRouter, Route, Switch} from "react-router-dom";

//import the css normalizer, to reset the default styles of the different browsers
import "normalize.css/normalize.css";

// I have to import the .css file
import "./styles/styles.scss";

// configure the BrowserRouter and Route as JSX (const routes); Route has 2 props: "path" and "component"
// set the props "component" and pass them in as props in Route component
// when "path" is matched, "component" is rendered
// with multiple <Route> I can set up individual pages that make up the application;
// I need to put them in a div, because BrowserRouter accepts only ONE child
// Route has also prop "exact = {true}" --> witout it, as matching path will be considered everything
// that matches, also "/create" for the first page, because it has "/"
// <Switch> goes through all the <Route>, one by one, from top to bottom; 
// when it finds one matching it returns it and stops; 
// if it finds no matches, the 404 message is returned, because it is at the bottom,
// and without any setting would be always rendered, because no path = always appears, it's "universal"

const ExpenseDashboardPage = () => (
    <div> 
        This is from my Dashboard component
    </div>
);

const AddExpensePage = () => (
    <div> 
        This is from my AddExpense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit expense
    </div>
);

const HelpPage = () => (
    <div>
        help page
    </div>
);

const NotFoundPage = () => {
    <div>
        404!
    </div>
}

//here I define the BrowserRouter configuration
// to have mul
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);



const app = document.getElementById("app");


ReactDOM.render(routes, app);