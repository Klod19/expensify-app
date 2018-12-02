// HOC : Higher Order Component
// a component that renders another component
// GOALS:
// 1) reuse code
// 2) render hijacking
// 3) prop manipulation
// 4) abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
); 


// HIGHER ORDER COMPONENT:
// here is a function that returns the HOC; the HOC wraps other components, 
// so I can reuse its code 
// here it adds a warning if specific conditions are met AND in any case renders the component passed in

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {/* if props.isAdmin is true, render the following paragraph: */}
            {props.isAdmin && <p> This is private info; please don't share!</p>} 
            <WrappedComponent {...props} />
        </div>
    );
    
    
};

// another function that returns an HOC: requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info</p>}
        </div>
    );
};

// and then store the functions that return the HOCs in a const and make them wrap Info, to render it later on;
// these will be ALTERNATIVE versions of the Info component: higher order components

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const app = document.getElementById("app");

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the warnings" />, app);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the warnings" />, app);