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
// here is a stateless functional component; it that WRAPS other components, 
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

// and then call it in a const and make it wrap Info, to render it later on;
// this will be an ALTERNATIVE version of the Info component; 
// an higher order component

const AdminInfo = withAdminWarning(Info)

const app = document.getElementById("app");

ReactDOM.render(<AdminInfo isAdmin={true} info="There are the warnings" />, app)