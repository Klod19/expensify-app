// const isAdult = function isAdult(n) {
//     if (n >= 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const canDrink = function canDrink(n) {
//     if (n >= 21) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// shorter way with arrow functions
//const isAdult = (n) => n >= 18 ?  true : false;

//const canDrink = (n) => n >= 21 ? true : false;

// EVEN SHORTER WAY!!!
const isAdult = (n) => n >= 18;

const canDrink = (n) => n >= 21;

const isJunior = (n) => n < 18

export {isAdult, canDrink, isJunior as default };