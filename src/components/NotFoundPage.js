import React from "react";
import {Link} from "react-router-dom"

// "Link" component is a React component, allows client-side routing
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">to Home Page</Link>
    </div>
);

export default NotFoundPage;