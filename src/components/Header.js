import React from "react";
import {NavLink} from "react-router-dom";

// make an header to be shown in each page (by adding it before Switch); 
// it also has links to all the pages (NavLink, better suited for navigation than Link)
// NavLinks has props like activeClassName, to customize the active link
// has also prop "exact", so the style is applied ONLY when JUST "/" is matched (and not the rest)

const Header = () => (
    <header>
        <h1> Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> to Home page| </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense| </NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit Expenses| </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Get Help </NavLink>
    </header>
);

export default Header;