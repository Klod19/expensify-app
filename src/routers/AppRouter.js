import React from "react";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

// IMPORT React Router, with 4 elements:
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

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

//here I define the BrowserRouter configuration with a stateless functionl component
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;