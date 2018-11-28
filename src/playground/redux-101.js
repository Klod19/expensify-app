import {createStore} from "redux";
//we just need to import the createStore once

// ACTION GENERATORS: functions that return action objects (like store.dispatch)
// it returns an object so I return IMPLICITLLY (no need for return statement)
// DESTRUCTURE incrementBy from its object, to access incrementBy directly
// and set default value of incrementBy by 1; we'll use it if nothing is passed in;
// if some value is passed in, it'll be the value of incrementBy (see below when the function is called)
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    // since I have a key with the name equal to that of the variable I can actually write it only once
    decrementBy
}); 

const resetCount = () => ({
    type:"RESET"
});

// no need for default values because the user must set one
const setCount = ({count}) => ({
    type: "SET",
    count
});

// REDUCERS

// 1) They are PURE functions -> what they return is ONLY determined by the things passed in, 
//    and not by external variables; it does not interact with things outside of its scope;
//    in the case o the following reducer, it only uses the state and the action

// 2) never change directly state or action! just return an object that represents the new state!

// createStore needs a passed function in, with an argument: here it's the object "state"

// make a const for each single reducer: we are going to need many

const countReducer = ( (state = { count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT" :
            return {
                count: state.count + action.incrementBy
            }

        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }

        case "SET":
            return{
                count: action.count
            }    
        
        case "RESET": 
            return {
                count: 0
            }

        // the first time the const is called: 
        default: 
            return state 
    }
});

// and apply the reducer to the store
const store = createStore(countReducer);

//store.subscribe gets called each time store/the state gets modified
store.subscribe( ()=> {
    //return the current state
    console.log(store.getState());
});


// TO STOP SUBSCRIBING:
// return value from .subscribe() is a function we can call to UNSUBSCRIBE!
// we make the following const equal to the return value of .subscribe()
/*
const unsubscribe = store.subscribe( ()=> {
    console.log(store.getState());
});
*/

// to modify the state use ".dispatch"

//call it to increment
store.dispatch(incrementCount({incrementBy: 5}));

// stop subscribing:
//unsubscribe();

//increment one more time, now without passing any value to incrementBy (which by default will have value of 1)
store.dispatch(incrementCount());


//reset - set the count = 0;
store.dispatch(resetCount());

//call it to decrement
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));


// call it to SET (with its case above)

store.dispatch(setCount({count: 150}))

/*
store.dispatch({
    type: "SET",
    count: 100
})
*/


