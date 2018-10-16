console.log("utils.js is running!");

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//we need to EXPORT the functions etc we define to the Entry Point --> we use "export" statement

//EXPORT STATEMENT
// NOTE: IT'S NOT AN OBJECT!!! 
// 1) named exports
// 2) default exports --> ONLY ONE PER FILE!
export {square, add, subtract as default};

// NOTE! I can also export line by line, and setting a default in the process:

// export const square = (x) => x * x;

// export const add = (a, b) => a + b;

// export default (a, b) => a - b;
