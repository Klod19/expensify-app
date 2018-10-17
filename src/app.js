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

//import the css normalizer, to reset the default styles of the different browsers
import "normalize.css/normalize.css";

// I have to import the .css file
import "./styles/styles.scss";





const app = document.getElementById("app");


ReactDOM.render(<AppRouter />, app);